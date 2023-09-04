import { NORWAY_BOUNDS } from './norway-bounds';
import { SVALBARD_BOUNDS } from './svalbard-bounds';

enum MapLayerZIndex {
  OnlineMixedBackgroundLayer = 0,
  OfflineBackgroundLayer = 10,
  OnlineBackgroundLayer = 20,
  OfflineSupportLayer = 30,
  OnlineSupportLayer = 40,
  Top = 50,
}

export const MapSettings = {
  map: {
    tiles: {
      defaultZoom: 5,
      minZoom: 2,
      minZoomSupportMaps: 5,
      maxZoom: 18,
      zoomLevelObservationList: 12,
      edgeBufferTiles: 0,
      updateWhenIdle: false,

      topoMapLayers: {
        statensKartverk: {
          url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn&zoom={z}&x={x}&y={y}',
          options: {
            bounds: [
              [57.98808405905049, 4.626617431640625],
              [71.15939141681443, 30.816650390624996],
            ],
            zIndex: MapLayerZIndex.OnlineBackgroundLayer,
          },
          supportsOffline: true,
        },
        npolarBasiskart: {
          url: 'https://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_Svalbard_WMTS_3857/MapServer/tile/{z}/{y}/{x}?blankTile=false',
          options: {
            zIndex: MapLayerZIndex.OnlineBackgroundLayer,
            bounds: [
              [73.7357239, 7.4670978],
              [81.1569081, 36.0502348],
            ],
            maxNativeZoom: 13,
          },
          supportsOffline: true,
        },
        geoDataLandskap: {
          url: 'https://services.geodataonline.no/arcgis/rest/services/Geocache_WMAS_WGS84/GeocacheLandskap/MapServer/tile/{z}/{y}/{x}?blankTile=false',
          options: {
            zIndex: MapLayerZIndex.OnlineBackgroundLayer,
          },
        },
        openTopo: {
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          options: {
            zIndex: MapLayerZIndex.OnlineBackgroundLayer,
            // subdomains: [] ?
          },
        },
        arcGisOnline: {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
          options: {
            zIndex: MapLayerZIndex.OnlineBackgroundLayer,
          },
        },
      },

      topoMaps: {
        mixArcGisOnline: [
          {
            layer: 'arcGisOnline',
            options: {
              zIndex: MapLayerZIndex.OnlineMixedBackgroundLayer,
            },
            excludeBounds: [NORWAY_BOUNDS, SVALBARD_BOUNDS],
          },
          {
            layer: 'npolarBasiskart',
          },
          {
            layer: 'statensKartverk',
          },
        ],
        mixOpenTopo: [
          {
            layer: 'openTopo',
            options: {
              zIndex: MapLayerZIndex.OnlineMixedBackgroundLayer,
            },
            excludeBounds: [NORWAY_BOUNDS, SVALBARD_BOUNDS],
          },
          {
            layer: 'npolarBasiskart',
          },
          {
            layer: 'statensKartverk',
          },
        ],
        geoDataLandskap: [
          {
            layer: 'geoDataLandskap',
          },
        ],
      },

      supportTiles: [
        {
          name: 'steepness',
          description: 'STEEPNESS_MAP_DESCRIPTION',
          url: 'https://gis3.nve.no/arcgis/rest/services/wmts/Bratthet/MapServer/tile/{z}/{y}/{x}',
          enabled: false,
          checked: true,
          opacity: 0.5,
          geoHazardId: 10,
          availableOffline: false,
          subTile: {
            name: 'steepness-outlet',
            description: 'STEEPNESS_OUTLET_MAP_DESCRIPTION',
            url: 'https://gis3.nve.no/arcgis/rest/services/wmts/KastWMTS/MapServer/tile/{z}/{y}/{x}',
            enabled: true,
            checked: true,
            availableOffline: true,
            bounds: [
              [57.136239319177434, -0.17578125],
              [57.136239319177434, 36.03515625],
              [81.36128726057069, 36.03515625],
              [81.36128726057069, -0.17578125],
              [57.136239319177434, -0.17578125],
            ],
          },
          bounds: [
            [57.136239319177434, -0.17578125],
            [57.136239319177434, 36.03515625],
            [81.36128726057069, 36.03515625],
            [81.36128726057069, -0.17578125],
            [57.136239319177434, -0.17578125],
          ],
        },
        {
          name: 'steepness-greenland',
          description: 'STEEPNESS_GREENLAND_MAP_DESCRIPTION',
          url: 'https://gis3.nve.no/arcgis/rest/services/wmts/BratthetGronland/MapServer/tile/{z}/{y}/{x}',
          enabled: false,
          checked: false,
          opacity: 0.5,
          geoHazardId: 10,
          availableOffline: true,
          bounds: [
            [63.706357155206376, -55.30247736705827],
            [63.706357155206376, -48.83886886210894],
            [67.72977075500214, -48.83886886210894],
            [67.72977075500214, -55.30247736705827],
            [63.706357155206376, -55.30247736705827],
          ],
        },
        {
          name: 'outlets-greenland',
          description: 'OUTLETS_GREENLAND_MAP_DESCRIPTION',
          url: 'https://gis3.nve.no/arcgis/rest/services/wmts/UtlopGronland/MapServer/tile/{z}/{y}/{x}',
          enabled: false,
          checked: false,
          opacity: 0.5,
          geoHazardId: 10,
          availableOffline: true,
          bounds: [
            [63.706357155206376, -55.30247736705827],
            [63.706357155206376, -48.83886886210894],
            [67.72977075500214, -48.83886886210894],
            [67.72977075500214, -55.30247736705827],
            [63.706357155206376, -55.30247736705827],
          ],
        },
        {
          name: 'clayzones',
          description: 'CLAY_ZONES_MAP_DESCRIPTION',
          url: 'https://gis2.nve.no/arcgis/rest/services/wmts/Kvikkleire_Jordskred/MapServer/tile/{z}/{y}/{x}',
          enabled: true,
          checked: true,
          opacity: 0.5,
          geoHazardId: 20,
          availableOffline: false,
          bounds: [
            [57.136239319177434, -0.17578125],
            [57.136239319177434, 36.03515625],
            [81.36128726057069, 36.03515625],
            [81.36128726057069, -0.17578125],
            [57.136239319177434, -0.17578125],
          ],
        },
        {
          name: 'floodzoones',
          description: 'FLOOD_ZONES_MAP_DESCRIPTION',
          url: 'https://gis3.nve.no/arcgis/rest/services/wmts/Flomsoner1/MapServer/tile/{z}/{y}/{x}',
          enabled: true,
          checked: true,
          opacity: 0.5,
          geoHazardId: 60,
          availableOffline: false,
          bounds: [
            [57.136239319177434, -0.17578125],
            [57.136239319177434, 36.03515625],
            [81.36128726057069, 36.03515625],
            [81.36128726057069, -0.17578125],
            [57.136239319177434, -0.17578125],
          ],
        },
        {
          name: 'weakenedice',
          description: 'WEAKENED_ICE_MAP_DESCRIPTION',
          url: 'https://gis3.nve.no/arcgis/rest/services/wmts/SvekketIs/MapServer/tile/{z}/{y}/{x}',
          enabled: true,
          checked: true,
          opacity: 0.5,
          geoHazardId: 70,
          availableOffline: true,
          bounds: [
            [57.136239319177434, -0.17578125],
            [57.136239319177434, 36.03515625],
            [81.36128726057069, 36.03515625],
            [81.36128726057069, -0.17578125],
            [57.136239319177434, -0.17578125],
          ],
        },
      ],
    },
    search: {
      no: {
        url: 'https://ws.geonorge.no/stedsnavn/v1/navn',
        maxResults: 20,
        exactFirst: true,
        coordinateSystem: 4326,
        resultFields:
          'metadata.totaltAntallTreff,navn.skrivemåte,navn.navneobjekttype,navn.stedsnummer,navn.representasjonspunkt.øst,navn.representasjonspunkt.nord,navn.fylker.fylkesnavn,navn.kommuner.kommunenavn',
      },
      geonames: {
        url: 'https://secure.geonames.org',
        maxResults: 20,
        username: 'regobs',
      },
      searchHistorySize: 5,
    },
    mapSearchZoomToLevel: 13,
    unknownMapCenter: [59.911197, 10.741059],
    flyToOnGpsZoom: 13,
    maxClusterRadius: 60, // 30,
    extentColor: '#3344bb',
    startExtentColor: '#33bb44',
    endExtentColor: '#bb3344',
  },
};
