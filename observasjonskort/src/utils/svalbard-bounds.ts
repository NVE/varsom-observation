import { Polygon } from 'geojson';

// NB: Lng Lat in geojson.. Leaflet uses Lat Lng
export const SVALBARD_BOUNDS = {
  type: 'Polygon',
  coordinates: [
    [
      [33.57421875, 80.45222248756414],
      [22.543945312499996, 80.87282721505686],
      [18.6328125, 80.86585369109436],
      [10.546875, 80.14116260879798],
      [7.778320312499999, 79.28631294293976],
      [7.8662109375, 77.4850880888233],
      [14.809570312499998, 76.29995345893326],
      [22.148437499999996, 76.00547035565366],
      [26.806640624999996, 76.28954161916205],
      [31.069335937499996, 78.31385955743478],
      [35.2001953125, 79.85883334713468],
      [33.57421875, 80.45222248756414],
    ],
  ],
} as Polygon;