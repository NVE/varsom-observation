/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ObserverResponseDto {
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  Guid?: string;
  ObserverGroup?: ObserverGroupDto[];
  Nick?: string;
}

export interface ObserverGroupDto {
  /** @format int32 */
  Id?: number;
  Name?: string;
  ObserverGroupDescription?: string;
  WorkPlace?: string;
  Comment?: string;
}

export interface MyPageData {
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  Guid?: string;
  /**
   * Returns unique id that identifies an observer
   * @format int32
   */
  ObserverId?: number;
  NickName?: string;
  Email?: string;
  MobPhoneNr?: string;
  FirstName?: string;
  LastName?: string;
  WorkPlace?: string;
  /** @format int32 */
  Adrnr?: number;
  /** @format date-time */
  DtRegTime?: string;
  MemberOfGroups?: ObserverGroupDto[];
  PendingInvitationsToGroups?: ObserverGroupDto[];
  Competence?: ObserverCompetenceDto[];
  /** @format int32 */
  NumberOfObservations?: number;
  /** @format int32 */
  MainGeohazardTID?: number;
  /** @format date-time */
  LastRegistrationDate?: string;
  DefaultMunicipality?: string;
  Roles?: string[];
}

export interface ObserverCompetenceDto {
  /** @format int32 */
  CompetenceTID?: number;
  /** @format int32 */
  GeohazardTID?: number;
  CompetenceName?: string;
  CompetenceDescription?: string;
}

export interface ObserverPatchRequestDto {
  Nick?: string;
}

export interface GeoLocationInfo {
  /** @format int32 */
  Masl?: number;
  /** @format double */
  Steepness?: number;
  WarningRegionId?: string;
  WarningRegionName?: string;
  Name?: string;
  Municipality?: string;
  MunicipalityId?: string;
  AdminAreaName?: string;
  AdminAreaId?: string;
  Country?: string;
  CountryCode?: string;
}

export interface GeoLocationSummary {
  Header?: string;
  Lines?: string[];
}

export interface HelptextDto {
  /** @format int32 */
  RegistrationTID?: number;
  /** @format int32 */
  GeoHazardTID?: number;
  /** @format int32 */
  LangKey?: number;
  Text?: string;
}

export interface KdvElementsResponseDto {
  KdvRepositories?: Record<string, KdvElement[]>;
  ViewRepositories?: object;
}

export interface KdvElement {
  /** @format int32 */
  Id?: number;
  Name?: string;
  Description?: string;
}

export interface ObsLocationsResponseDtoV2 {
  Name?: string;
  /** @format int32 */
  Id?: number;
  /** @format double */
  Distance?: number;
  LatLngObject?: LatLngObject;
  ObserverNickName?: string;
  ObserverGroupName?: string;
  /** @format int32 */
  ObserverGroupId?: number;
  LocationDescription?: string;
  /** @format int32 */
  GeoHazardId?: number;
}

export interface LatLngObject {
  /** @format double */
  Latitude?: number;
  /** @format double */
  Longitude?: number;
}

export interface RegistrationViewModel {
  /** @format int32 */
  RegId?: number;
  /**
   * Ekstern referanse ID. Må være unik for Applikasjon.
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  ExternalReferenceId?: string;
  GeoHazardName?: string;
  /**
   * Timestamp for registrert i systemet. (Read-Only)
   * @format date-time
   */
  DtRegTime?: string;
  /**
   * Timestamp for endret i systemet. (Read-Only)
   * @format date-time
   */
  DtChangeTime?: string;
  SourceName?: string;
  Observer?: ObserverViewModel;
  ObsLocation?: ObsLocationViewModel;
  Attachments?: AttachmentViewModel[];
  AvalancheActivityObs2?: AvalancheActivityObs2ViewModel[];
  AvalancheEvalProblem2?: AvalancheEvalProblem2ViewModel[];
  AvalancheEvaluation3?: AvalancheEvaluation3ViewModel;
  AvalancheObs?: AvalancheObsViewModel;
  CompressionTest?: CompressionTestViewModel[];
  DangerObs?: DangerObsViewModel[];
  GeneralObservation?: GeneralObservationViewModel;
  IceCoverObs?: IceCoverViewModel;
  IceThickness?: IceThicknessViewModel;
  Incident?: IncidentViewModel;
  LandSlideObs?: LandslideViewModel;
  SnowProfile2?: SnowProfileViewModel;
  SnowSurfaceObservation?: SnowSurfaceViewModel;
  WeatherObservation?: WeatherViewModel;
  WaterLevel2?: Waterlevel2ViewModel;
  DamageObs?: DamageObsViewModel[];
  Summaries?: Summary[];
  AttachmentSummaries?: Summary[];
  SnowProfile?: AttachmentViewModel;
  AvalancheEvaluation?: AvalancheEvaluationViewModel;
  AvalancheActivityObs?: AvalancheActivityObsViewModel[];
  AvalancheDangerObs?: AvalancheDangerObsViewModel[];
  AvalancheEvalProblem?: AvalancheEvalProblemViewModel[];
  AvalancheEvaluation2?: AvalancheEvaluation2ViewModel;
  SnowCoverObs?: SnowCoverObsViewModel;
  WaterLevel?: WaterLevelViewModel;
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is). The GeoHazardKD unique identifier
   * @format int32
   */
  GeoHazardTID: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 100 | 110 | 200 | 999;
  /**
   * Kildereferanse på en registrering. F.eks. har brukeren sette dette selv eller er det referert til fra nyheter. The SourceKD unique identifier
   * @format int32
   */
  SourceTID?: number;
  /**
   * Tiden da observasjonen ble gjort.
   * @format date-time
   */
  DtObsTime: string;
  /** @format int32 */
  ObserverGroupID?: number;
  ObserverGroupName?: string;
  /** If set to true, the user's account will not be shown publicly. NVE will still be able to see who sent in the observation. */
  Anonymous?: boolean;
}

export interface ObserverViewModel {
  NickName?: string;
  /** @format int32 */
  ObserverID?: number;
  /** @format int32 */
  CompetenceLevelTID?: number;
  CompetenceLevelName?: string;
}

export interface ObsLocationViewModel {
  /**
   * Anngir varslingsregion stedet tilhører. Varslingsregioner gitt i ForecastRegionKD. The ForecastRegionKD unique identifier
   * @format int32
   */
  ForecastRegionTID?: number;
  ForecastRegionName?: string;
  /** @format int32 */
  Height?: number;
  MunicipalName?: string;
  /** Kommune nr stedet tilhører */
  MunicipalNo?: string;
  /** @format int32 */
  CountryId?: number;
  CountryName?: string;
  UTMSourceName?: string;
  /** Read-only generert tittel */
  Title?: string;
  /**
   * ObsLocationID
   * @format int32
   */
  ObsLocationID?: number;
  /**
   * Navn på stedet
   * @maxLength 60
   */
  LocationName?: string;
  /**
   * Beskriver stedet.
   * @maxLength 1024
   */
  LocationDescription?: string;
  /**
   * Latitude
   * @format double
   */
  Latitude: number;
  /**
   * Longitude
   * @format double
   */
  Longitude: number;
  /**
   * Kildehenvisning på hvordan koordinaten er satt. (GPS i tlf, klikk i kart, osv). Verdier gitt i UTMSourceKD
   * @format int32
   */
  UTMSourceTID?: number;
  /**
   * Usikkerhet i posisjon i meter. Anslås på web og i app hentes det fra gps.
   * @format int32
   */
  Uncertainty?: number;
}

export interface AttachmentViewModel {
  /** @format int32 */
  AttachmentId?: number;
  /** GeoHazard name */
  GeoHazardName?: string;
  /** Registration name */
  RegistrationName?: string;
  /** Urls in different formats */
  UrlFormats?: {
    Raw?: string;
    Original?: string;
    Thumbnail?: string;
    Large?: string;
    Medium?: string;
  };
  /** Full original image url */
  Url?: string;
  /**
   * Navn på fotograf.
   * @maxLength 60
   */
  Photographer?: string;
  /**
   * Rettigheter til bilde.
   * @maxLength 60
   */
  Copyright?: string;
  /**
   * Hvilken himmelretning peker bilde. Gis i grader slik gitt på kompass. 0 er nord og 90 er øst osv.
   * @format int32
   */
  Aspect?: number;
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is). The GeoHazardKD unique identifier
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Hva er bildet av. Dette feltet relaterer bildet til en observasjonstype. Feks værobservasjon, faretegn, osv. The RegistrationKD unique identifier
   * @format int32
   */
  RegistrationTID?: number;
  /**
   * Kommentarfelt for bildet. F.eks for å beskrive det.
   * @maxLength 2048
   */
  Comment?: string;
  AttachmentMimeType?: string;
  /** Om bildet skal vises først i registreringen, eller ikke */
  IsMainAttachment?: boolean;
}

export interface AvalancheActivityObs2ViewModel {
  EstimatedNumName?: string;
  ExposedHeightComboName?: string;
  AvalancheExtName?: string;
  AvalCauseName?: string;
  AvalTriggerSimpleName?: string;
  DestructiveSizeName?: string;
  AvalPropagationName?: string;
  /** @format int32 */
  EstimatedNumTID?: number;
  /** @format date-time */
  DtStart?: string;
  /** @format date-time */
  DtEnd?: string;
  ValidExposition?: string;
  /** @format int32 */
  ExposedHeight1?: number;
  /** @format int32 */
  ExposedHeight2?: number;
  /** @format int32 */
  ExposedHeightComboTID?: number;
  /** @format int32 */
  AvalancheExtTID?: number;
  /** @format int32 */
  AvalCauseTID?: number;
  /** @format int32 */
  AvalTriggerSimpleTID?: number;
  /** @format int32 */
  DestructiveSizeTID?: number;
  /** @format int32 */
  AvalPropagationTID?: number;
  Comment?: string;
}

