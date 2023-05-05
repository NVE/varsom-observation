import { AppMode } from "../models/app-mode.enum";
import { GeoHazard } from "../models/geo-hazard.enum";
import { LangKey } from "../models/lang-key.enum";
import { TopoMap } from "../models/topo-map.enum";
import { UserSetting } from "../models/user-settings.model";


export const DEFAULT_USER_SETTINGS: (langKey: LangKey) => UserSetting = (langKey: LangKey) => ({
  appMode: AppMode.Prod,
  language: langKey || LangKey.nb,
  currentGeoHazard: [GeoHazard.Snow],
  observationDaysBack: [
    { geoHazard: GeoHazard.Snow, daysBack: 2 },
    { geoHazard: GeoHazard.Ice, daysBack: 7 },
    { geoHazard: GeoHazard.Soil, daysBack: 3 },
    { geoHazard: GeoHazard.Water, daysBack: 3 },
  ],
  completedStartWizard: false,
  supportTiles: [],
  showMapCenter: false,
  showObservations: true,
  topoMap: TopoMap.default,
  showGeoSelectInfo: true,
  completedSimpleObsOnboarding: false,
  useRetinaMap: false,
  consentForSendingAnalytics: true,
  consentForSendingAnalyticsDialogCompleted: false,
  featureToggeGpsDebug: false,
  featureToggleDeveloperMode: false,
  preferCompleteSnowObservations: false,
});
