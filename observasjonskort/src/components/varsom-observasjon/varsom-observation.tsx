import { Component, Prop, h, State, Host, getAssetPath, Listen } from '@stencil/core';
import { type } from 'os';
import { number } from 'yargs';

import { getLangKeyFromName } from '../../utils/utils';
import { getGeoHazardIdFromName } from '../../utils/utils';


type Observer = {
  NickName?: string,
  ObserverID?: number,
  CompetenceLevelTID?: number,
  CompentenceLevelName?: string
 }

 type ObsLocation = {

  ForecastRegionTID: number, //	integer($int32) Angir varslingsregion stedet tilhører. Varslingsregioner gitt i ForecastRegionKD. The ForecastRegionKD unique identifier
  ForecastRegionName: string,
  Height: number, //	integer($int32)
  MunicipalName: string,
  MunicipalNo: string, // Kommune nr stedet tilhører
  CountryId: number, //	integer($int32)
  CountryName: string,
  UTMSourceName: string,
  Title: string, // Read-only generert tittel
  ObsLocationID: number, //	integer($int32) ObsLocationID
  LocationName:	string, // maxLength: 60 Navn på stedet
  LocationDescription: string, // maxLength: 1024 Beskriver stedet.
  Latitud: number, // ($double) Latitude
  Longitude: number // ($double) Longitude
  UTMSourceTID: number, //	integer($int32) Kildehenvisning på hvordan koordinaten er satt. (GPS i tlf, klikk i kart, osv). Verdier gitt i UTMSourceKD
  Uncertainty: number, //	integer($int32) Usikkerhet i posisjon i meter. Anslås på web og i app hentes det fra gps.
 }

 type Attachment = {
  AttachmentId?: number,
  GeoHazardName?: string, //GeoHazard name
  RegistrationName?: string, //Registration name
  //UrlFormats	{...}
  Url?: string, //Full original image url
  Photographer?: string, //maxLength: 60 Navn på fotograf.
  
  Copyright?: string, //maxLength: 60 Rettigheter til bilde.
  Aspect?: number, //Hvilken himmelretning peker bilde. Gis i grader slik gitt på kompass. 0 er nord og 90 er øst osv.
  
  GeoHazardTID?: number, //Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is). The GeoHazardKD unique identifier
  
  RegistrationTID?: number, //Hva er bildet av. Dette feltet relaterer bildet til en observasjonstype. Feks værobservasjon, faretegn, osv. The RegistrationKD unique identifier
  
  Comment?: string, //maxLength: 2048 Kommentarfelt for bildet. F.eks for å beskrive det.
  
  AttachmentMimeType?: string,
  IsMainAttachment?: boolean //Om bildet skal vises først i registreringen, eller ikke
   }

  type AvalancheActivityObs2 = {
  EstimatedNumName?: string,
  ExposedHeightComboName?: string,
  AvalancheExtName?: string,
  AvalCauseName?: string,
  AvalTriggerSimpleName?: string,
  DestructiveSizeName?: string,
  AvalPropagationName?: string,
  EstimatedNumTID?: number,
  DtStart?: string,
  DtEnd?: string,
  ValidExposition?: string,
  ExposedHeight1?: number,
  ExposedHeight2?: number,
  ExposedHeightComboTID?: 0,
  AvalancheExtTID?: number,
  AvalCauseTID?: number,
  AvalTriggerSimpleTID?: number,
  DestructiveSizeTID?: number,
  AvalPropagationTID?: number,
  Comment?: string
 }  

 type AvalancheEvalProblem2 = {
  AvalProbabilityName: string,
  AvalTriggerSimpleName: string,
  AvalCauseDepthName: string,
  ExposedHeightComboName:	string,
  AvalancheExtName:	string,
  AvalCauseName: string,
  DestructiveSizeName: string,
  AvalPropagationName: string,
  AvalCauseAttributeLightName: string,
  AvalCauseAttributeThinName:	string,
  AvalCauseAttributeSoftName:	string,
  AvalCauseAttributeCrystalName: string,
  AvalProbabilityTID: number, // integer($int32) Sannsynlighet for skred. The AvalProbabilityKD unique identifier
  AvalPropagationTID: number, //	integer($int32)
  AvalTriggerSimpleTID: number, //	integer($int32) The AvalTriggerSimpleKD unique identifier
  AvalCauseDepthTID: number, //	integer($int32) Hvor dypt ligger det overnevnte svake laget? The AvalCauseDepthKD unique identifier
  ValidExposition:	string, // maxLength: 8 Velg utsatte retninger
  ExposedHeight1: number, //	integer($int32) Øverste høyde på “utsatt høyde” symbolet.
  ExposedHeight2: number, //	integer($int32) Nederste høyde på “utsatt høyde” symbolet.
  ExposedHeightComboTID: number, //	integer($int32) Hvilket symbol brukes? Er utsatt tereng over ExposedHeight2 eller under den? The ExposedHeightComboKD unique identifier
  AvalancheExtTID: number, // integer($int32) Skredtype. I appen er dette 1. felt under skredproblem. The AvalancheExtKD unique identifier
  Comment: string, // Kommentar til skredproblemet
  AvalCauseTID: number, // integer($int32) Hvilket svakt lag løsner skredet på? The AvalCauseKD unique identifier
  AvalCauseAttributeLightTID: number, //	integer($int32)
  AvalCauseAttributeThinTID: number, //	integer($int32)
  AvalCauseAttributeSoftTID: number, //	integer($int32)
  AvalCauseAttributeCrystalTID: number, //	integer($int32)
  DestructiveSizeTID: number //	integer($int32) Sannsynlig tilleggsbelastning for å utløse skred. The DestructiveSizeKD unique identifier
 }

 type AvalancheEvaluation3 = {
  AvalancheDangerName: string,
  ForecastCorrectName: string,
  AvalancheDangerTID:	number, //integer($int32) Faregrad. The AvalancheDangerKD unique identifier
  AvalancheEvaluation: string, // maxLength: 1024 Her blir Skredfarevurdering skrevet inn. I appen blir “Utstrekning” lagt til som tekst i denne kolonnen
  AvalancheDevelopment: string, // maxLength: 1024 Her blir forventet utvikling skrevet inn.
  ForecastCorrectTID: number, //	integer($int32) Felt hvor observatøren kan fortelle de syns varslet stemmer. Valg fra liste gitt i ForecastCorrectKD. The ForecastCorrectKD unique identifier
  ForecastComment: string, //maxLength: 1024 Kommentarfelt for utdypende kommentar om varslet stemmer eller ikke.
 }

 type AvalancheObs = {
  DestructiveSizeName?: string,
  AvalancheTriggerName?: string,
  AvalancheName?: string,
  TerrainStartZoneName?: string,
  AvalCauseName?: string,
  DtAvalancheTime?: string, //Tid da skredet gikk
  Aspect?: number, //Eksposisjon
  HeightStartZone?: number, //Høyde i løsneområdet
  HeightStopZone?: number, //Høyde i stoppområdet
  DestructiveSizeTID?: number, //Størrelse. The DestructiveSizeKD unique identifier
  AvalancheTriggerTID?: number, //Skredutløser. The AvalancheTriggerKD unique identifier
  AvalancheTID?: number, //Skredtype. The AvalancheKD unique identifier
  TerrainStartZoneTID?: number, //Terrengtype i løsneområdet. The TerrainStartZoneKD unique identifier
  SnowLine?: number, //SnowLine
  ValidExposition?: string, //ValidExposition
  AvalCauseTID?: number, //Skredutløser. The AvalCauseTID unique identifier
  FractureHeight?: number, //Bruddhøyde
  FractureWidth?: number //Bruddbredde
  Trajectory?: string, //Skredbanenavn
  StartLat?: number, //($double) StartLat
  StartLong?: number, //($double) StartLong
  StopLat?: number, //($double) StopLat
  StopLong?: number //($double) StopLong
  RemotelyTriggered?: boolean, //Ble skredet fjernutløst?
  Comment?: string
 }

 type CompressionTest = {
  CompressionTestName: string,
  PropagationName: string,
  StabilityEvalName: string,
  ComprTestFractureName: string,
  CompressionTestTID: number, //	integer($int32) The CompressionTestKDV unique identifier
  TapsFracture: number, //	integer($int32) TapsFracture
  TapsFullPropagation: number, //	integer($int32) TapsFullPropagation
  PropagationTID: number, //	integer($int32) The PropagationKD unique identifier
  FractureDepth: number, //($double) maximum: 100 minimum: 0 FractureDepth
  PstX:	number, //($double) maximum: 100 minimum: 0 PST X distance (in meters)
  PstY:	number, //($double) maximum: 100 minimum: 0 PST Y distance (in meters)
  StabilityEvalTID: number, // integer($int32) The StabilityEvalKD unique identifier
  ComprTestFractureTID: number, //	integer($int32) The ComprTestFractureKD unique identifier
  RbRelease: number, //	integer($int32) Percentage of block that released in Rutchblock test
  Comment:	string, //Comment
  IncludeInSnowProfile:	boolean
 }

 type DangerObs = {
  GeoHazardName?: string,
  DangerSignName?: string,
  GeoHazardTID?: number,
  DangerSignTID?: number,
  Comment?: string
 }

 type Url = {
  UrlDescription: string //maxLength: 1024 UrlDescription
  UrlLine: string, //maxLength: 1024 UrlLine
 }

 type GeneralObservation = {
  GeoHazardName: string,
  Urls: Url[],
  GeoHazardTID: number, //	integer($int32) Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is).
  ObsComment: string, //maxLength: 2048 Selve registreringen.
  ObsHeader: string, //maxLength: 100 Overskriften (hovedpoenget).
  Comment: string, // maxLength: 1024 Kommentarfelt for å skrive utfyllende tekst
 }

 type IceCoverObs = {
  IceCoverBeforeName:	string,
  IceCoverName:	string,
  IceCoverAfterName: string,
  IceSkateabilityName: string,
  IceCapacityName: string,
  IceCoverBeforeTID: number, //Hvordan har vannet vært isdekt før den aktuelle observajonen? Feks var det isfritt? Feltet sier noe om hvordan utviklingen er. The IceCoverBeforeKD unique identifier
  IceCoverTID: number, //Hvordan er vannet dekket av is nå. The IceCoverKD unique identifier
  IceCoverAfterTID: number,
  Comment: string, //maxLength: 1024 Kommentarfelt for å skrive utfyllende tekst om observasjonen.
  IceSkateabilityTID: number, //Skøytebarhet. IceSkateabilityKD unique identifier
  IceCapacityTID: number //Bæreevne. IceCapacityKD unique identifier
 }

 type IceThicknessLayer = {
  IceLayerName: string,
  IceLayerTID: number, //The IceLayerKD unique identifier
  IceLayerThickness:	number, //($double) IceLayerThickness
  Comment: string, //maxLength: 1024 Comment
 }

 type IceThickness = {
  IceThicknessLayers: IceThicknessLayer,
  SnowDepth: number, //($double) Mengden tørr snø oppå isen. Verdi i meter [m].
  SlushSnow: number, //($double) Mengden sørpe oppå isen. Verdi i meter [m].
  IceThicknessSum: number, //($double) Total istykkelse. I tabellen IceThicknessLayer kan individuelle islag registreres. Summen av dem skal samsvare med IceThickenssSum. Verdi i meter [m].
  IceHeightBefore: number, //($double) Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden før borring. IceHeightBefore = 0 betyr at isen er tørr og negative verdier angir overvann. Verdi i meter [m].
  IceHeightAfter: number, //($double) Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden etter borring. IPositive verdier angir at vannet står nedi hulet og og negative verdier angir overvann. Verdi i meter [m].
  Comment: string //maxLength: 1024 Comment

 }

 type Incident = {
  GeoHazardName: string,
  ActivityInfluencedName:	string,
  DamageExtentName:	string,
  ForecastAccurateName:	string,
  SafetyGearName:	string, // Hadde man sikkerhetsutstyr?
  LocalTouristName:	string, // Var man lokal, norsk eller utenlandsk turist?
  LocalKnowledgeName:	string, // Hvor ofte er man i området?
  RescueName:	string, //Hvem gjennomførte redningen?
  SlopeActivityName: string, // Hvilken turfase gjelder det?
  IncidentURLs: Url[],
  GeoHazardTID: number, //	integer($int32) Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is).
  ActivityInfluencedTID: number, //	integer($int32) Hva ble påvirket av hendelsen. Valgene er gitt i ActivityInfluencedKD. The ActivityInfluencedKD unique identifier
  DamageExtentTID: number, //	integer($int32) Skadeomfang. Hva var konsekvensen av hendelsen. Valgene gitt i DamageExtentKD. The DamageExtentKD unique identifier
  ForecastAccurateTID: number, //	integer($int32) Var det et varsel utstedt og stemte det? The ForecastAccurateKD unique identifier
  LocalTouristTID: number, //	integer($int32) Var man lokal, norsk eller utenlandsk turist?
  LocalKnowledgeTID: number, //	integer($int32) Hvor ofte er man i området?
  InvolvedNum: number, //	integer($int32) Hvor mange var involvert?
  CasualtiesNum: number, //	integer($int32) Hvor mange var i skredet/vannet?
  HarmedNum: number, //	integer($int32) Hvor mange vart skadd?
  DeadNum: number, //	integer($int32) Hvor mange døde?
  EvacuatedNum: number, //	integer($int32) Hvor mange evakuerte?
  TrafficObstructed: boolean, // Er trafikk hindret?
  MaterialDamages: boolean, // Er det noen materielle skader?
  SafetyGearTID: number, //	integer($int32) Var det noe sikkerhetsutstyr i bruk?
  RescueTID: number,	// integer($int32) Hvem gjennomførte redningen?
  SlopeActivityTID: number, //	integer($int32) Hvilken turfase?
  DtEndTime: string //($date-time) Om hendelsen strakte seg ut i tid, når sluttet den å gjelde? Feks, når åpnet veien igjen etter raset?
  IncidentHeader: string, // maxLength: 100 Hendelsen beskrives med overskrift ..
  IncidentIngress: string, // maxLength: 512 .. med ingress eller sammendrag ..
  IncidentText: string, // maxLength: 2048  .. og teksten eller artikkelen.
  Comment: string, //Comment.
 }