export interface AvalancheEvalProblem2ViewModel {
  AvalProbabilityName?: string;
  AvalTriggerSimpleName?: string;
  AvalCauseDepthName?: string;
  ExposedHeightComboName?: string;
  AvalancheExtName?: string;
  AvalCauseName?: string;
  DestructiveSizeName?: string;
  AvalPropagationName?: string;
  AvalCauseAttributeLightName?: string;
  AvalCauseAttributeThinName?: string;
  AvalCauseAttributeSoftName?: string;
  AvalCauseAttributeCrystalName?: string;
  /**
   * Sannsynlighet for skred. The AvalProbabilityKD unique identifier
   * @format int32
   */
  AvalProbabilityTID?: number;
  /** @format int32 */
  AvalPropagationTID?: number;
  /**
   * The AvalTriggerSimpleKD unique identifier
   * @format int32
   */
  AvalTriggerSimpleTID?: number;
  /**
   * Hvor dypt ligger det overnevnte svake laget? The AvalCauseDepthKD unique identifier
   * @format int32
   */
  AvalCauseDepthTID?: number;
  /**
   * Velg utsatte retninger
   * @maxLength 8
   */
  ValidExposition?: string;
  /**
   * Øverste høyde på “utsatt høyde” symbolet.
   * @format int32
   */
  ExposedHeight1?: number;
  /**
   * Nederste høyde på “utsatt høyde” symbolet.
   * @format int32
   */
  ExposedHeight2?: number;
  /**
   * Hvilket symbol brukes? Er utsatt tereng over ExposedHeight2 eller under den? The ExposedHeightComboKD unique identifier
   * @format int32
   */
  ExposedHeightComboTID?: number;
  /**
   * Skredtype. I appen er dette 1. felt under skredproblem. The AvalancheExtKD unique identifier
   * @format int32
   */
  AvalancheExtTID?: number;
  /** Kommentar til skredproblemet */
  Comment?: string;
  /**
   * Hvilket svakt lag løsner skredet på? The AvalCauseKD unique identifier
   * @format int32
   */
  AvalCauseTID?: number;
  /** @format int32 */
  AvalCauseAttributeLightTID?: number;
  /** @format int32 */
  AvalCauseAttributeThinTID?: number;
  /** @format int32 */
  AvalCauseAttributeSoftTID?: number;
  /** @format int32 */
  AvalCauseAttributeCrystalTID?: number;
  /**
   * Sannsynlig tilleggsbelastning for å utløse skred. The DestructiveSizeKD unique identifier
   * @format int32
   */
  DestructiveSizeTID?: number;
}

export interface AvalancheEvaluation3ViewModel {
  AvalancheDangerName?: string;
  ForecastCorrectName?: string;
  /**
   * Faregrad. The AvalancheDangerKD unique identifier
   * @format int32
   */
  AvalancheDangerTID?: number;
  /**
   * Her blir Skredfarevurdering skrevet inn. I appen blir “Utstrekning” lagt til som tekst i denne kolonnen
   * @maxLength 1024
   */
  AvalancheEvaluation?: string;
  /**
   * Her blir forventet utvikling skrevet inn.
   * @maxLength 1024
   */
  AvalancheDevelopment?: string;
  /**
   * Felt hvor observatøren kan fortelle de syns varslet stemmer. Valg fra liste gitt i ForecastCorrectKD. The ForecastCorrectKD unique identifier
   * @format int32
   */
  ForecastCorrectTID?: number;
  /**
   * Kommetarfelt for utdypende kommentar om varslet stemmer eller ikke.
   * @maxLength 1024
   */
  ForecastComment?: string;
}

export interface AvalancheObsViewModel {
  DestructiveSizeName?: string;
  AvalancheTriggerName?: string;
  AvalancheName?: string;
  TerrainStartZoneName?: string;
  AvalCauseName?: string;
  /**
   * Tid da skredet gikk.
   * @format date-time
   */
  DtAvalancheTime: string;
  /**
   * Tidligste tidspunkt da skredet gikk.
   * @format date-time
   */
  DtEarliestAvalancheTime?: string;
  /**
   * Eksposisjon
   * @format int32
   */
  Aspect?: number;
  /**
   * Høyde i løsneområde
   * @format int32
   */
  HeightStartZone?: number;
  /**
   * Høyde i stoppområdet
   * @format int32
   */
  HeightStopZone?: number;
  /**
   * Størrelse. The DestructiveSizeKD unique identifier
   * @format int32
   */
  DestructiveSizeTID?: number;
  /**
   * Skredutløser. The AvalancheTriggerKD unique identifier
   * @format int32
   */
  AvalancheTriggerTID?: number;
  /**
   * Skredtype. The AvalancheKD unique identifier
   * @format int32
   */
  AvalancheTID?: number;
  /**
   * Terrengtype i løsneområdet. The TerrainStartZoneKD unique identifier
   * @format int32
   */
  TerrainStartZoneTID?: number;
  /**
   * SnowLine
   * @format int32
   */
  SnowLine?: number;
  /** ValidExposition */
  ValidExposition?: string;
  /**
   * Skredutløser. The AvalCauseTID unique identifier
   * @format int32
   */
  AvalCauseTID?: number;
  /**
   * Bruddhøyde
   * @format int32
   */
  FractureHeight?: number;
  /**
   * Bruddbredde
   * @format int32
   */
  FractureWidth?: number;
  /** Skredbanenavn */
  Trajectory?: string;
  /**
   * StartLat
   * @format double
   */
  StartLat?: number;
  /**
   * StartLong
   * @format double
   */
  StartLong?: number;
  /**
   * StopLat
   * @format double
   */
  StopLat?: number;
  /**
   * StopLong
   * @format double
   */
  StopLong?: number;
  /** Ble skredet fjernutløst? */
  RemotelyTriggered?: boolean;
  /** Hull of avalanche polygon, List(lon, lat) */
  Extent?: number[][];
  /** Hull of avalanche starting zone, List(lon, lat) */
  StartExtent?: number[][];
  /** Hull of avalanche runout zone, List (lon, lat) */
  StopExtent?: number[][];
  /** Comment */
  Comment?: string;
}

export interface CompressionTestViewModel {
  CompressionTestName?: string;
  PropagationName?: string;
  StabilityEvalName?: string;
  ComprTestFractureName?: string;
  /**
   * The CompressionTestKDV unique identifier
   * @format int32
   */
  CompressionTestTID?: number;
  /**
   * TapsFracture
   * @format int32
   */
  TapsFracture?: number;
  /**
   * TapsFullPropagation
   * @format int32
   */
  TapsFullPropagation?: number;
  /**
   * The PropagationKD unique identifier
   * @format int32
   */
  PropagationTID?: number;
  /**
   * FractureDepth
   * @format double
   * @min 0
   * @max 100
   */
  FractureDepth?: number;
  /**
   * PST X distance (in meters)
   * @format double
   * @min 0
   * @max 100
   */
  PstX?: number;
  /**
   * PST Y distance (in meters)
   * @format double
   * @min 0
   * @max 100
   */
  PstY?: number;
  /**
   * The StabilityEvalKD unique identifier
   * @format int32
   */
  StabilityEvalTID?: number;
  /**
   * The ComprTestFractureKD unique identifier
   * @format int32
   */
  ComprTestFractureTID?: number;
  /**
   * Percentage of block that released in Rutchblock test
   * @format int32
   */
  RbRelease?: number;
  /** Comment */
  Comment?: string;
  IncludeInSnowProfile?: boolean;
}

export interface DangerObsViewModel {
  GeoHazardName?: string;
  DangerSignName?: string;
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is). The GeoHazardKD unique identifier
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Faretegn er listet i tabellen DangerSignKD. The DangerSignKD unique identifier
   * @format int32
   */
  DangerSignTID?: number;
  /**
   * Kommentarfelt for å skrive utfyllende tekst om faretegnet.
   * @maxLength 1024
   */
  Comment?: string;
}

export interface GeneralObservationViewModel {
  GeoHazardName?: string;
  Urls?: UrlViewModel[];
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is).
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Selve registreringen.
   * @maxLength 2048
   */
  ObsComment?: string;
  /**
   * Overskriften (hovedpoenget).
   * @maxLength 100
   */
  ObsHeader?: string;
  /**
   * Kommentarfelt for å skrive utfyllende tekst
   * @maxLength 1024
   */
  Comment?: string;
}

export interface IceCoverViewModel {
  IceCoverBeforeName?: string;
  IceCoverName?: string;
  IceCoverAfterName?: string;
  IceSkateabilityName?: string;
  IceCapacityName?: string;
  /**
   * Hvordan har vannet vært isdekt før den aktuelle observajonen? Feks var det isfritt? Feltet sier noe om hvordan utviklingen er. The IceCoverBeforeKD unique identifier
   * @format int32
   */
  IceCoverBeforeTID?: number;
  /**
   * Hvordan er vannet dekket av is nå. The IceCoverKD unique identifier
   * @format int32
   */
  IceCoverTID?: number;
  /** @format int32 */
  IceCoverAfterTID?: number;
  /**
   * Kommentarfelt for å skrive utfyllende tekst om observasjonen.
   * @maxLength 1024
   */
  Comment?: string;
  /**
   * Skøytebarhet. IceSkateabilityKD unique identifier
   * @format int32
   */
  IceSkateabilityTID?: number;
  /**
   * Bæreevne. IceCapacityKD unique identifier
   * @format int32
   */
  IceCapacityTID?: number;
}

