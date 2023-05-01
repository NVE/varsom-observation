import { Polygon } from 'geojson';
import * as L from 'leaflet';

 enum GeoHazard {
  Snow = 10,
  Soil = 20,
  Water = 60,
  Ice = 70,
}

 interface SupportTile extends SubTile {
  opacity: number;
  geoHazardId: GeoHazard;
  subTile?: SubTile;
}

 interface SubTile extends SubTileStore {
  description: string;
  url: string;
  availableOffline?: boolean;
  bounds: L.LatLngTuple[];
}
/*
 interface SupportTileStore extends SubTileStore {
  opacity: number;
  subTile?: SubTileStore;
}*/ 

 interface SubTileStore {
  name: string;
  enabled: boolean;
  checked: boolean;
}

enum TopoMap {
  default = 'mixArcGisOnline',
  mixOpenTopo = 'mixOpenTopo',
  geoDataLandskap = 'geoDataLandskap',
}

enum TopoMapLayer {
  openTopo = 'openTopo',
  arcGisOnline = 'arcGisOnline',
  statensKartverk = 'statensKartverk',
  geoDataLandskap = 'geoDataLandskap',
  npolarBasiskart = 'npolarBasiskart',
}

export interface ITopoMapLayerOptions {
  url: string;

  /**
   * Default tile layer options.
   *
   * NB: map.component.ts also has a getTileLayerDefaultOptions method
   * that defines some defaults.
   */
  options?: L.TileLayerOptions;

  /**
   * Setting this to true will use the RegobsOfflineAwareTileLayer class
   * when creating the leaflet layer if on a device that supports offline maps.
   */
  supportsOffline?: boolean;
}

type TopoMapLayersSettings = {
  [mapLayer in TopoMapLayer]: ITopoMapLayerOptions;
};

export interface ITopoMapSettings {
  layer: keyof typeof TopoMapLayer;

  /**
   * TileLayerOptions to override "default" tile layer options
   * defined for each topo map layer.
   */
  options?: L.TileLayerOptions;

  /**
   * Exclude bounds.
   *
   * Used by RegobsTileLayer to avoid loading double base map tiles.
   * Why not just use the bounds defined under topoMapLayers?
   * Answer: Leaflet needs a rectangular bounding box.
   * These bounds are much more detailed.
   */
  excludeBounds?: Polygon[];
}

export type TopoMapsSettings = {
  [topoMap in TopoMap]: ITopoMapSettings[];
};

interface IMapTileSettings {
  defaultZoom: number;
  minZoom: number;
  minZoomSupportMaps: number;
  maxZoom: number;
  zoomLevelObservationList: number;
  edgeBufferTiles: number;
  updateWhenIdle: boolean;

  /**
   * Base map layers used in the app.
   */
  topoMapLayers: TopoMapLayersSettings;

  /**
   * Selectable maps in the app side menu.
   * Uses one or more topoMapLayers.
   */
  topoMaps: TopoMapsSettings;

  supportTiles: SupportTile[];
}

interface IMapSettings {
  tiles: IMapTileSettings;
  search: any;
  mapSearchZoomToLevel: number;
  unknownMapCenter: L.LatLngTuple;
  flyToOnGpsZoom: number;
  maxClusterRadius: number;
  extentColor: string;
  startExtentColor: string;
  endExtentColor: string;
}

export interface ISettings {
  authConfig: any;
  observations: any;
  services: any;
  db: any;
  map: IMapSettings;
  dateFormats: any;
  kdvElements: any;
  helpTexts: any;
  images: any;
  sentryDsn: string;
  errorEmailAddress: string;
  foregroundUpdateIntervalMs: number;
  backgroundFetchTimeout: number;
  popupDisclamerRefreshTimeMs: number;
  googleAnalytics: any;
  language: any;
  legalUrl: {
    nb: string;
    en: string;
  };
}