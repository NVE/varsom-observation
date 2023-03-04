
export type Observation = {
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
   _snowSurfaceObservation?: SnowSurfaceObservation
  _images?: Image[],
  _dataSource?: any,
  _className?: string,
  _observationImages: HTMLElement[],
  _attachments: Attachment[],
  _observerGroupName?: string,
  _avalancheActivityObs2?: AvalancheActivityObs2[],
  _iceCoverObs?: IceCoverObs,
  _iceThickness?: IceThickness,
  _waterLevel?: WaterLevel2,
  _damageObs?: DamageObs[]
  };

  export type SignsOfDanger = {
    _type: string,
    _comment: string
   }
  
   export type DangerObs = {
    GeoHazardName?: string,
    DangerSignName?: string,
    GeoHazardTID?: number,
    DangerSignTID?: number,
    Comment?: string
   }
  
   export type AvalancheObs = {
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
  
   export type LandslideObs = {
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
  
   export type Observer = {
    NickName?: string,
    ObserverID?: number,
    CompetenceLevelTID?: number,
    CompentenceLevelName?: string
   }
  
   export type WeatherObservation = {
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
  
   export type AvalancheActivityObs2 = {
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
  
   export type IceCoverObs = {
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
  
   export type IceThicknessLayer = {
    IceLayerName: string,
    IceLayerTID: number, //The IceLayerKD unique identifier
    IceLayerThickness:	number, //($double) IceLayerThickness
    Comment: string, //maxLength: 1024 Comment
   }
  
   export type IceThickness = {
    IceThicknessLayers: IceThicknessLayer,
    SnowDepth: number, //($double) Mengden tørr snø oppå isen. Verdi i meter [m].
    SlushSnow: number, //($double) Mengden sørpe oppå isen. Verdi i meter [m].
    IceThicknessSum: number, //($double) Total istykkelse. I tabellen IceThicknessLayer kan individuelle islag registreres. Summen av dem skal samsvare med IceThickenssSum. Verdi i meter [m].
    IceHeightBefore: number, //($double) Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden før borring. IceHeightBefore = 0 betyr at isen er tørr og negative verdier angir overvann. Verdi i meter [m].
    IceHeightAfter: number, //($double) Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden etter borring. IPositive verdier angir at vannet står nedi hulet og og negative verdier angir overvann. Verdi i meter [m].
    Comment: string //maxLength: 1024 Comment
  
   }
  
  
   export type Attachment = {
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
   
   export type Test = {
    _test: string,
    _stability: string
   }
  
  
  
   export type SnowProfile = {
    _comment: string,
    _temperature: string,
    _layering: string,
    _imageUrl?: string
   }
  
   export type LandslideProblem = {
    _description: string,
    _type: string,
    _estimatedLoadToTrigger: string,
    _sizeOfExpectedLandslide: string,
    _spread: string,
    _comment: string,
    _imageUrl?: string
   }
  
   export type EstimateOfRisk = {
    degreeOfRisk: string,
    _estimateOfRisk: string,
    _development: string,
    _imageUrl?: string
   }
  
   export type SnowSurfaceObservation = {
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
  
   export type WaterLevelMeasurement = {
    WaterLevelMeasurementId: number, //	integer($int32)
    Attachments: Attachment[],
    WaterLevelValue: number, //($double) maximum: 999 minimum: 0
    DtMeasurementTime: string, //($date-time)
    Comment: string
   }
  
   export type WaterLevel2 = {
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
  
   export type LatLng = {
    Latitude: number,
    Longitude: number
   } 
  
   export type DamageObs = {
    GeoHazardName:	string,
    DamageTypeName:	string,
    Attachments?: Attachment[],
    GeoHazardTID: number, //	integer($int32)
    DamageTypeTID: number, //	integer($int32)
    DamagePosition:	LatLng,
    Comment:	string
   }
  
   export type Image = {
    _imageData?: any,
    _photographer?: string,
    _copyright?: string,
    _comment?: string
   }
  