export interface IceThicknessViewModel {
  IceThicknessLayers?: IceThicknessLayerViewModel[];
  /**
   * Mengden tørr snø oppå isen. Verdi i meter [m].
   * @format double
   */
  SnowDepth?: number;
  /**
   * Mengden sørpe oppå isen. Verdi i meter [m].
   * @format double
   */
  SlushSnow?: number;
  /**
   * Total istykkelse. I tabellen IceThicknessLayer kan individuelle islag registreres. Summen av dem skal samsvare med IceThickenssSum. Verdi i meter [m].
   * @format double
   */
  IceThicknessSum?: number;
  /**
   * Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden før borring. IceHeightBefore = 0 betyr at isen er tørr og negative verdier angir overvann. Verdi i meter [m].
   * @format double
   */
  IceHeightBefore?: number;
  /**
   * Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden etter borring. IPositive verdier angir at vannet står nedi hulet og og negative verdier angir overvann. Verdi i meter [m].
   * @format double
   */
  IceHeightAfter?: number;
  /**
   * Comment
   * @maxLength 1024
   */
  Comment?: string;
}

export interface IncidentViewModel {
  GeoHazardName?: string;
  ActivityInfluencedName?: string;
  DamageExtentName?: string;
  ForecastAccurateName?: string;
  /** Hadde man sikkerhetsutstyr? */
  SafetyGearName?: string;
  /** Var man lokal, norsk eller utenlandsk turist? */
  LocalTouristName?: string;
  /** Hvor ofte er man i området? */
  LocalKnowledgeName?: string;
  /** Hvem gjennomførte redningen? */
  RescueName?: string;
  /** Hvilken turfase gjelder det? */
  SlopeActivityName?: string;
  /** Provide description for IncidentURLs */
  IncidentURLs?: UrlViewModel[];
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is).
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Hva ble påvirket av hendelsen. Valgene er gitt i ActivityInfluencedKD. The ActivityInfluencedKD unique identifier
   * @format int32
   */
  ActivityInfluencedTID?: number;
  /**
   * Skadeomfang. Hva var konsekvensen av hendelsen. Valgene gitt i DamageExtentKD. The DamageExtentKD unique identifier
   * @format int32
   */
  DamageExtentTID?: number;
  /**
   * Var det et varsel utstedt og stemte det? The ForecastAccurateKD unique identifier
   * @format int32
   */
  ForecastAccurateTID?: number;
  /**
   * Var man lokal, norsk eller utenlandsk turist?
   * @format int32
   */
  LocalTouristTID?: number;
  /**
   * Hvor ofte er man i området?
   * @format int32
   */
  LocalKnowledgeTID?: number;
  /**
   * Hvor mange var involvert?
   * @format int32
   */
  InvolvedNum?: number;
  /**
   * Hvor mange var i skredet/vannet?
   * @format int32
   */
  CasualtiesNum?: number;
  /**
   * Hvor mange vart skadd?
   * @format int32
   */
  HarmedNum?: number;
  /**
   * Hvor mange døde?
   * @format int32
   */
  DeadNum?: number;
  /**
   * Hvor mange evakuerte?
   * @format int32
   */
  EvacuatedNum?: number;
  /** Er  trafikk hindret? */
  TrafficObstructed?: boolean;
  /** Er  det noen materielle skader? */
  MaterialDamages?: boolean;
  /**
   * Var det noe sikkerhetsutstyr i bruk?
   * @format int32
   */
  SafetyGearTID?: number;
  /**
   * Hvem gjennomførte redningen?
   * @format int32
   */
  RescueTID?: number;
  /**
   * Hvilken turfase?
   * @format int32
   */
  SlopeActivityTID?: number;
  /**
   * Om hendelsen strakte seg ut i tid, når sluttet den å gjelde? Feks, når åpnet veien igjen etter raset?
   * @format date-time
   */
  DtEndTime?: string;
  /**
   * Hendelsen beskrives med overskrift ..
   * @maxLength 100
   */
  IncidentHeader?: string;
  /**
   * .. med ingress eller sammendrag ..
   * @maxLength 512
   */
  IncidentIngress?: string;
  /**
   * .. og teksten eller artikkelen.
   * @maxLength 2048
   */
  IncidentText?: string;
  /** Comment. */
  Comment?: string;
}

export interface LandslideViewModel {
  LandSlideName?: string;
  LandSlideTriggerName?: string;
  LandSlideSizeName?: string;
  GeoHazardName?: string;
  ActivityInfluencedName?: string;
  ForecastAccurateName?: string;
  DamageExtentName?: string;
  Urls?: UrlViewModel[];
  /**
   * Hva slags type skred er det snakk om? Valg gitt i LandSlideKD. The LandSlideKD unique identifier
   * @format int32
   */
  LandSlideTID?: number;
  /**
   * Hva utløste skredet? The LandSlideTriggerKD unique identifier
   * @format int32
   */
  LandSlideTriggerTID?: number;
  /**
   * Hvor stort er skredet? The LandSlideSizeKD unique identifier
   * @format int32
   */
  LandSlideSizeTID?: number;
  Comment?: string;
  /**
   * Spesifiser skredtype. vått jordskred?, jordskred eller steinskred? GeoHazardTID = 20, 30 og 40 er aktuelle. The GeoHazardKD unique identifier
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Hva ble påvirket av hendelsen. Valgene er gitt i ActivityInfluencedKD. The ActivityInfluencedKD unique identifier
   * @format int32
   */
  ActivityInfluencedTID?: number;
  /**
   * Var det et varsel utstedt og stemte det? The ForecastAccurateKD unique identifier
   * @format int32
   */
  ForecastAccurateTID?: number;
  /**
   * Skadeomfang. Hva var konsekvensen av hendelsen. Valgene gitt i DamageExtentKD. The DamageExtentKD unique identifier
   * @format int32
   */
  DamageExtentTID?: number;
  /**
   * Latitude start posisjon
   * @format double
   */
  StartLat?: number;
  /**
   * Long start posisjon
   * @format double
   */
  StartLong?: number;
  /**
   * Latitude stopp posisjon
   * @format double
   */
  StopLat?: number;
  /**
   * Long stopp posisjon
   * @format double
   */
  StopLong?: number;
  /** Hull of avalanche polygon, List(lon, lat) */
  Extent?: number[][];
  /** Hull of avalanche starting zone, List(lon, lat) */
  StartExtent?: number[][];
  /** Hull of avalanche runout zone, List(lon, lat) */
  StopExtent?: number[][];
  /**
   * Når gikk skredet? Dette er ikke det samme tidspunktet da skredet ble observert.
   * @format date-time
   */
  DtLandSlideTime: string;
  /**
   * Når stoppet skredet?
   * @format date-time
   */
  DtLandSlideTimeEnd?: string;
}

export interface SnowProfileViewModel {
  /** @format double */
  TotalDepth?: number;
  StratProfile?: StratProfileViewModel;
  Comment?: string;
  IsProfileToGround?: boolean;
  /** @format int32 */
  Exposition?: number;
  /** @format int32 */
  SlopeAngle?: number;
  SnowTemp?: SnowTempModel;
  SnowDensity?: SnowDensityModel[];
}

export interface SnowSurfaceViewModel {
  /**
   * Obsolete - Only in View Model
   * @format double
   */
  SnowWindDepth24?: number;
  SurfaceWaterContentName?: string;
  SnowDriftName?: string;
  SnowSurfaceName?: string;
  /** @format int32 */
  SkiConditionsTID?: number;
  SkiConditionsName?: string;
  /**
   * Obsolete - Only in View Model
   * @format int32
   */
  SurfaceRougnessTID?: number;
  SurfaceRougnessName?: string;
  /**
   * Obsolete - Only in View Model
   * @format double
   */
  FootPenetration?: number;
  /**
   * Total snødybde i cm. Vi ønsker et gjennomsnitt for området.
   * @format double
   */
  SnowDepth?: number;
  /**
   * Nysnødybde i cm. Vi ønsker et gjennomsnitt for området
   * @format double
   */
  NewSnowDepth24?: number;
  /**
   * Nysnøgrensa. Hvor faller nedbør som snø? Meter over havet.
   * @format int32
   */
  NewSnowLine?: number;
  /**
   * Overflatefuktighet
   * @format int32
   */
  SurfaceWaterContentTID?: number;
  /**
   * Hvor mye har vinden transportert snøen? Valg fra nedtrekksmeny. The SnowDriftKD unique identifier
   * @format int32
   */
  SnowDriftTID?: number;
  /**
   * Snødekkehardhet
   * @format int32
   */
  SnowSurfaceTID?: number;
  /** Kommentarfelt for å skrive utfyllende tekst om observasjonen. */
  Comment?: string;
  /**
   * Grense lagdelt snø (moh)
   * @format double
   */
  HeightLimitLayeredSnow?: number;
  /**
   * Snøgrense (moh)
   * @format int32
   */
  SnowLine?: number;
}

export interface WeatherViewModel {
  PrecipitationName?: string;
  WindDirectionName?: string;
  /** @format int32 */
  PrecipitationTID?: number;
  /**
   * @format double
   * @min -50
   * @max 50
   */
  AirTemperature?: number;
  /**
   * @format double
   * @min 0
   * @max 50
   */
  WindSpeed?: number;
  /**
   * @format int32
   * @min 0
   * @max 359
   */
  WindDirection?: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  CloudCover?: number;
  Comment?: string;
}