type SignsOfDanger = {
  _type: string,
  _comment: string
 }





 type LandslideObs = {
  LandSlideName?: string,
  LandSlideTriggerName?: string,
  LandSlideSizeName?: string,
  GeoHazardName?: string,
  ActivityInfluencedName?: string,
  ForecastAccurateName?: string,
  DamageExtentName?: string,
  Imageurl?: string,
  LandSlideTID?: number,
  LandSlideTriggerTID?: number,
  LandSlideSizeTID?: number,
  Comment?: string,
  GeoHazardTID?: number,
  ActivityInfluencedTID?: number,
  ForecastAccurateTID?: number,
  DamageExtentTID?: number,
  StartLat?: number,
  StartLong?: number,
  StopLat?: number,
  StopLong?: number,
  DtLandSlideTime?: string,
  DtLandSlideTimeEnd?: string
 }

 type StratProfileLayer = {
  GrainFormPrimaryTName:	string,
  GrainFormSecondaryTName:	string,
  HardnessTName:	string,
  HardnessBottomTName:	string,
  WetnessTName:	string,
  CriticalLayerTName:	string,
  DepthTop:	number, //($double)
  Thickness: number, //($double)
  GrainFormPrimaryTID: number, //	integer($int32)
  GrainFormSecondaryTID: number,	integer($int32)
  GrainSizeAvg:	number, //($double)
  GrainSizeAvgMax:	number, //($double)
  HardnessTID: number, //($int32)
  HardnessBottomTID: number, //($int32)
  WetnessTID: number, //	integer($int32)
  CriticalLayerTID: number, //	integer($int32)
  Comment: string,
  SortOrder: number //	integer($int32)
 }

 type StratProfile = {
  TotalDepth:	number, //($double)
  Layers: StratProfileLayer[]
 }

 type SnowTempObs = {
  Depth: number //($double) maximum: 100 minimum: 0
  SnowTemp:	number //($double) maximum: 0 minimum: -70
 }

 type SnowTemp = {
  Layers: SnowTempObs[]
 }

 type SnowDensityLayer = {
  Depth: number, //($double)
  Thickness: number //($double) thickness in m
  Density: number //($double) Density in kg/m^3
  Comment: string,
  Weight:	number, //($double) Weight in KG
  WaterEquivalent: number, // ($double)
  SortOrder: number //	integer($int32)
 }

 type SnowDensity = {
  CylinderDiameter:	number, //($double)
  TareWeight: number, //($double)
  Comment: string,
  Layers: SnowDensityLayer[]
 }

 type SnowProfile2 = {
  TotalDepth: number, //($double)
  StratProfile: StratProfile,
  Comment: string,
  IsProfileToGround: boolean,
  Exposition: number, // integer($int32)
  SlopeAngle: number, // integer($int32)
  SnowTemp:	SnowTemp,
  SnowDensity: SnowDensity[]

 }

 type SnowSurface = {
  SnowWindDepth24: string,
  SurfaceWaterContentName: string,
  SnowDriftName: string,
  SnowSurfaceName: string,
  SkiConditionsTID: number,
  SkiConditionsName: string,
  SurfaceRoughnessName: string,
  SnowDepth: number,
  NewSnowDepth24: number,
  NewSnowLine: number,
  SurfaceWaterContentTID: number,
  SnowDriftTID: number,
  SnowSurfaceTID: number,
  Comment: string,
  HeightLimitLayeredSnow: number,
  SnowLine: number 
  
 }
 

 type WeatherObservation = {
  PrecipitationName: string,
  WindDirectionName: string,
  PrecipitationTID: number,
  AirTemperature: number,
  WindSpeed: number,
  WindDirection: number,
  CloudCover: number,
  Comment: string,
  _imageUrl?: string
 }

 type WaterLevelMeasurement = {
  WaterLevelMeasurementId: number, //	integer($int32)
  Attachments: Attachment[],
  WaterLevelValue: number, //($double) maximum: 999 minimum: 0
  DtMeasurementTime: string, //($date-time)
  Comment: string
 }

 type WaterLevel2 = {
  WaterLevelStateName: string,
  WaterAstrayName: string,
  ObservationTimingName: string,
  MeasurementReferenceName:	string,
  MeasurementTypeName: string,
  WaterLevelMethodName:	string,
  MarkingReferenceName:	string,
  MarkingTypeName: string,
  WaterLevelMeasurement: WaterLevelMeasurement[],
  WaterAstrayTID: number,
  ObservationTimingTID: number, //integer($int32)
  MeasurementReferenceTID: number, //integer($int32)
  MeasurementTypeTID: number, //	integer($int32)
  WaterLevelMethodTID: number, //	integer($int32)
  MarkingReferenceTID: number, //	integer($int32)
  WaterLevelStateTID: number, //	integer($int32)
  MarkingTypeTID: number, //	integer($int32)
  MeasuringToolDescription:	string,
  Comment: string
 }

 type DamageObs = {
  GeoHazardName:	string,
  DamageTypeName:	string,
  Attachments?: Attachment[],
  GeoHazardTID: number, //	integer($int32)
  DamageTypeTID: number, //	integer($int32)
  DamagePosition:	LatLng,
  Comment:	string
 }

 type SnowProfile = {
  _comment: string,
  _temperature: string,
  _layering: string,
  _imageUrl?: string
 }

 type AvalancheEvaluation = {
  RegID: number, //integer($int32)
  CanPublish:	boolean,
  AvalancheDangerTID: number, //	integer($int32)
  AvalancheDangerName:	string,
  ValidExposition:	string,
  ValidHeightRelative: string,
  ValidHeightFrom: number, //	integer($int32)
  ValidHeigtTo: number, //	integer($int32)
  AvalancheProblemTID1: number, //	integer($int32)
  AvalancheProblemName1: string,
  AvalancheProblemTID2: number, //	integer($int32)
  AvalancheProblemName2: string,
  AvalancheProblemTID3: number, //	integer($int32)
  AvalancheProblemName3: string,
  AvalancheEvaluation1:	string,
  Comment:	string
 }

 type AvalancheActivityObs = {
  AvalancheActivityObsID: number, //	integer($int32) Unik id på denne tabellen da flere er mulig pr RegID.
  Aspect:	number, //integer($int32) Hvilken side av fjellene har skredene gått? Gis i grader slik gitt på kompass. 0 er nord og 90 er øst osv.
  HeigthStartZone: number, //	integer($int32) Meter over havet på løsneområdet.
  DtAvalancheTime: string, //($date-time) Når gikk skredene? Her bruker vi feltet som en ca. tid og brukerene oppfordres til å anta best mulig.
  DestructiveSizeTID: number, //	integer($int32) Hvor store er skredene?. The DestructiveSizeKD unique identifier
  DestructiveSizeName:	string,
  EstimatedNumTID: number, //	integer($int32) Hvor mange skred er gått? The EstimatedNumKD unique identifier
  EstimatedNumName:	string,
  AvalancheTID: number, //	integer($int32) Typen skred som er gått. The AvalancheKD unique identifier
  AvalancheName: string,
  AvalancheTriggerTID: number, //	integer($int32) Hva utløste skredet? Det er ofte beskrevet som det svake laget i snødekket. The AvalancheTriggerKD unique identifier
  AvalancheTriggerName:	string,
  TerrainStartZoneTID: number, //	integer($int32) Hva slags terrengtype var det i løsneområdet. The TerrainStartZoneKD unique identifier
  TerrainStartZoneName:	string,
  SnowLine: number, //	integer($int32) Hvor går snøgrensa i området?
  SnowLineName:	string,
  Comment: string, //Kommentarfelt for å skrive utfyllende tekst om observasjonen.
  DtOffAvalancheTime: string //($date-time)
 }

 type AvalancheDangerObs = {
  AvalancheDangerObsID: number, //	integer($int32)
  DangerSignTID: number,	// integer($int32)
  DangerSignName:	string,
  Comment:	string
 }

 type AvalancheEvalProblem = {
  AvalancheEvalProblemID: number, //	integer($int32)
  AvalProbabilityTID: number, //	integer($int32)
  AvalProbabilityName:	string,
  AvalTriggerSimpleTID: number, //	integer($int32)
  AvalTriggerSimpleName:	string,
  DestructiveSizeExtTID: number, //	integer($int32)
  DestructiveSizeExtName:	string,
  AvalancheExtTID: number, //	integer($int32)
  AvalancheExtName:	string,
  AvalCauseTID: number, //	integer($int32)
  AvalCauseName:	string,
  AvalCauseExtTID: number, //	integer($int32)
  AvalCauseExtName:	string,
  AvalReleaseHeightTID: number, //	integer($int32)
  AvalReleaseHeightName:	string,
  AvalancheProbabilityAutoText:	string,
  AvalancheProblemAutoText:	string,
  Comment: string
 }

 type AvalancheEvaluation2 = {
  AvalancheDangerName:	string,
  ValidExposition:	string,
  Comment:	string,
  AvalancheEvaluation:	string,
  AvalancheDevelopment:	string,
  ExposedHeight1: number, //	integer($int32)
  ExposedHeight2: number, //	integer($int32)
  ExposedHeightComboTID: number, //	integer($int32)
  ExposedHeightComboName:	string,
  ExposedClimateTID: number, //	integer($int32) 
  ExposedClimateName:	string,
  AvalancheDangerTID: number, //	integer($int32)
  AvalancheEvalProblems: AvalancheEvalProblem	[]
 }

 type SnowCoverObs = {
  DepthHoarThickness:	number, // ($double) DepthHoarThickness
  CriticalLayerExists:	boolean, // CriticalLayerExists
  CriticalLayerLocation:	number, // ($double) CriticalLayerLocation
  CriticalLayerTID: number, //	integer($int32) The CriticalLayerKD unique identifier
  SnowPilotRef:	string, // SnowPilotRef
  Comment:	string, // Comment.
  CriticalLayerName:	string
 }

 type WaterLevel = {
  WaterLevelDescribed: string,
  WaterLevelValue:	number, // ($double)
  WaterLevelRefTID: number, //	integer($int32)
  WaterLevelRefName: 	string,
  Comment:	string,
  MeasuredDischarge:	number, //($double)
  IsRiver:	boolean
 }



 



 
 
 type Test = {
  _test: string,
  _stability: string
 }



 

 type LandslideProblem = {
  _description: string,
  _type: string,
  _estimatedLoadToTrigger: string,
  _sizeOfExpectedLandslide: string,
  _spread: string,
  _comment: string,
  _imageUrl?: string
 }

 type EstimateOfRisk = {
  degreeOfRisk: string,
  _estimateOfRisk: string,
  _development: string,
  _imageUrl?: string
 }

 

 

 type LatLng = {
  Latitude: number,
  Longitude: number
 } 

 

 type Image = {
  _imageData?: any,
  _photographer?: string,
  _copyright?: string,
  _comment?: string
 }

 type Observation = {
  _moh?: number,
  _geoHazardName?: string,
  _registrationName?: string,
  _imageUrl?: string,
  _region?: string,
  _regId?: number,
  _municipality?: string,
  _source?: string
  _sourceOfPositioning?: string,
  _precision?: string,
  _dateOfObservation?: Date,
  _dateOfRegistration?: Date,
  _dateOfLastUpdate?: Date,
  _observer?: Observer,
  _typeOfWeather?: string
  _latitude?: number,
  _longitude?: number,
  _signsOfDanger?: SignsOfDanger,
  _dangerObs?: DangerObs[],
  _landslideObs?: LandslideObs,
  _avalancheObs?: AvalancheObs,
  //_landslideActivity?: LandslideActivity,
  _weather?: WeatherObservation,
  _test?: Test,
  _snowProfile?: SnowProfile,
  _landslideProblem?: LandslideProblem,
  _estimateOfRisk?: EstimateOfRisk
  _snowSurface?: SnowSurface
  _dataSource?: any,
  _className?: string,
  _observationImages: HTMLElement[],
  _attachments: Attachment[],
  _observerGroupName?: string,
  _avalancheActivityObs2?: AvalancheActivityObs2[],
  _iceCoverObs?: IceCoverObs,
  _iceThickness?: IceThickness,
  _waterLevel2?: WaterLevel2,
  _damageObs?: DamageObs[],
  _obsLocation?: ObsLocation,
  _avalancheEvalProblem2?: AvalancheEvalProblem2[]
  _avalancheEvaluation3?: AvalancheEvaluation3,
  _compressionTest?: CompressionTest[]
  _generalObservation?: GeneralObservation,
  _incident?: Incident,
  _snowProfile2?: SnowProfile2,
  _avalancheEvaluation?: AvalancheEvaluation,
  _avalancheActivityObs?: AvalancheActivityObs[],
  _avalancheDangerObs?: AvalancheDangerObs[],
  _avalancheEvaluation2?: AvalancheEvaluation2,
  _snowCoverObs?: SnowCoverObs,
  _waterLevel?: WaterLevel,
 // _images?: Image
};


