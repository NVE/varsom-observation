import { Component, Prop, getAssetPath, h } from '@stencil/core';
import { AvalancheObs, Graphic, ImageLocation, ImageLocationStartStop, LandslideObs, LatLng, LatLngBounds, MercatorBounds, Observation, PolygonsToPlot, TileProps } from '../varsom-observasjon/observation-model';
import SphericalMercator from '@mapbox/sphericalmercator';
import { Feature, Polygon } from '@turf/turf';

import { PositionToPlot } from '../varsom-observasjon/observation-model';
import { MapSettings as settings } from '../../utils/map-settings' ;
import { ITopoMapLayerOptions } from '../../utils/map-settings-model';
import { RegobsGeoHazardMarker } from '../../utils/geo-hazard-marker';
import * as L from 'leaflet'
import { getGeoHazardIdFromName } from '../../utils/utils';
import { MapLayersService } from '../../utils/static-tiles.service';

import { race, ReplaySubject, Subject, debounceTime, distinctUntilChanged, interval, map, share, skipWhile, takeUntil } from 'rxjs';


@Component({
  tag: 'varsom-static-map',
  styleUrl: 'varsom-map.css',
  shadow: false,
  assetsDirs: ['images']
})
export class VarsomStaticMap {

  @Prop() allowZoom?: boolean;
  @Prop() observation?: Observation;

  componentCreatedOrResized: any; 
  ngDestroy$: any;
  //const trackByImgProps: TrackByFunction<TileProps> = (index, item) => item.src;
  //const trackByGraphic: TrackByFunction<Graphic> = (index, item) => item.id;
  

  container: HTMLElement;

  // We only have map services with 256px tiles at the moment.
  TILE_SIZE = 256;
  PADDING = 15;
  SVG_PADDING = 20;
  
   createGeojsonBounds = ({ minLng, minLat, maxLng, maxLat }: LatLngBounds): Feature<Polygon> => ({
    type: 'Feature',
    properties: {},
    bbox: [minLng, minLat, maxLng, maxLat],
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [minLng, minLat],
          [maxLng, minLat],
          [maxLng, maxLat],
          [minLng, maxLat],
          [minLng, minLat],
        ],
      ],
    },
  });
  
   
    tiles: TileProps[] = null;
    graphics: Graphic[] = [];
  
     
    
    private size = new ReplaySubject<{ w: number; h: number }>(1);
    size$ = this.size.pipe(
      // NB! The debounceTime here must be lower than the interval time
      // specified in startSizeFinder, if not this may not emit.
      debounceTime(50),
      skipWhile(({ w, h }) => w === 0 || h === 0),
      map(({ w, h }) => ({
        w: w.toFixed(0),
        h: h.toFixed(0),
      })),
      distinctUntilChanged((prev, curr) => prev.h === curr.h && prev.w === curr.w),
      map(({ w, h }) => ({ w: +w, h: +h })),
      share()
    );

  