export interface Waterlevel2ViewModel {
  WaterLevelStateName?: string;
  WaterAstrayName?: string;
  ObservationTimingName?: string;
  MeasurementReferenceName?: string;
  MeasurementTypeName?: string;
  WaterLevelMethodName?: string;
  MarkingReferenceName?: string;
  MarkingTypeName?: string;
  /** Flood polygon area, List(lon, lat) */
  Extent?: number[][];
  WaterLevelMeasurement?: WaterLevelMeasurementViewModel[];
  /** @format int32 */
  WaterAstrayTID?: number;
  /** @format int32 */
  ObservationTimingTID?: number;
  /** @format int32 */
  MeasurementReferenceTID?: number;
  /** @format int32 */
  MeasurementTypeTID?: number;
  /** @format int32 */
  WaterLevelMethodTID?: number;
  /** @format int32 */
  MarkingReferenceTID?: number;
  /** @format int32 */
  WaterLevelStateTID?: number;
  /** @format int32 */
  MarkingTypeTID?: number;
  MeasuringToolDescription?: string;
  /** @maxLength 1024 */
  Comment?: string;
}

export interface DamageObsViewModel {
  GeoHazardName?: string;
  DamageTypeName?: string;
  Attachments?: AttachmentViewModel[];
  /** @format int32 */
  GeoHazardTID?: number;
  /** @format int32 */
  DamageTypeTID: number;
  DamagePosition?: LatLng;
  Comment?: string;
}

export interface Summary {
  /** @format int32 */
  RegistrationTID?: number;
  RegistrationName?: string;
  AdaptiveElements?: AdaptiveElement[];
  Summaries?: RegObsGenericValue[];
}

export interface AvalancheEvaluationViewModel {
  /** @format int32 */
  RegID?: number;
  CanPublish?: boolean;
  /** @format int32 */
  AvalancheDangerTID?: number;
  AvalancheDangerName?: string;
  ValidExposition?: string;
  ValidHeightRelative?: string;
  /** @format int32 */
  ValidHeightFrom?: number;
  /** @format int32 */
  ValidHeigtTo?: number;
  /** @format int32 */
  AvalancheProblemTID1?: number;
  AvalancheProblemName1?: string;
  /** @format int32 */
  AvalancheProblemTID2?: number;
  AvalancheProblemName2?: string;
  /** @format int32 */
  AvalancheProblemTID3?: number;
  AvalancheProblemName3?: string;
  AvalancheEvaluation1?: string;
  Comment?: string;
}

export interface AvalancheActivityObsViewModel {
  /**
   * Unik id på denne tabellen da flere er mulig pr RegID.
   * @format int32
   */
  AvalancheActivityObsID?: number;
  /**
   * Hvilken side av fjellene har skredene gått? Gis i grader slik gitt på kompass. 0 er nord og 90 er øst osv.
   * @format int32
   */
  Aspect?: number;
  /**
   * Meter over havet på løsneområdet.
   * @format int32
   */
  HeigthStartZone?: number;
  /**
   * Når gikk skredene? Her bruker vi feltet som en ca. tid og brukerene oppfordres til å anta best mulig.
   * @format date-time
   */
  DtAvalancheTime?: string;
  /**
   * Hvor store er skredene?. The DestructiveSizeKD unique identifier
   * @format int32
   */
  DestructiveSizeTID?: number;
  DestructiveSizeName?: string;
  /**
   * Hvor mange skred er gått? The EstimatedNumKD unique identifier
   * @format int32
   */
  EstimatedNumTID?: number;
  EstimatedNumName?: string;
  /**
   * Typen skred som er gått. The AvalancheKD unique identifier
   * @format int32
   */
  AvalancheTID?: number;
  AvalancheName?: string;
  /**
   * Hva utløste skredet? Det er ofte beskrevet som det svake laget i snødekket. The AvalancheTriggerKD unique identifier
   * @format int32
   */
  AvalancheTriggerTID?: number;
  AvalancheTriggerName?: string;
  /**
   * Hva slags terrengtype var det i løsneområdet. The TerrainStartZoneKD unique identifier
   * @format int32
   */
  TerrainStartZoneTID?: number;
  TerrainStartZoneName?: string;
  /**
   * Hvor går snøgrensa i området?
   * @format int32
   */
  SnowLine?: number;
  SnowLineName?: string;
  /** Kommentarfelt for å skrive utfyllende tekst om observasjonen. */
  Comment?: string;
  /** @format date-time */
  DtOffAvalancheTime?: string;
}

export interface AvalancheDangerObsViewModel {
  /** @format int32 */
  AvalancheDangerObsID?: number;
  /** @format int32 */
  DangerSignTID?: number;
  DangerSignName?: string;
  Comment?: string;
}

export interface AvalancheEvalProblemViewModel {
  /** @format int32 */
  AvalancheEvalProblemID?: number;
  /** @format int32 */
  AvalProbabilityTID?: number;
  AvalProbabilityName?: string;
  /** @format int32 */
  AvalTriggerSimpleTID?: number;
  AvalTriggerSimpleName?: string;
  /** @format int32 */
  DestructiveSizeExtTID?: number;
  DestructiveSizeExtName?: string;
  /** @format int32 */
  AvalancheExtTID?: number;
  AvalancheExtName?: string;
  /** @format int32 */
  AvalCauseTID?: number;
  AvalCauseName?: string;
  /** @format int32 */
  AvalCauseExtTID?: number;
  AvalCauseExtName?: string;
  /** @format int32 */
  AvalReleaseHeightTID?: number;
  AvalReleaseHeightName?: string;
  AvalancheProbabilityAutoText?: string;
  AvalancheProblemAutoText?: string;
  Comment?: string;
}

export interface AvalancheEvaluation2ViewModel {
  AvalancheDangerName?: string;
  ValidExposition?: string;
  Comment?: string;
  AvalancheEvaluation?: string;
  AvalancheDevelopment?: string;
  /** @format int32 */
  ExposedHeight1?: number;
  /** @format int32 */
  ExposedHeight2?: number;
  /** @format int32 */
  ExposedHeightComboTID?: number;
  ExposedHeightComboName?: string;
  /** @format int32 */
  ExposedClimateTID?: number;
  ExposedClimateName?: string;
  /** @format int32 */
  AvalancheDangerTID?: number;
  AvalancheEvalProblems?: AvalancheEvalProblemViewModel[];
}

export interface SnowCoverObsViewModel {
  /**
   * DepthHoarThickness
   * @format double
   */
  DepthHoarThickness?: number;
  /** CriticalLayerExists */
  CriticalLayerExists?: boolean;
  /**
   * CriticalLayerLocation
   * @format double
   */
  CriticalLayerLocation?: number;
  /**
   * The CriticalLayerKD unique identifier
   * @format int32
   */
  CriticalLayerTID?: number;
  /** SnowPilotRef */
  SnowPilotRef?: string;
  /** Comment. */
  Comment?: string;
  CriticalLayerName?: string;
}

export interface WaterLevelViewModel {
  WaterLevelDescribed?: string;
  /** @format double */
  WaterLevelValue?: number;
  /** @format int32 */
  WaterLevelRefTID?: number;
  WaterLevelRefName?: string;
  Comment?: string;
  /** @format double */
  MeasuredDischarge?: number;
  IsRiver?: boolean;
}

export interface UrlViewModel {
  /**
   * UrlDescription
   * @maxLength 1024
   */
  UrlDescription?: string;
  /**
   * UrlLine
   * @maxLength 1024
   */
  UrlLine?: string;
}

export interface IceThicknessLayerViewModel {
  IceLayerName?: string;
  /**
   * The IceLayerKD unique identifier
   * @format int32
   */
  IceLayerTID?: number;
  /**
   * IceLayerThickness
   * @format double
   */
  IceLayerThickness?: number;
  /**
   * Comment
   * @maxLength 1024
   */
  Comment?: string;
}

export interface StratProfileViewModel {
  /** @format double */
  TotalDepth?: number;
  Layers?: StratProfileLayerViewModel[];
}

export interface SnowTempModel {
  Layers?: SnowTempObsModel[];
}

export interface SnowDensityModel {
  /** @format double */
  CylinderDiameter?: number;
  /** @format double */
  TareWeight?: number;
  Comment?: string;
  Layers?: SnowDensityLayerModel[];
}

export interface WaterLevelMeasurementViewModel {
  /** @format int32 */
  WaterLevelMeasurementId?: number;
  Attachments?: AttachmentViewModel[];
  /**
   * @format double
   * @min 0
   * @max 999
   */
  WaterLevelValue?: number;
  /** @format date-time */
  DtMeasurementTime: string;
  Comment?: string;
}

export interface LatLng {
  /** @format double */
  Latitude?: number;
  /** @format double */
  Longitude?: number;
}

export interface AdaptiveElement {
  type?: string;
  id?: string;
  /** @default null */
  spacing?: 'default' | 'none' | 'small' | 'medium' | 'large' | 'extraLarge' | 'padding';
  /** @default false */
  separator?: boolean;
  speak?: string;
  height?: AdaptiveHeight;
  /** @default true */
  isVisible?: boolean;
  fallback?: AdaptiveFallbackElement;
  requires?: Record<string, string>;
}

export interface RegObsGenericValue {
  /** @format int32 */
  Kind?: 0 | 1 | 2;
  KindType?: string;
  Header?: string;
  Value?: object;
}

export interface StratProfileLayerViewModel {
  GrainFormPrimaryTName?: string;
  GrainFormSecondaryTName?: string;
  HardnessTName?: string;
  HardnessBottomTName?: string;
  WetnessTName?: string;
  CriticalLayerTName?: string;
  /** @format double */
  DepthTop?: number;
  /** @format double */
  Thickness?: number;
  /** @format int32 */
  GrainFormPrimaryTID?: number;
  /** @format int32 */
  GrainFormSecondaryTID?: number;
  /** @format double */
  GrainSizeAvg?: number;
  /** @format double */
  GrainSizeAvgMax?: number;
  /** @format int32 */
  HardnessTID?: number;
  /** @format int32 */
  HardnessBottomTID?: number;
  /** @format int32 */
  WetnessTID?: number;
  /** @format int32 */
  CriticalLayerTID?: number;
  Comment?: string;
  /** @format int32 */
  SortOrder?: number;
}