@Component({
  tag: 'varsom-observation',
  styleUrl: 'varsom-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomObservation {

  @State() _regId: string;
  @State() moh: number;
  @State() numberOfObservations: number;
  @State() region: string;
  @State() municipality: string;
  @State() source: string;
  @State() sourceOfPositioning: string;
  @State() precision: string;
  @State() dateOfObservation: Date;
  @State() dateOfRegistration: Date;
  @State() dateOfLastUpdate: Date;
  @State() observer: string;
  @State() typeOfWeather: string;

  @State() slideIndex: number = 1;
  
  observations: Observation[] = []; 
  
  @Prop() regId: string;
  @Prop() language: string = "Norwegian";
  @Prop() type: string;
  @Prop() number: number = 1;
  
  //carousel: Carousel;
  dataSource: any;

  observationImages: HTMLElement[] = [];


  @Prop() count: number = 1;

  
 plusSlides(n) {
  this.showSlides.bind(this, this.slideIndex += n);
}

// image slider:          source: w3schools: https://www.w3schools.com/howto/howto_js_slideshow.asp
 currentSlide(n) {
  this.showSlides.bind(this, this.slideIndex = n);
}

  showSlides(n: number, observation: Observation){
  
    let i;
    let slides = observation._observationImages;
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      //dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    //dots[this.slideIndex-1].className += " active";
  }

  async componentDidRender(){
    for (let i = 0; i < this.observations.length; i++){
      var obs = this.observations[i];
      for (let j = 0; j < 3; j++){
        obs._observationImages[j].style.display = "none"
      }
    }
    for (let k = 0; k < this.observations.length; k++){
    this.showSlides(this.slideIndex, this.observations[k]);
    }

    }
  async componentWillLoad(){

  let geoHazardId = getGeoHazardIdFromName(this.type);
  let langKey = getLangKeyFromName(this.language);
  let _data 
  if (this.regId !== undefined){
    _data = `{"LangKey": ${langKey}, "RegId": ${this.regId}}`
  } else
  _data = `{"NumberOfRecords": ${this.count}, "SelectedGeoHazards": [${geoHazardId}], "LangKey": ${langKey}}`
    let response = await fetch('https://api.regobs.no/v5/Search', {
    method: 'POST',
    body: _data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let data = await response.json();
        
     for(let i = 0; i < this.count; i++){
    
     //source: https://pipinghot.dev/snippet/check-if-an-array-has-length-in-javascript-typescript/
      this.observations.push({
        _moh: data[i]["ObsLocation"]["Height"],
        _region: data[i]["ObsLocation"]["MunicipalName"],
        _regId: data[i]["RegId"],
        _municipality: data[i]["ObsLocation"]["LocationName"],
        _source: data[i]["SourceName"],
        _sourceOfPositioning: data[i]["ObsLocation"]["UTMSourceName"],
        _precision: data[i]["ObsLocation"]["Uncertainty"],
        _dateOfRegistration: data[i]["DtRegTime"],
        _dateOfLastUpdate: data[i]["DtChangeTime"],
        _observer: data[i]["Observer"],
        _typeOfWeather: data[i]["ObsLocation"]["ForecastRegionName"],
        _latitude: data[i]["ObsLocation"]["Latitude"],
        _longitude: data[i]["ObsLocation"]["Longitude"],
        //_landslideActivity: data[i]["LandslideActivity"],
        _dangerObs: [],//data[i]["DangerObs"],
        _landslideObs: data[i]["LandslideObs"],
        _avalancheObs: data[i]["AvalancheObs"],
        _avalancheActivityObs2: [],
        _snowSurface: data[i]["SnowSurface"],
        //_attachments: data[i]["Attachments"],
        //_images: [],
        _className: `${data[i]["RegId"]} fade`,
        _observationImages: [],
        _geoHazardName: data[i]["GeoHazardName"],
        _attachments: [],
        _weather: data[i]["WeatherObservation"],
        _observerGroupName: data[i]["ObserverGroupName"],
        _iceCoverObs: data[i]["IceCoverObs"],
        _iceThickness: data[i]["IceThickness"],
        _waterLevel2: data[i]["WaterLevel2"],
        _damageObs: [],
        _obsLocation: data[i]["ObsLocation"],
        _avalancheEvalProblem2: [],
        _avalancheEvaluation3: data[i]["AvalancheEvaluation3"],
        _compressionTest: [],
        _generalObservation: data[i]["GeneralObservation"],
        _incident: data[i]["Incident"],
        _snowProfile2: data[i]["SnowProfile2"],
        _avalancheEvaluation: data[i]["AvalancheEvaluation"],
        _avalancheActivityObs: [],
        _avalancheDangerObs: [],
        _avalancheEvaluation2: data[i]["AvalancheEvaluation2"],
        _snowCoverObs: data[i]["SnowCoverObs"],
        _waterLevel: data[i]["WaterLevel"],  
        }          
     );

        //add attachments
        for(let j = 0; j < 30; j++){  //max 30 attachments
          if(data[i]["Attachments"][j] && data[i]["Attachments"][j] !== 0)
            this.observations[i]._attachments.push({
              Url: data[i]["Attachments"][j]["Url"],
              Comment: data[i]["Attachments"][j]["Comment"],
              Photographer: data[i]["Attachments"][j]["Photographer"],
              GeoHazardName: data[i]["Attachments"][j]["GeoHazardName"],
              RegistrationName: data[i]["Attachments"][j]["RegistrationName"],
              Copyright: data[i]["Attachments"][j]["Copyright"],
            })
  
            
        }
      
        //add avalancheActivityObservations
        if (data[i]["AvalancheActivityObs2"].length > 0){
          for (let j = 0; j < data[i]["AvalancheActivityObs2"].length; j++){
            this.observations[i]._avalancheActivityObs2.push({
              EstimatedNumName: data[i]["AvalancheActivityObs2"][j]["EstimatedNumName"],
              ExposedHeightComboName: data[i]["AvalancheActivityObs2"][j]["ExposedHeightComboName"],
              AvalancheExtName: data[i]["AvalancheActivityObs2"][j]["AvalancheExtName"],
              AvalCauseName: data[i]["AvalancheActivityObs2"][j]["AvalCauseName"],
              AvalTriggerSimpleName: data[i]["AvalancheActivityObs2"][j]["AvalTriggerSimpleName"],
              DestructiveSizeName: data[i]["AvalancheActivityObs2"][j]["DestructiveSizeName"],
              AvalPropagationName: data[i]["AvalancheActivityObs2"][j]["AvalPropagationName"],
              EstimatedNumTID: data[i]["AvalancheActivityObs2"][j]["EstimatedNumTID"],
              DtStart: data[i]["AvalancheActivityObs2"][j]["DtStart"],
              DtEnd: data[i]["AvalancheActivityObs2"][j]["DtEnd"],
              ValidExposition: data[i]["AvalancheActivityObs2"][j]["ValidExposition"],
              ExposedHeight1: data[i]["AvalancheActivityObs2"][j]["ExposedHeight1"],
              ExposedHeight2: data[i]["AvalancheActivityObs2"][j]["ExposedHeight2"],
              ExposedHeightComboTID: data[i]["AvalancheActivityObs2"][j]["ExposedHeightComboTID"],
              AvalancheExtTID: data[i]["AvalancheActivityObs2"][j]["AvalancheExtTID"],
              AvalCauseTID: data[i]["AvalancheActivityObs2"][j]["AvalancheCauseTID"],
              AvalTriggerSimpleTID: data[i]["AvalancheActivityObs2"][j]["AvalancheTriggerSimpleTID"],
              DestructiveSizeTID: data[i]["AvalancheActivityObs2"][j]["DestructiveSizeTID"],
              AvalPropagationTID: data[i]["AvalancheActivityObs2"][j]["AvalPropagationTID"],
              Comment: data[i]["AvalancheActivityObs2"][j]["Comment"]
            
      
            
            })
          }
        }

        //add dangerObs
        if (data[i]["DangerObs"].length > 0){
          for (let j = 0; j < data[i]["DangerObs"].length; j++){
            this.observations[i]._dangerObs.push({
              GeoHazardName: data[i]["DangerObs"][j]["GeoHazardName"],
              DangerSignName: data[i]["DangerObs"][j]["DangerSignName"],
              GeoHazardTID: data[i]["DangerObs"][j]["GeoHazardTID"],
              DangerSignTID: data[i]["DangerObs"][j]["DangerSignTID"],
              Comment: data[i]["DangerObs"][j]["Comment"]
              
            })
          }
        }

         //add damageObs
         if (data[i]["DamageObs"].length > 0){
          for (let j = 0; j < data[i]["DamageObs"].length; j++){
            this.observations[i]._damageObs.push({
              GeoHazardName:	data[i]["DamageObs"][j]["GeoHazardName"],
              DamageTypeName:	data[i]["DamageObs"][j]["DamageTypeName"],
              GeoHazardTID: data[i]["DamageObs"][j]["GeoHazardTID"],
              //Attachments: Attachment[],
              DamageTypeTID: data[i]["DamageObs"][j]["DamageTypeTID"],
              DamagePosition:	data[i]["DamageObs"][j]["DamagePosition"],
              Comment: data[i]["DamageObs"][j]["Comment"]
              
              //etc....
            })
          }
        }

        //add avalancheEvalProblem
        if (data[i]["AvalancheEvalProblem2"].length > 0){
          for (let j = 0; j < data[i]["AvalancheEvalProblem2"].length; j++){
            this.observations[i]._avalancheEvalProblem2.push({
              AvalProbabilityName: data[i]["AvalancheEvalProblem2"][j]["AvalProbabilityName"],
              AvalTriggerSimpleName: data[i]["AvalancheEvalProblem2"][j]["AvalTriggerSimpleName"],
              AvalCauseDepthName: data[i]["AvalancheEvalProblem2"][j]["AvalCauseDepthName"],
              ExposedHeightComboName: data[i]["AvalancheEvalProblem2"][j]["ExposedHeightComboName"],
              AvalancheExtName: data[i]["AvalancheEvalProblem2"][j]["AvalancheExtName"],
              AvalCauseName: data[i]["AvalancheEvalProblem2"][j]["AvalCauseName"],
              DestructiveSizeName: data[i]["AvalancheEvalProblem2"][j]["DestructiveSizeName"],
              AvalPropagationName: data[i]["AvalancheEvalProblem2"][j]["AvalPropagationName"],
              AvalCauseAttributeLightName: data[i]["AvalancheEvalProblem2"][j]["AvalCauseAttributeLightName"],
              AvalCauseAttributeThinName:	data[i]["AvalancheEvalProblem2"][j]["AvalCauseAttributeThinName"],
              AvalCauseAttributeSoftName:	data[i]["AvalancheEvalProblem2"][j]["AvalCauseAttributeSoftName"],
              AvalCauseAttributeCrystalName: data[i]["AvalancheEvalProblem2"][j]["AvalCauseAttributeCrystalName"],
              AvalProbabilityTID: data[i]["AvalancheEvalProblem2"][j]["AvalProbabilityTID"],
              AvalPropagationTID: data[i]["AvalancheEvalProblem2"][j]["AvalPropagationTID"],
              AvalTriggerSimpleTID: data[i]["AvalancheEvalProblem2"][j]["AvalTriggerSimpleTID"],
              AvalCauseDepthTID: data[i]["AvalancheEvalProblem2"][j]["AvalCauseDepthTID"],
              ValidExposition: data[i]["AvalancheEvalProblem2"][j]["ValidExposition"],
              ExposedHeight1: data[i]["AvalancheEvalProblem2"][j]["ExposedHeight1"],
              ExposedHeight2: data[i]["AvalancheEvalProblem2"][j]["ExposedHeight2"],
              ExposedHeightComboTID: data[i]["AvalancheEvalProblem2"][j]["ExposedHeightComboTID"],
              AvalancheExtTID: data[i]["AvalancheEvalProblem2"][j]["AvalancheExtTID"],
              Comment: data[i]["AvalancheEvalProblem2"][j]["Comment"],
              AvalCauseTID: data[i]["AvalancheEvalProblem2"][j]["AvalCauseTID"],
              AvalCauseAttributeLightTID: data[i]["AvalancheEvalProblem2"][j]["AvalCauseAttributeLightTID"],
              AvalCauseAttributeThinTID: data[i]["AvalancheEvalProblem2"][j]["AvalCauseAttributeThinTID"],
              AvalCauseAttributeSoftTID: data[i]["AvalancheEvalProblem2"][j]["AvalCauseAttributeSoftTID"],
              AvalCauseAttributeCrystalTID: data[i]["AvalancheEvalProblem2"][j]["AvalCauseAttributeCrystalTID"],
              DestructiveSizeTID: data[i]["AvalancheEvalProblem2"][j]["DestructiveSizeTID"]
            })
          }
        }
/*
 //add AvalancheEvalProblem
 if (data[i]["AvalancheEvalProblem2"].length > 0){
  for (let j = 0; j < data[i]["AvalancheEvalProblem2"].length; j++){
    this.observations[i]._avalancheEval...push({
      AvalProbabilityName: data[i]["AvalancheActivityObs2"][j]["AvalCauseName"]
      
      //etc....
    })
  }
}
  */      


        //add images for image carousel
     this.observations[i]._images.push(
      {
        _imageData: (data[i]["Attachments"][0] && data[i]["Attachments"][0] !== 0) ? data[i]["Attachments"][0]["Url"] : "",
        _copyright: (data[i]["Attachments"][0] && data[i]["Attachments"][0] !== 0) ? data[i]["Attachments"][0]["Copyright"] : "",
        _photographer: (data[i]["Attachments"][0] && data[i]["Attachments"][0] !== 0) ? data[i]["Attachments"][0]["Photographer"] : "",
        _comment: (data[i]["Attachments"][0] && data[i]["Attachments"][0] !== 0) ? data[i]["Attachments"][0]["Comment"] : "",
    },
    {
      _imageData: (data[i]["Attachments"][1] && data[i]["Attachments"][1] !== 0) ? data[i]["Attachments"][1]["Url"] : "",
      _copyright: (data[i]["Attachments"][1] && data[i]["Attachments"][1] !== 0) ? data[i]["Attachments"][1]["Copyright"] : "",
      _comment: (data[i]["Attachments"][1] && data[i]["Attachments"][1] !== 0) ? data[i]["Attachments"][1]["Comment"] : "",
  },
  {
    _imageData: (data[i]["Attachments"][2] && data[i]["Attachments"][2] !== 0) ? data[i]["Attachments"][2]["Url"] : "",
    _copyright: (data[i]["Attachments"][2] && data[i]["Attachments"][2] !== 0) ? data[i]["Attachments"][2]["Copyright"] : "",
    _comment: (data[i]["Attachments"][2] && data[i]["Attachments"][2] !== 0) ? data[i]["Attachments"][2]["Comment"] : "",
},

    );

    
     }
    };

    
  render(){
      return <div>
      {this.observations.map((obs: any = {}) =>
    <div class="observation-container">
      <div class="observation-header"> 
      <p>{obs._region}</p>
      <p>ID: {obs._regId}</p></div>
      
      <div class="observation-metadata">
      {/*
      Observert {obs._dateOfObservation}  ikke i bruk? */}
      <span>Registrert {obs._dateOfRegistration}</span>
      <span> Oppdatert {obs._dateOfLastUpdate}</span>

         <br></br>
         <span>Ikon faretype: {obs._geoHazardName} ikon moh: {obs._moh} </span>
        <span>bruker: {obs._observer.NickName} brukerRating {obs._observer.CompetenceLevelName} {obs._observerGroupName} </span>


      </div>
      <div>
        <img class="map" src={getAssetPath("./images/mapRegobs.png")}></img>
      </div>
<div class="slideshow-container">
  <div ref={(el) => obs._observationImages[0] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <div>
  <img class="observation-images" src={obs._images[0]._imageData}></img>
  </div>
    <div class="imageInfo"> <b>Opphavsrett: </b> {obs._images[0]._copyright} <br></br>
        <p><b>Fotograf: </b> {obs._images[0]._photographer} </p>
        <p><b>Kommentar: </b> {obs._images[0]._comment} </p></div>
  </div>

  <div ref={(el) => obs._observationImages[1] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">2 / 3</div>
  <img class="observation-images" src={obs._images[1]._imageData}></img>
    <div class="text">Caption Text</div>
  </div>

  <div ref={(el) => obs._observationImages[2] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">3 / 3</div>
  <img class="observation-images" src={obs._images[2]._imageData}></img>
    <div class="text">Caption Text</div>
  </div>
  <a class="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
  <a class="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>

</div>
<br></br>

<div>
  <span class="dot 1" onClick={this.currentSlide.bind(this, 1)}></span>
  <span class="dot 2" onClick={this.currentSlide.bind(this,2)}></span>
  <span class="dot 3" onClick={this.currentSlide.bind(this, 3)}></span>
</div>


<div class="observation-content">
  
  {obs._attachments.length > 0 ?
   <h2>Faretegn</h2> : "" }
  

        {obs._attachments.map((att: Attachment = {}) =>{
            return <div> 
              
              <div> Type: {att.RegistrationName} </div>
              <div> Kommentar: {att.Comment} </div>
              <img class="observation-images" src={att.Url}></img>
              <div> Fotograf: {att.Photographer} </div>
              <div> Copyright: {att.Copyright} </div>
              <br></br>
            
</div>
        })
        
        }

{obs._avalancheActivityObs2.length > 0 ?
<h2>Skredaktivitet</h2> : "" }

{obs._avalancheActivityObs2.map((el: AvalancheActivityObs2 = {}) =>{
  
            return <div> 
              
              <div> Tid: {el.DtStart} </div>        
              <div> Antall, størrelse og skredutløser: {el.AvalCauseName} </div>
              <div> Kommentar: {el.Comment} </div>
  
</div>
        })
        
        }

  
{obs._avalancheObs ? 
<div>
<h2>Skredobservasjon</h2>
<div>Tid: {obs._avalancheObs.DtAvalancheTime}</div>
<div>Kommentar: {obs._avalancheObs.Comment}</div>
  
</div>
  
  : "" }




{obs._weather ? 

<div>
  <h2>Vær:</h2>
  <div>Nedbørstype: {obs._weather.PrecipitationName}</div>
  <div>Temperatur: {obs._weather.AirTemperature}</div>
  
   </div>

: ""}






{obs._snowSurface ? 
<div> <h2>Snødekke:</h2> Kommentar: {obs._snowSurface.Comment} </div> : ""}




      </div>
      </div>
      
    
    
    )}
    
    </div>
   
    
  }

  
  }
