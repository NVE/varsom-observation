import { GeoHazard } from './geo-hazard.enum';
import * as L from 'leaflet';

export interface SupportTile extends SubTile {
  opacity: number;
  geoHazardId: GeoHazard;
  subTile?: SubTile;
}

export interface SubTile extends SubTileStore {
  description: string;
  url: string;
  availableOffline?: boolean;
  bounds: L.LatLngTuple[];
}

export interface SupportTileStore extends SubTileStore {
  opacity: number;
  subTile?: SubTileStore;
}

export interface SubTileStore {
  name: string;
  enabled: boolean;
  checked: boolean;
}