export interface SnowTempObsModel {
  /**
   * @format double
   * @min 0
   * @max 100
   */
  Depth?: number;
  /**
   * @format double
   * @min -70
   * @max 0
   */
  SnowTemp?: number;
}

export interface SnowDensityLayerModel {
  /** @format double */
  Depth?: number;
  /**
   * thickness in m
   * @format double
   */
  Thickness?: number;
  /**
   * Density in kg/m^3
   * @format double
   */
  Density?: number;
  Comment?: string;
  /**
   * Weight in KG
   * @format double
   */
  Weight?: number;
  /** @format double */
  WaterEquivalent?: number;
  /** @format int32 */
  SortOrder?: number;
}

export interface AdaptiveHeight {
  heightType?: 'auto' | 'stretch' | 'pixel';
  /** @format int32 */
  unit?: number;
}

export type AdaptiveFallbackElement = object;

export interface RegistrationEditModel {
  /** The observation location object. Latitude and longitute are needed to create a new registration. */
  ObsLocation?: ObsLocationEditModel;
  Attachments?: AttachmentEditModel[];
  AvalancheActivityObs2?: AvalancheActivityObs2EditModel[];
  AvalancheEvalProblem2?: AvalancheEvalProblem2EditModel[];
  AvalancheEvaluation3?: AvalancheEvaluation3EditModel;
  AvalancheObs?: AvalancheObsEditModel;
  CompressionTest?: CompressionTestEditModel[];
  DangerObs?: DangerObsEditModel[];
  GeneralObservation?: GeneralObservationEditModel;
  IceCoverObs?: IceCoverEditModel;
  IceThickness?: IceThicknessEditModel;
  Incident?: IncidentEditModel;
  LandSlideObs?: LandslideEditModel;
  SnowProfile2?: SnowProfileEditModel;
  SnowSurfaceObservation?: SnowSurfaceEditModel;
  WeatherObservation?: WeatherEditModel;
  WaterLevel2?: Waterlevel2EditModel;
  DamageObs?: DamageObsEditModel[];
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is). The GeoHazardKD unique identifier
   * @format int32
   */
  GeoHazardTID: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 100 | 110 | 200 | 999;
  /**
   * Kildereferanse på en registrering. F.eks. har brukeren sette dette selv eller er det referert til fra nyheter. The SourceKD unique identifier
   * @format int32
   */
  SourceTID?: number;
  /**
   * Tiden da observasjonen ble gjort.
   * @format date-time
   */
  DtObsTime: string;
  /** @format date-time */
  DtChangeTime?: string;
  /** @format int32 */
  ObserverGroupID?: number;
  ObserverGroupName?: string;
  /** If set to true, the user's account will not be shown publicly. NVE will still be able to see who sent in the observation. */
  Anonymous?: boolean;
}

export interface ObsLocationEditModel {
  /**
   * ObsLocationID
   * @format int32
   */
  ObsLocationID?: number;
  /**
   * Navn på stedet
   * @maxLength 60
   */
  LocationName?: string;
  /**
   * Beskriver stedet.
   * @maxLength 1024
   */
  LocationDescription?: string;
  /**
   * Latitude
   * @format double
   */
  Latitude: number;
  /**
   * Longitude
   * @format double
   */
  Longitude: number;
  /**
   * Kildehenvisning på hvordan koordinaten er satt. (GPS i tlf, klikk i kart, osv). Verdier gitt i UTMSourceKD
   * @format int32
   */
  UTMSourceTID?: number;
  /**
   * Usikkerhet i posisjon i meter. Anslås på web og i app hentes det fra gps.
   * @format int32
   */
  Uncertainty?: number;
}

export interface AttachmentEditModel {
  /** @format int32 */
  AttachmentId?: number;
  /** Last opp attachment på forhånd og sett AttachmentUploadId */
  AttachmentUploadId?: string;
  /**
   * Navn på fotograf.
   * @maxLength 60
   */
  Photographer?: string;
  /**
   * Rettigheter til bilde.
   * @maxLength 60
   */
  Copyright?: string;
  /**
   * Hvilken himmelretning peker bilde. Gis i grader slik gitt på kompass. 0 er nord og 90 er øst osv.
   * @format int32
   */
  Aspect?: number;
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is). The GeoHazardKD unique identifier
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Hva er bildet av. Dette feltet relaterer bildet til en observasjonstype. Feks værobservasjon, faretegn, osv. The RegistrationKD unique identifier
   * @format int32
   */
  RegistrationTID?: number;
  /**
   * Kommentarfelt for bildet. F.eks for å beskrive det.
   * @maxLength 2048
   */
  Comment?: string;
  AttachmentMimeType?: string;
  /** Om bildet skal vises først i registreringen, eller ikke */
  IsMainAttachment?: boolean;
}

export interface AvalancheActivityObs2EditModel {
  /** @format int32 */
  EstimatedNumTID?: number;
  /** @format date-time */
  DtStart?: string;
  /** @format date-time */
  DtEnd?: string;
  ValidExposition?: string;
  /** @format int32 */
  ExposedHeight1?: number;
  /** @format int32 */
  ExposedHeight2?: number;
  /** @format int32 */
  ExposedHeightComboTID?: number;
  /** @format int32 */
  AvalancheExtTID?: number;
  /** @format int32 */
  AvalCauseTID?: number;
  /** @format int32 */
  AvalTriggerSimpleTID?: number;
  /** @format int32 */
  DestructiveSizeTID?: number;
  /** @format int32 */
  AvalPropagationTID?: number;
  Comment?: string;
}

export interface AvalancheEvalProblem2EditModel {
  /**
   * Sannsynlighet for skred. The AvalProbabilityKD unique identifier
   * @format int32
   */
  AvalProbabilityTID?: number;
  /** @format int32 */
  AvalPropagationTID?: number;
  /**
   * The AvalTriggerSimpleKD unique identifier
   * @format int32
   */
  AvalTriggerSimpleTID?: number;
  /**
   * Hvor dypt ligger det overnevnte svake laget? The AvalCauseDepthKD unique identifier
   * @format int32
   */
  AvalCauseDepthTID?: number;
  /**
   * Velg utsatte retninger
   * @maxLength 8
   */
  ValidExposition?: string;
  /**
   * Øverste høyde på “utsatt høyde” symbolet.
   * @format int32
   */
  ExposedHeight1?: number;
  /**
   * Nederste høyde på “utsatt høyde” symbolet.
   * @format int32
   */
  ExposedHeight2?: number;
  /**
   * Hvilket symbol brukes? Er utsatt tereng over ExposedHeight2 eller under den? The ExposedHeightComboKD unique identifier
   * @format int32
   */
  ExposedHeightComboTID?: number;
  /**
   * Skredtype. I appen er dette 1. felt under skredproblem. The AvalancheExtKD unique identifier
   * @format int32
   */
  AvalancheExtTID?: number;
  /** Kommentar til skredproblemet */
  Comment?: string;
  /**
   * Hvilket svakt lag løsner skredet på? The AvalCauseKD unique identifier
   * @format int32
   */
  AvalCauseTID?: number;
  /** @format int32 */
  AvalCauseAttributeLightTID?: number;
  /** @format int32 */
  AvalCauseAttributeThinTID?: number;
  /** @format int32 */
  AvalCauseAttributeSoftTID?: number;
  /** @format int32 */
  AvalCauseAttributeCrystalTID?: number;
  /**
   * Sannsynlig tilleggsbelastning for å utløse skred. The DestructiveSizeKD unique identifier
   * @format int32
   */
  DestructiveSizeTID?: number;
}

export interface AvalancheEvaluation3EditModel {
  /**
   * Faregrad. The AvalancheDangerKD unique identifier
   * @format int32
   */
  AvalancheDangerTID?: number;
  /**
   * Her blir Skredfarevurdering skrevet inn. I appen blir “Utstrekning” lagt til som tekst i denne kolonnen
   * @maxLength 1024
   */
  AvalancheEvaluation?: string;
  /**
   * Her blir forventet utvikling skrevet inn.
   * @maxLength 1024
   */
  AvalancheDevelopment?: string;
  /**
   * Felt hvor observatøren kan fortelle de syns varslet stemmer. Valg fra liste gitt i ForecastCorrectKD. The ForecastCorrectKD unique identifier
   * @format int32
   */
  ForecastCorrectTID?: number;
  /**
   * Kommetarfelt for utdypende kommentar om varslet stemmer eller ikke.
   * @maxLength 1024
   */
  ForecastComment?: string;
}