componentDidRender(){
   
    // Create map after view has been initialized, we need the component to be in the dom
    // to figure out the container size
    this.startSizeFinder();
  }

  componentWillLoad(){
    console.log(this.observation)
    this.componentCreatedOrResized = new Subject<void>();
    this.ngDestroy$ = new Subject<void>();  //TODO ????

    this.componentCreatedOrResized
    .pipe(
      takeUntil(this.ngDestroy$),
      // Use a large debounceTime. If the user is resizing the window, we want to recreate the
      // map after resizing is finished.
      debounceTime(500)
    ).subscribe(() => this.updateContainerSize());

  this.size$.pipe(takeUntil(this.ngDestroy$)).subscribe(({ w, h }) => this.createMap(w, h));

  //tester...
  this.createMap(10, 10 );
//tester...
  }

  
  startSizeFinder() {
    // Read map container size
    interval(500)
      .pipe(
        // When we have a valid size emitted on size$, stop the interval
        takeUntil(race(this.size$))//, this.ngDestroy$))  //TODO stop interval
      )
      .subscribe(() => this.updateContainerSize());
  }

   
  updateContainerSize() {
    if (this.container){//.nativeElement) {
      //const { width: w, height: h } = this.container.nativeElement.getBoundingClientRect();
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.size.next({ w, h });
      //this.size.next({ w, h });
    }
  }

    /*get trackByImgProps() {
      return trackByImgProps;
    }
  
    get trackByGraphic() {
      return trackByGraphic;
    }*/
  
    mercator = new SphericalMercator({ size: this.TILE_SIZE});
  
    //  private sanitizer: DomSanitizer,
    //private cdr: ChangeDetectorRef,
    mapLayerService: MapLayersService;
    //private logger: LoggingService
     
    

      
   getTileProperties(
    
     // mapId: string,
      config: ITopoMapLayerOptions,
      { w: x0, n: y0, zoom }: MercatorBounds, // x0, y0 = top left corner of map
      w: number, // Map width
      h: number, // Map height
      tileSize: number
    ): TileProps[] {
      console.log("tileproperties");
      const result: TileProps[] = [];
      const cornerTileX = Math.floor(x0 / tileSize);
      const cornerTileY = Math.floor(y0 / tileSize);
  
      for (let tileY = cornerTileY; tileY * tileSize < y0 + h; tileY++) {
        for (let tileX = cornerTileX; tileX * tileSize < x0 + w; tileX++) {
          const url = this.mapLayerService.getUrlForTile(//mapId,
          config, tileX, tileY, zoom);
  
          result.push({
             src: url,//this.sanitizer.bypassSecurityTrustUrl(url),
            left: `${tileX * tileSize - x0}px`,
            top: `${tileY * tileSize - y0}px`,
          });
        }
      }
  
      
      return result;
    }

   getDamagePositions(obs: Observation) {
      if (obs && obs._damageObs && obs._damageObs.some((d) => d.DamagePosition)) {
        return obs._damageObs.filter(
          (d) => d.DamagePosition && d.DamagePosition.Latitude && d.DamagePosition.Longitude
        ).map((d) => L.latLng(d.DamagePosition.Latitude, d.DamagePosition.Longitude));
      }
      return undefined;
    }

   getLocation(obs: Observation): ImageLocation {
      return {
        latLng: L.latLng(obs._latitude, obs._longitude),
        geoHazard: getGeoHazardIdFromName(obs._geoHazardName),
        startStopLocation: this.getStartStopLocation(obs),
        damageLocations: this.getDamagePositions(obs),
      };
    }

   getStartStopLocation(obs: Observation): ImageLocationStartStop {
      if (obs._avalancheObs) {
        return {
          ...this.obs2Latlng(obs._avalancheObs),
          totalPolygon: this.extent2Polygon(obs._avalancheObs.Extent, settings.map.extentColor),
          startPolygon: this.extent2Polygon(obs._avalancheObs.StartExtent, settings.map.startExtentColor),
          endPolygon: this.extent2Polygon(obs._avalancheObs.StopExtent, settings.map.endExtentColor),
        };
      }
      if (obs._landslideObs) {
        return {
          ...this.obs2Latlng(obs._landslideObs),
          totalPolygon: this.extent2Polygon(obs._landslideObs.Extent, settings.map.extentColor),
          startPolygon: this.extent2Polygon(obs._landslideObs.StartExtent, settings.map.startExtentColor),
          endPolygon: this.extent2Polygon(obs._landslideObs.StopExtent, settings.map.endExtentColor),
        };
      }
  
      if (obs._waterLevel2) {
        return {
          totalPolygon: this.extent2Polygon(obs._waterLevel2.Extent, settings.map.extentColor),
        };
      }
      return undefined;
    }
  
     obs2Latlng(obs: LandslideObs | AvalancheObs) {
      return {
        start: obs.StartLat && obs.StartLong ? L.latLng(obs.StartLat, obs.StartLong) : undefined,
        stop: obs.StopLat && obs.StopLong ? L.latLng(obs.StopLat, obs.StopLong) : undefined,
      };
    }

     extent2Polygon(extent: number[][], color: string) {
      return extent
        ? new L.Polygon(
            extent.map(([lng, lat]) => [lat, lng]),
            { color }
          )
        : null;
    }

    getPositionsToPlot(){

      const location = this.getLocation(this.observation);

      // This controls the draw order / z-index for graphics
      const positions = [];
      
      if (location.startStopLocation?.start) {
        positions.push({ pos: location.startStopLocation.start, type: 'start' });
      }
      if (location.startStopLocation?.stop) {
        positions.push({ pos: location.startStopLocation.stop, type: 'stop' });
      }
      if (location.damageLocations) {
        positions.push(...location.damageLocations.map((pos) => ({ pos, type: 'damage' })));
      }
      if (location.latLng) {
        positions.push({ pos: location.latLng, type: 'obs' });
      }
      return positions;
    }
  
     getStartZoom() {
      // If start / stop avalanche should be plotted, start more zoomed in. If we are zoomed out we cant see the
      // avalanche path.
      const location = this.getLocation(this.observation);

      if (
        (location?.startStopLocation?.start && location?.startStopLocation?.stop) ||
        location?.startStopLocation?.totalPolygon
      ) {
        return 14;
      }
      return settings.map.tiles.zoomLevelObservationList;

      
    }
  
     getLatLngBounds(positions: LatLng[]): {
      latLngBounds: LatLngBounds;
      geojsonBounds: Feature<Polygon>;
    } {
      const positionsForBoundsCheck = [...positions];
      const pos = positionsForBoundsCheck.shift();
      let minLat = pos.Latitude;
      let maxLat = pos.Latitude;
      let minLng = pos.Longitude;
      let maxLng = pos.Longitude;
  
      while (positionsForBoundsCheck.length) {
        const pos = positionsForBoundsCheck.shift();
        minLat = pos.Latitude < minLat ? pos.Latitude : minLat;
        maxLat = pos.Latitude > maxLat ? pos.Latitude : maxLat;
        minLng = pos.Longitude < minLng ? pos.Longitude : minLng;
        maxLng = pos.Longitude > maxLng ? pos.Longitude : maxLng;
      }
  
      const latLngBounds = { minLat, minLng, maxLat, maxLng };
      const geojsonBounds = this.createGeojsonBounds(latLngBounds);
  
      return { latLngBounds, geojsonBounds };
    }
  
    getMercatorBounds(
      { minLat, maxLat, minLng, maxLng }: LatLngBounds,
      width: number, // Map width in px
      height: number // Map height in px
    ): MercatorBounds {
      let zoom = this.getStartZoom();
  
      let n = 0;
      let s = 0;
      let e = 0;
      let w = 0;
      let diffWidth = 0;
      let diffHeight = 0;
      let boundsWidth = 0;
      let boundsHeight = 0;
      while (zoom) {
        [w, n] = this.mercator.px([minLng, maxLat], zoom);
        [e, s] = this.mercator.px([maxLng, minLat], zoom);
  
        boundsHeight = s - n + this.PADDING * 2;
        boundsWidth = e - w + this.PADDING * 2;
        diffWidth = width - boundsWidth;
        diffHeight = height - boundsHeight;
  
        if (diffWidth > 0 && diffHeight > 0) {
          break;
        }
  
        zoom = zoom - 1;
      }
  
      n = n - diffHeight / 2 - this.PADDING;
      s = s + diffHeight / 2;
      w = w - diffWidth / 2 - this.PADDING;
      e = e + diffWidth / 2;
  
      return { zoom, n, s, e, w };
    }
  
     getPolygons(): PolygonsToPlot {
      const location = this.getLocation(this.observation);
      // getLatLngs on polygons may return nested arrays with depth of 3 therefore we use flat(3) to simplify the result
      const polygons = {} as PolygonsToPlot;
      const startStoplocation = location?.startStopLocation;
      if (startStoplocation?.totalPolygon) {
        polygons.totalPolygon = startStoplocation.totalPolygon.getLatLngs().flat(3);
      }
      if (startStoplocation?.startPolygon) {
        polygons.startPolygon = startStoplocation.startPolygon.getLatLngs().flat(3);
      }
      if (startStoplocation?.endPolygon) {
        polygons.endPolygon = startStoplocation.endPolygon.getLatLngs().flat(3);
      }
      return polygons;
    }
  
     async createMap(w: number, h: number) {
      const positions = this.getPositionsToPlot();
      const polygons = this.getPolygons();
      //add all positions together to find max and min latlng
      const positionsDestructured = positions.map((p) => p.pos);
      const positionsAndPolygonsLatLngs = [
        ...positionsDestructured,
        ...(polygons.totalPolygon ? polygons.totalPolygon : []),
        ...(polygons.startPolygon ? polygons.startPolygon : []),
        ...(polygons.endPolygon ? polygons.endPolygon : []),
      ];
  
      const { latLngBounds, geojsonBounds
     } = this.getLatLngBounds(positionsAndPolygonsLatLngs);
      const mapLayers = await this.mapLayerService.getMapLayerForLocation(geojsonBounds);
      const mercatorBounds = this.getMercatorBounds(latLngBounds, w, h);
  
      // Map tiles
      this.tiles = mapLayers
        .map(({ //layerId,
           layerConfig }) => this.getTileProperties(//layerId, 
        layerConfig, mercatorBounds, w, h, this.TILE_SIZE))
        .flat();
  
      this.createGraphics(positions, polygons, mercatorBounds);
  
    
  //    this.cdr.detectChanges(); // Async operation, so we must notify angular that changes has occured
    }
  
     createGraphics(
      positions: PositionToPlot[],
      polygons: PolygonsToPlot,
      { w: x0, n: y0, zoom }: MercatorBounds
    ) {
      // Reset map graphics
      this.graphics = [];
      let start = null;
      let stop = null;
      for (const { pos, type } of positions) {
        const [x, y] = this.mercator.px([pos.lng, pos.lat], zoom);
        const topPx = y - y0;
        const leftPx = x - x0;
  
        if (type === 'obs') {
          this.createCenterMarker(topPx, leftPx);
        } else if (type === 'start') {
          this.createStartGraphic(topPx, leftPx);
          start = { x, y };
        } else if (type === 'stop') {
          this.createStopGraphic(topPx, leftPx);
          stop = { x, y };
        } else if (type === 'damage') {
          //this.createDamageGraphic(topPx, leftPx);
        } else {
          throw new Error('Type not implemented');
        }
      }
  
      if (start && stop) {
        this.createStartStopLine(start, stop, x0, y0);
      }
      if (polygons.totalPolygon) {
        this.createPolygons(polygons.totalPolygon, x0, y0, zoom, '#3344bb');
      }
      if (polygons.startPolygon) {
        this.createPolygons(polygons.startPolygon, x0, y0, zoom, '#33bb44');
      }
      if (polygons.endPolygon) {
        this.createPolygons(polygons.endPolygon, x0, y0, zoom, '#bb3344');
      }
    }
  
     createPolygons(polygons: LatLng[], w: number, n: number, zoom: number, fill: string) {
      const mercatorPoints = this.getMercatorPointsFromPolygonsLtLng(polygons, zoom);
      const listOfXPoints = mercatorPoints.map((l) => l.Latitude);
      const listOfYPoints = mercatorPoints.map((l) => l.Longitude);
      // find lowest x point
      const svg_x0 = Math.min(...listOfXPoints) - this.SVG_PADDING;
      //find lowest y point
      const svg_y0 = Math.min(...listOfYPoints) - this.SVG_PADDING;
      // get width and height to set viewBox size
      const width = Math.max(...listOfXPoints);
      const height = Math.max(...listOfYPoints);
      const polylinesPointsToString = this.createPolylinesPointsFromMercatorPoints(mercatorPoints, svg_x0, svg_y0)
        .flat()
        .join(',');
  
      this.graphics.unshift({
        id: 'start-stop-line',
        svg: //this.sanitizer.bypassSecurityTrustHtml
        (`
        <svg pointer-events="none" viewBox="0 0 ${width} ${height}" width=${width} height=${height}>
          <polyline points="${polylinesPointsToString}"
            stroke="${fill}"
            stroke-opacity="1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="${fill}"
            fill-opacity="0.2"
            fill-rule="evenodd" />
        </svg>`),
        style: {
          'left.px': svg_x0 - w,
          'top.px': svg_y0 - n,
        },
      });
    }
  
     getMercatorPointsFromPolygonsLtLng(polygons: LatLng[], zoom: number): LatLng[] {
      const points: LatLng[] = [];
      for (let i = 0; i < polygons.length; i++) {
        const [xA, yA] = this.mercator.px([polygons[i].Longitude, polygons[i].Latitude], zoom);
        points.push({
      Longitude: xA,
      Latitude: yA});
      }
      // adding first point one more time to close the path
      const [xA, yA] = this.mercator.px([polygons[0].Longitude, polygons[0].Latitude], zoom);
      points.push(
        {
          Longitude: xA,
          Latitude: yA
        });
      return points;
    }
  
     createPolylinesPointsFromMercatorPoints(lines: LatLng[], svg_x0: number, svg_y0: number): number[][] {
      return lines.map((l) => {
        return [l.Latitude - svg_x0, l.Longitude - svg_y0];
      });
    }
  
     createCenterMarker(topPx: number, leftPx: number) {
      const location = this.getLocation(this.observation);
      const svg = //this.sanitizer.bypassSecurityTrustHtml(
        RegobsGeoHazardMarker.getIconSvg(location.geoHazard); //)
      // TODO: Can we extract width and height from svg?
      const svgWidth = 26;
      const svgHeight = 37;
      const style = { 'left.px': leftPx - svgWidth / 2, 'top.px': topPx - svgHeight };
      this.graphics.push({ svg, style, id: 'centerMarker' });
    }
  
     createStartGraphic(topPx: number, leftPx: number) {
      const w = 18;
      const h = 28;
  
      this.graphics.push({
        id: 'start',
        svg: `<img src=${getAssetPath(`/assets/icons/skred-startposisjon.svg`)}></>`,
        style: {
          'left.px': leftPx - w / 2,
          'top.px': topPx - h,
        },
      });
    }
     createStopGraphic(topPx: number, leftPx: number) {
      const w = 18;
      const h = 28;
  
      this.graphics.push({
        id: 'start',
        svg: `<img src=${getAssetPath(`/assets/icons/skred-startposisjon.svg`)}></>`,
        style: {
          'left.px': leftPx - w / 2,
          'top.px': topPx - h,
        },
      });
    }
  
     createStartStopLine(start: { x: number; y: number }, stop: { x: number; y: number }, x0: number, y0: number) {
      const svg_x0 = Math.min(start.x, stop.x) - this.SVG_PADDING;
      const svg_y0 = Math.min(start.y, stop.y) - this.SVG_PADDING;
      const w = Math.ceil(Math.abs(start.x - stop.x)) + this.SVG_PADDING * 2;
      const h = Math.ceil(Math.abs(start.y - stop.y)) + this.SVG_PADDING * 2;
  
      this.graphics.unshift({
        id: 'start-stop-line',
        // width and height on svg?
        svg: //this.sanitizer.bypassSecurityTrustHtml
        (`
        <svg pointer-events="none" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
          <path
            stroke="red"
            stroke-opacity="0.9"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M${start.x - svg_x0} ${start.y - svg_y0}L${stop.x - svg_x0} ${stop.y - svg_y0}"></path>
        </svg>`),
        style: {
          'left.px': svg_x0 - x0,
          'top.px': svg_y0 - y0,
        },
      });
    }
  
    /*createDamageGraphic(topPx: number, leftPx: number) {
      //this.logger.debug('WARNING! Damage graphics not implemented in obs card');
    }
    
 */
  
  

  render(){
    return <div class="container" ref={(el) => this.container = el as HTMLElement}>
      {console.log(this.tiles)} 
      {this.tiles.map((el) =>{
return <img
src={el.toString()}
class="tile"
loading="lazy"
alt="Map tile"
decoding="async"
></img>
})
}

{this.graphics.map((el) =>{
return <div class="graphic">
{el.svg}
</div>
})
}
  
  </div>  

}
} 
  

  
  