export interface AvalancheObsEditModel {
  /**
   * Tid da skredet gikk.
   * @format date-time
   */
  DtAvalancheTime: string;
  /**
   * Tidligste tidspunkt da skredet gikk.
   * @format date-time
   */
  DtEarliestAvalancheTime?: string;
  /**
   * Eksposisjon
   * @format int32
   */
  Aspect?: number;
  /**
   * Høyde i løsneområde
   * @format int32
   */
  HeightStartZone?: number;
  /**
   * Høyde i stoppområdet
   * @format int32
   */
  HeightStopZone?: number;
  /**
   * Størrelse. The DestructiveSizeKD unique identifier
   * @format int32
   */
  DestructiveSizeTID?: number;
  /**
   * Skredutløser. The AvalancheTriggerKD unique identifier
   * @format int32
   */
  AvalancheTriggerTID?: number;
  /**
   * Skredtype. The AvalancheKD unique identifier
   * @format int32
   */
  AvalancheTID?: number;
  /**
   * Terrengtype i løsneområdet. The TerrainStartZoneKD unique identifier
   * @format int32
   */
  TerrainStartZoneTID?: number;
  /**
   * SnowLine
   * @format int32
   */
  SnowLine?: number;
  /** ValidExposition */
  ValidExposition?: string;
  /**
   * Skredutløser. The AvalCauseTID unique identifier
   * @format int32
   */
  AvalCauseTID?: number;
  /**
   * Bruddhøyde
   * @format int32
   */
  FractureHeight?: number;
  /**
   * Bruddbredde
   * @format int32
   */
  FractureWidth?: number;
  /** Skredbanenavn */
  Trajectory?: string;
  /**
   * StartLat
   * @format double
   */
  StartLat?: number;
  /**
   * StartLong
   * @format double
   */
  StartLong?: number;
  /**
   * StopLat
   * @format double
   */
  StopLat?: number;
  /**
   * StopLong
   * @format double
   */
  StopLong?: number;
  /** Ble skredet fjernutløst? */
  RemotelyTriggered?: boolean;
  /** Hull of avalanche polygon, List(lon, lat) */
  Extent?: number[][];
  /** Hull of avalanche starting zone, List(lon, lat) */
  StartExtent?: number[][];
  /** Hull of avalanche runout zone, List (lon, lat) */
  StopExtent?: number[][];
  /** Comment */
  Comment?: string;
}

export interface CompressionTestEditModel {
  /**
   * The CompressionTestKDV unique identifier
   * @format int32
   */
  CompressionTestTID?: number;
  /**
   * TapsFracture
   * @format int32
   */
  TapsFracture?: number;
  /**
   * TapsFullPropagation
   * @format int32
   */
  TapsFullPropagation?: number;
  /**
   * The PropagationKD unique identifier
   * @format int32
   */
  PropagationTID?: number;
  /**
   * FractureDepth
   * @format double
   * @min 0
   * @max 100
   */
  FractureDepth?: number;
  /**
   * PST X distance (in meters)
   * @format double
   * @min 0
   * @max 100
   */
  PstX?: number;
  /**
   * PST Y distance (in meters)
   * @format double
   * @min 0
   * @max 100
   */
  PstY?: number;
  /**
   * The StabilityEvalKD unique identifier
   * @format int32
   */
  StabilityEvalTID?: number;
  /**
   * The ComprTestFractureKD unique identifier
   * @format int32
   */
  ComprTestFractureTID?: number;
  /**
   * Percentage of block that released in Rutchblock test
   * @format int32
   */
  RbRelease?: number;
  /** Comment */
  Comment?: string;
  IncludeInSnowProfile?: boolean;
}

export interface DangerObsEditModel {
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is). The GeoHazardKD unique identifier
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Faretegn er listet i tabellen DangerSignKD. The DangerSignKD unique identifier
   * @format int32
   */
  DangerSignTID?: number;
  /**
   * Kommentarfelt for å skrive utfyllende tekst om faretegnet.
   * @maxLength 1024
   */
  Comment?: string;
}

export interface GeneralObservationEditModel {
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is).
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Selve registreringen.
   * @maxLength 2048
   */
  ObsComment?: string;
  /**
   * Overskriften (hovedpoenget).
   * @maxLength 100
   */
  ObsHeader?: string;
  /**
   * Kommentarfelt for å skrive utfyllende tekst
   * @maxLength 1024
   */
  Comment?: string;
  Urls?: UrlEditModel[];
}

export interface IceCoverEditModel {
  /**
   * Hvordan har vannet vært isdekt før den aktuelle observajonen? Feks var det isfritt? Feltet sier noe om hvordan utviklingen er. The IceCoverBeforeKD unique identifier
   * @format int32
   */
  IceCoverBeforeTID?: number;
  /**
   * Hvordan er vannet dekket av is nå. The IceCoverKD unique identifier
   * @format int32
   */
  IceCoverTID?: number;
  /** @format int32 */
  IceCoverAfterTID?: number;
  /**
   * Kommentarfelt for å skrive utfyllende tekst om observasjonen.
   * @maxLength 1024
   */
  Comment?: string;
  /**
   * Skøytebarhet. IceSkateabilityKD unique identifier
   * @format int32
   */
  IceSkateabilityTID?: number;
  /**
   * Bæreevne. IceCapacityKD unique identifier
   * @format int32
   */
  IceCapacityTID?: number;
}

export interface IceThicknessEditModel {
  /**
   * Mengden tørr snø oppå isen. Verdi i meter [m].
   * @format double
   */
  SnowDepth?: number;
  /**
   * Mengden sørpe oppå isen. Verdi i meter [m].
   * @format double
   */
  SlushSnow?: number;
  /**
   * Total istykkelse. I tabellen IceThicknessLayer kan individuelle islag registreres. Summen av dem skal samsvare med IceThickenssSum. Verdi i meter [m].
   * @format double
   */
  IceThicknessSum?: number;
  /**
   * Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden før borring. IceHeightBefore = 0 betyr at isen er tørr og negative verdier angir overvann. Verdi i meter [m].
   * @format double
   */
  IceHeightBefore?: number;
  /**
   * Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden etter borring. IPositive verdier angir at vannet står nedi hulet og og negative verdier angir overvann. Verdi i meter [m].
   * @format double
   */
  IceHeightAfter?: number;
  /**
   * Comment
   * @maxLength 1024
   */
  Comment?: string;
  IceThicknessLayers?: IceThicknessLayerEditModel[];
}

export interface IncidentEditModel {
  /**
   * Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is).
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Hva ble påvirket av hendelsen. Valgene er gitt i ActivityInfluencedKD. The ActivityInfluencedKD unique identifier
   * @format int32
   */
  ActivityInfluencedTID?: number;
  /**
   * Skadeomfang. Hva var konsekvensen av hendelsen. Valgene gitt i DamageExtentKD. The DamageExtentKD unique identifier
   * @format int32
   */
  DamageExtentTID?: number;
  /**
   * Var det et varsel utstedt og stemte det? The ForecastAccurateKD unique identifier
   * @format int32
   */
  ForecastAccurateTID?: number;
  /**
   * Var man lokal, norsk eller utenlandsk turist?
   * @format int32
   */
  LocalTouristTID?: number;
  /**
   * Hvor ofte er man i området?
   * @format int32
   */
  LocalKnowledgeTID?: number;
  /**
   * Hvor mange var involvert?
   * @format int32
   */
  InvolvedNum?: number;
  /**
   * Hvor mange var i skredet/vannet?
   * @format int32
   */
  CasualtiesNum?: number;
  /**
   * Hvor mange vart skadd?
   * @format int32
   */
  HarmedNum?: number;
  /**
   * Hvor mange døde?
   * @format int32
   */
  DeadNum?: number;
  /**
   * Hvor mange evakuerte?
   * @format int32
   */
  EvacuatedNum?: number;
  /** Er  trafikk hindret? */
  TrafficObstructed?: boolean;
  /** Er  det noen materielle skader? */
  MaterialDamages?: boolean;
  /**
   * Var det noe sikkerhetsutstyr i bruk?
   * @format int32
   */
  SafetyGearTID?: number;
  /**
   * Hvem gjennomførte redningen?
   * @format int32
   */
  RescueTID?: number;
  /**
   * Hvilken turfase?
   * @format int32
   */
  SlopeActivityTID?: number;
  /**
   * Om hendelsen strakte seg ut i tid, når sluttet den å gjelde? Feks, når åpnet veien igjen etter raset?
   * @format date-time
   */
  DtEndTime?: string;
  /**
   * Hendelsen beskrives med overskrift ..
   * @maxLength 100
   */
  IncidentHeader?: string;
  /**
   * .. med ingress eller sammendrag ..
   * @maxLength 512
   */
  IncidentIngress?: string;
  /**
   * .. og teksten eller artikkelen.
   * @maxLength 2048
   */
  IncidentText?: string;
  /** Comment. */
  Comment?: string;
  /** Provide description for IncidentURLs */
  IncidentURLs?: UrlEditModel[];
}

export interface LandslideEditModel {
  /**
   * Hva slags type skred er det snakk om? Valg gitt i LandSlideKD. The LandSlideKD unique identifier
   * @format int32
   */
  LandSlideTID?: number;
  /**
   * Hva utløste skredet? The LandSlideTriggerKD unique identifier
   * @format int32
   */
  LandSlideTriggerTID?: number;
  /**
   * Hvor stort er skredet? The LandSlideSizeKD unique identifier
   * @format int32
   */
  LandSlideSizeTID?: number;
  Comment?: string;
  /**
   * Spesifiser skredtype. vått jordskred?, jordskred eller steinskred? GeoHazardTID = 20, 30 og 40 er aktuelle. The GeoHazardKD unique identifier
   * @format int32
   */
  GeoHazardTID?: number;
  /**
   * Hva ble påvirket av hendelsen. Valgene er gitt i ActivityInfluencedKD. The ActivityInfluencedKD unique identifier
   * @format int32
   */
  ActivityInfluencedTID?: number;
  /**
   * Var det et varsel utstedt og stemte det? The ForecastAccurateKD unique identifier
   * @format int32
   */
  ForecastAccurateTID?: number;
  /**
   * Skadeomfang. Hva var konsekvensen av hendelsen. Valgene gitt i DamageExtentKD. The DamageExtentKD unique identifier
   * @format int32
   */
  DamageExtentTID?: number;
  /**
   * Latitude start posisjon
   * @format double
   */
  StartLat?: number;
  /**
   * Long start posisjon
   * @format double
   */
  StartLong?: number;
  /**
   * Latitude stopp posisjon
   * @format double
   */
  StopLat?: number;
  /**
   * Long stopp posisjon
   * @format double
   */
  StopLong?: number;
  /** Hull of avalanche polygon, List(lon, lat) */
  Extent?: number[][];
  /** Hull of avalanche starting zone, List(lon, lat) */
  StartExtent?: number[][];
  /** Hull of avalanche runout zone, List(lon, lat) */
  StopExtent?: number[][];
  /**
   * Når gikk skredet? Dette er ikke det samme tidspunktet da skredet ble observert.
   * @format date-time
   */
  DtLandSlideTime: string;
  /**
   * Når stoppet skredet?
   * @format date-time
   */
  DtLandSlideTimeEnd?: string;
  Urls?: UrlEditModel[];
}

export interface SnowProfileEditModel {
  StratProfile?: StratProfileEditModel;
  Comment?: string;
  IsProfileToGround?: boolean;
  /** @format int32 */
  Exposition?: number;
  /** @format int32 */
  SlopeAngle?: number;
  SnowTemp?: SnowTempModel;
  SnowDensity?: SnowDensityModel[];
}

export interface SnowSurfaceEditModel {
  /**
   * Total snødybde i cm. Vi ønsker et gjennomsnitt for området.
   * @format double
   */
  SnowDepth?: number;
  /**
   * Nysnødybde i cm. Vi ønsker et gjennomsnitt for området
   * @format double
   */
  NewSnowDepth24?: number;
  /**
   * Nysnøgrensa. Hvor faller nedbør som snø? Meter over havet.
   * @format int32
   */
  NewSnowLine?: number;
  /**
   * Overflatefuktighet
   * @format int32
   */
  SurfaceWaterContentTID?: number;
  /**
   * Hvor mye har vinden transportert snøen? Valg fra nedtrekksmeny. The SnowDriftKD unique identifier
   * @format int32
   */
  SnowDriftTID?: number;
  /**
   * Snødekkehardhet
   * @format int32
   */
  SnowSurfaceTID?: number;
  /**
   * Skiføre
   * @format int32
   */
  SkiConditionsTID?: number;
  /** Kommentarfelt for å skrive utfyllende tekst om observasjonen. */
  Comment?: string;
  /**
   * Grense lagdelt snø (moh)
   * @format double
   */
  HeightLimitLayeredSnow?: number;
  /**
   * Snøgrense (moh)
   * @format int32
   */
  SnowLine?: number;
}

export interface WeatherEditModel {
  /** @format int32 */
  PrecipitationTID?: number;
  /**
   * @format double
   * @min -50
   * @max 50
   */
  AirTemperature?: number;
  /**
   * @format double
   * @min 0
   * @max 50
   */
  WindSpeed?: number;
  /**
   * @format int32
   * @min 0
   * @max 359
   */
  WindDirection?: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  CloudCover?: number;
  Comment?: string;
}

export interface Waterlevel2EditModel {
  /** @format int32 */
  WaterAstrayTID?: number;
  /** @format int32 */
  ObservationTimingTID?: number;
  /** @format int32 */
  MeasurementReferenceTID?: number;
  /** @format int32 */
  MeasurementTypeTID?: number;
  /** @format int32 */
  WaterLevelMethodTID?: number;
  /** @format int32 */
  MarkingReferenceTID?: number;
  /** @format int32 */
  WaterLevelStateTID?: number;
  /** @format int32 */
  MarkingTypeTID?: number;
  MeasuringToolDescription?: string;
  WaterLevelMeasurement?: WaterLevelMeasurementEditModel[];
  /** Flood polygon area, List(lon, lat) */
  Extent?: number[][];
  /** @maxLength 1024 */
  Comment?: string;
}

export interface DamageObsEditModel {
  /** @format int32 */
  GeoHazardTID?: number;
  /** @format int32 */
  DamageTypeTID: number;
  DamagePosition?: LatLng;
  Comment?: string;
  Attachments?: AttachmentEditModel[];
}

export interface UrlEditModel {
  /**
   * UrlDescription
   * @maxLength 1024
   */
  UrlDescription?: string;
  /**
   * UrlLine
   * @maxLength 1024
   */
  UrlLine?: string;
}

export interface IceThicknessLayerEditModel {
  /**
   * The IceLayerKD unique identifier
   * @format int32
   */
  IceLayerTID?: number;
  /**
   * IceLayerThickness
   * @format double
   */
  IceLayerThickness?: number;
  /**
   * Comment
   * @maxLength 1024
   */
  Comment?: string;
}

export interface StratProfileEditModel {
  Layers?: StratProfileLayerEditModel[];
}

export interface WaterLevelMeasurementEditModel {
  /** @format int32 */
  WaterLevelMeasurementId?: number;
  /**
   * @format double
   * @min 0
   * @max 999
   */
  WaterLevelValue?: number;
  /** @format date-time */
  DtMeasurementTime: string;
  Comment?: string;
  Attachments?: AttachmentEditModel[];
}

export interface StratProfileLayerEditModel {
  /** @format double */
  DepthTop?: number;
  /** @format double */
  Thickness?: number;
  /** @format int32 */
  GrainFormPrimaryTID?: number;
  /** @format int32 */
  GrainFormSecondaryTID?: number;
  /** @format double */
  GrainSizeAvg?: number;
  /** @format double */
  GrainSizeAvgMax?: number;
  /** @format int32 */
  HardnessTID?: number;
  /** @format int32 */
  HardnessBottomTID?: number;
  /** @format int32 */
  WetnessTID?: number;
  /** @format int32 */
  CriticalLayerTID?: number;
  Comment?: string;
  /** @format int32 */
  SortOrder?: number;
}

/** Use this to filter out registrations. */
export interface SearchCriteriaRequestDto {
  /**
   * Find registrations made by the observer with given ID
   * @format int32
   */
  ObserverId?: number;
  /**
   * Find registrations made by the observer with given GUID.
   * This attribute is  deprecated and will be removed in the future.
   */
  ObserverGuid?: string;
  /**
   * Find registrations made by the observers in a specific group
   * @format int32
   */
  GroupId?: number;
  /**
   * Find registrations made by observers with specific competence level IDs
   * Use /Search/SearchCriteria to find out which competence levels are used for different geo hazards.
   */
  ObserverCompetence?: number[];
  /** Find registrations made by the observer with given nick name */
  ObserverNickName?: string;
  /**
   * Find a registration with a specific unique ID. You may also use GET /Registration/{regId}/{langKey}
   * @format int32
   */
  RegId?: number;
  /**
   * Language of result
   * Norwegian = 1, English = 2, German = 3, Slovenian = 4, Swedish = 5, Italian = 6, Norwegian (nn) = 7.
   * Default = 1
   * @format int32
   */
  LangKey?: number;
  /** @format int32 */
  LocationId?: number;
  /**
   * Find registrations with obervation time after given date and time (inclusive)
   * @format date-time
   */
  FromDtObsTime?: string;
  /**
   * Find registrations with obervation time before given date and time (inclusive)
   * @format date-time
   */
  ToDtObsTime?: string;
  /**
   * Find registrations saved or changed after given date and time (inclusive)
   * @format date-time
   */
  FromDtChangeTime?: string;
  /**
   * Find registrations saved or changed before given date and time (inclusive)
   * @format date-time
   */
  ToDtChangeTime?: string;
  /**
   * Max number of registrations to return. Default = 100
   * @format int32
   */
  NumberOfRecords?: number;
  /**
   * Start index. If more registrations matches your filter than you get in one chunk, set Offset to the count of how many records you already fetched, to retrieve the next chunk
   * @format int32
   */
  Offset?: number;
  TimeZone?: string;
  /**
   * Find registrations of given types.
   * Use /Search/SearchCriteria to find out which types are used for different geo hazards.
   */
  SelectedRegistrationTypes?: RegistrationTypeCriteriaDto[];
  /**
   * Find registrations in given regions.
   * Use /Search/SearchCriteria to find the forecast region IDs that are used for different geo hazards.
   */
  SelectedRegions?: number[];
  /**
   * Find registrations on given geo hazard ID's.
   * Snow = 10, dirt = 20, water = 60, ice = 70.
   */
  SelectedGeoHazards?: number[];
  Countries?: number[];
  /**
   * Find registrations in given county.
   * Only relevant for Norway.
   * ØSTFOLD = 01, AKERSHUS = 02, OSLO = 03, HEDMARK = 04, OPPLAND = 05, BUSKERUD = 06, VESTFOLD = 07, TELEMARK = 08, AUST-AGDER = 09, VEST-AGDER = 10, ROGALAND = 11, HORDALAND = 12, SOGN OG FJORDANE = 14, MØRE OG ROMSDAL = 15, SØR-TRØNDELAG = 16, NORD-TRØNDELAG = 17, NORDLAND = 18, TROMS = 19, FINNMARK = 20, SVALBARD = 21, VIKEN = 30, INNLANDET = 34, VESTFOLD OG TELEMARK = 38, AGDER = 42, VESTLAND = 46, Trøndelag = 50, TROMS OG FINNMARK = 54
   */
  Counties?: string[];
  TextSearch?: string;
  Radius?: WithinRadiusCriteriaDto;
  Extent?: WithinExtentCriteriaDto;
  /**
   * Find registrations with given property value.
   * [Obsolete("Experimental feature that may be changed or removed in later versions")]
   */
  PropertyFilters?: PropertyFilter[];
  /** Field to order by. You may use these fields: DtObsTime, DtRegTime, DtChangeTime. Default is DtObsTime. A few other fields may also work */
  OrderBy?: string;
  /** Descending order is default. Set this to true to use ascending order. */
  AscendingOrder?: boolean;
}

export interface RegistrationTypeCriteriaDto {
  /**
   * TODO: See
   * @format int32
   */
  Id?: number;
  SubTypes?: number[];
}

export interface WithinRadiusCriteriaDto {
  Position?: PositionDto;
  /** @format int32 */
  Radius?: number;
}

export interface WithinExtentCriteriaDto {
  TopLeft?: PositionDto;
  BottomRight?: PositionDto;
}

/** Filter by property value */
export interface PropertyFilter {
  /**
   * Property name. Properties in sub schemas must be prefixed with schema name.
   * Example: AvalancheObs.AvalancheTID
   * Multiple instance schemas, like DangerSign, are not supported.
   * If you use unknown/unsupported properties, you will get an HTTP 400.
   */
  Name?: string;
  /** @format int32 */
  Operator?: 0;
  /** Target property value */
  Value?: string;
}

export interface PositionDto {
  /** @format double */
  Latitude?: number;
  /** @format double */
  Longitude?: number;
}

/** Use this to filter out registrations. */
export interface SearchCriteriaExclUserRequestDto {
  /**
   * Find a registration with a specific unique ID. You may also use GET /Registration/{regId}/{langKey}
   * @format int32
   */
  RegId?: number;
  /**
   * Language of result
   * Norwegian = 1, English = 2, German = 3, Slovenian = 4, Swedish = 5, Italian = 6, Norwegian (nn) = 7.
   * Default = 1
   * @format int32
   */
  LangKey?: number;
  /** @format int32 */
  LocationId?: number;
  /**
   * Find registrations with obervation time after given date and time (inclusive)
   * @format date-time
   */
  FromDtObsTime?: string;
  /**
   * Find registrations with obervation time before given date and time (inclusive)
   * @format date-time
   */
  ToDtObsTime?: string;
  /**
   * Find registrations saved or changed after given date and time (inclusive)
   * @format date-time
   */
  FromDtChangeTime?: string;
  /**
   * Find registrations saved or changed before given date and time (inclusive)
   * @format date-time
   */
  ToDtChangeTime?: string;
  /**
   * Max number of registrations to return. Default = 100
   * @format int32
   */
  NumberOfRecords?: number;
  /**
   * Start index. If more registrations matches your filter than you get in one chunk, set Offset to the count of how many records you already fetched, to retrieve the next chunk
   * @format int32
   */
  Offset?: number;
  TimeZone?: string;
  /**
   * Find registrations of given types.
   * Use /Search/SearchCriteria to find out which types are used for different geo hazards.
   */
  SelectedRegistrationTypes?: RegistrationTypeCriteriaDto[];
  /**
   * Find registrations in given regions.
   * Use /Search/SearchCriteria to find the forecast region IDs that are used for different geo hazards.
   */
  SelectedRegions?: number[];
  /**
   * Find registrations on given geo hazard ID's.
   * Snow = 10, dirt = 20, water = 60, ice = 70.
   */
  SelectedGeoHazards?: number[];
  Countries?: number[];
  /**
   * Find registrations in given county.
   * Only relevant for Norway.
   * ØSTFOLD = 01, AKERSHUS = 02, OSLO = 03, HEDMARK = 04, OPPLAND = 05, BUSKERUD = 06, VESTFOLD = 07, TELEMARK = 08, AUST-AGDER = 09, VEST-AGDER = 10, ROGALAND = 11, HORDALAND = 12, SOGN OG FJORDANE = 14, MØRE OG ROMSDAL = 15, SØR-TRØNDELAG = 16, NORD-TRØNDELAG = 17, NORDLAND = 18, TROMS = 19, FINNMARK = 20, SVALBARD = 21, VIKEN = 30, INNLANDET = 34, VESTFOLD OG TELEMARK = 38, AGDER = 42, VESTLAND = 46, Trøndelag = 50, TROMS OG FINNMARK = 54
   */
  Counties?: string[];
  TextSearch?: string;
  Radius?: WithinRadiusCriteriaDto;
  Extent?: WithinExtentCriteriaDto;
  /**
   * Find registrations with given property value.
   * [Obsolete("Experimental feature that may be changed or removed in later versions")]
   */
  PropertyFilters?: PropertyFilter[];
  /** Field to order by. You may use these fields: DtObsTime, DtRegTime, DtChangeTime. Default is DtObsTime. A few other fields may also work */
  OrderBy?: string;
  /** Descending order is default. Set this to true to use ascending order. */
  AscendingOrder?: boolean;
}

export interface SearchCountResponseDto {
  /** @format int32 */
  TotalMatches?: number;
}

export interface SearchSideBarDto {
  RegistrationTypes?: {
    NotSpecified?: RegistrationTypeDto[];
    Avalanche?: RegistrationTypeDto[];
    EarthFlow?: RegistrationTypeDto[];
    LandSlide?: RegistrationTypeDto[];
    RockFall?: RegistrationTypeDto[];
    IceFall?: RegistrationTypeDto[];
    Flooding?: RegistrationTypeDto[];
    Ice?: RegistrationTypeDto[];
    EventOnGlacier?: RegistrationTypeDto[];
    Jøkulhaup?: RegistrationTypeDto[];
    Drought?: RegistrationTypeDto[];
    Unknown?: RegistrationTypeDto[];
  };
  ObserverCompetenceLevels?: {
    NotSpecified?: ObserverCompetenceLevelDto[];
    Avalanche?: ObserverCompetenceLevelDto[];
    EarthFlow?: ObserverCompetenceLevelDto[];
    LandSlide?: ObserverCompetenceLevelDto[];
    RockFall?: ObserverCompetenceLevelDto[];
    IceFall?: ObserverCompetenceLevelDto[];
    Flooding?: ObserverCompetenceLevelDto[];
    Ice?: ObserverCompetenceLevelDto[];
    EventOnGlacier?: ObserverCompetenceLevelDto[];
    Jøkulhaup?: ObserverCompetenceLevelDto[];
    Drought?: ObserverCompetenceLevelDto[];
    Unknown?: ObserverCompetenceLevelDto[];
  };
  Areas?: AreasDto[];
}

export interface RegistrationTypeDto {
  /** @format int32 */
  Id?: number;
  Name?: string;
  SubTypes?: RegistrationTypeSubTypeDto[];
  /** @format int32 */
  SortOrder?: number;
}

export interface ObserverCompetenceLevelDto {
  /** @format int32 */
  Id?: number;
  Name?: string;
  Description?: string;
  /** @format int32 */
  SortOrder?: number;
}

export interface AreasDto {
  /** @format int32 */
  CountryId?: number;
  CountryName?: string;
  CountryDescription?: string;
  /** @format int32 */
  SortOrder?: number;
  ForecastRegions?: {
    NotSpecified?: ForecastRegionDto[];
    Avalanche?: ForecastRegionDto[];
    EarthFlow?: ForecastRegionDto[];
    LandSlide?: ForecastRegionDto[];
    RockFall?: ForecastRegionDto[];
    IceFall?: ForecastRegionDto[];
    Flooding?: ForecastRegionDto[];
    Ice?: ForecastRegionDto[];
    EventOnGlacier?: ForecastRegionDto[];
    Jøkulhaup?: ForecastRegionDto[];
    Drought?: ForecastRegionDto[];
    Unknown?: ForecastRegionDto[];
  };
  Counties?: CountyDto[];
}

export interface RegistrationTypeSubTypeDto {
  /** @format int32 */
  Id?: number;
  Name?: string;
  /** @format int32 */
  SortOrder?: number;
}

export interface ForecastRegionDto {
  /** @format int32 */
  Id?: number;
  Text?: string;
  /** @format int32 */
  SortOrder?: number;
  SubRegions?: ForecastRegionSubRegionDto[];
  IsRegionForGrouping?: boolean;
}

export interface CountyDto {
  CountyNo?: string;
  Name?: string;
}

export interface ForecastRegionSubRegionDto {
  /** @format int32 */
  Id?: number;
  Text?: string;
  RegionType?: string;
  /** @format int32 */
  SortOrder?: number;
}

export interface AtAGlanceViewModel {
  /** @format int32 */
  RegId?: number;
  /** @format int32 */
  GeoHazardTID?: number;
  /** @format date-time */
  DtObsTime?: string;
  NickName?: string;
  /** @format int32 */
  CompetenceLevelTID?: number;
  Title?: string;
  /** @format double */
  Latitude?: number;
  /** @format double */
  Longitude?: number;
  /** @format int32 */
  UtmNorth?: number;
  /** @format int32 */
  UtmEast?: number;
  FormNames?: string[];
  /**
   * this field is deprecated and wont be used inpcoming versions of the app
   * @format int32
   */
  FirstAttachmentId?: number;
  /** Returns first attachement url from the observation or null */
  FirstAttachmentUrl?: string;
  /**
   * Count of all attachments
   * @format int32
   */
  AttachmentsCount?: number;
}

export interface RegistrationsWithAttachments {
  /**
   * Unique registration id that contains attachments
   * @format int32
   */
  RegId?: number;
  /** List of registration's attachments */
  Attachments?: AttachmentViewModel[];
}

export interface FinishTripDto {
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  DeviceGuid?: string;
}

export interface CreateTripDto {
  /** @maxLength 1024 */
  Comment?: string;
  /**
   * @format uuid
   * @example "00000000-0000-0000-0000-000000000000"
   */
  DeviceGuid?: string;
  /** @format int32 */
  GeoHazardID?: number;
  /** @maxLength 28 */
  Lat?: string;
  /** @maxLength 28 */
  Lng?: string;
  /**
   * @format int32
   * @min 0
   * @max 1440
   */
  ObservationExpectedMinutes?: number;
  /** @format int32 */
  TripTypeID?: number;
}
