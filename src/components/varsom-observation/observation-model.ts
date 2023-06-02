import * as L from 'leaflet';

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
  _snowSurfaceObservation?: SnowSurfaceObservation,
  _dataSource?: any,
  _className?: string,
  _observationImages?: HTMLElement[],
  Attachments?: Attachment[],
  _observerGroupName?: string,
  _avalancheActivityObs2?: AvalancheActivityObs2[],
  _iceCoverObs?: IceCoverObs,
  _iceThickness?: IceThickness,
  _waterLevel2?: WaterLevel2,
  _damageObs?: DamageObs[],
  _obsLocation?: ObsLocation,
  _avalancheEvalProblem?: AvalancheEvalProblem[],
  _avalancheEvalProblem2?: AvalancheEvalProblem2[],
  _avalancheEvaluation3?: AvalancheEvaluation3,
  _compressionTest?: CompressionTest[]
  _generalObservation?: GeneralObservation,
  _incident?: Incident,
  _snowProfile2?: SnowProfile2,
  _avalancheEvaluation?: AvalancheEvaluation,
  _avalancheActivityObs?: AvalancheActivityObs,
  _avalancheDangerObs?: AvalancheDangerObs[],
  _avalancheEvaluation2?: AvalancheEvaluation2,
  _snowCoverObs?: SnowCoverObs,
  _waterLevel?: WaterLevel,
  _images?: Image[],
  _dtObsTime?: string,
  _loopNumbers?: number[]
  };

      {/* can't find this in api... */ }
  export type SignsOfDanger = {
    Type: string,
    Comment: string
   }
  
   export type DangerObs = {
    GeoHazardName?: string,
    DangerSignName?: string,
    GeoHazardTID?: number,
    DangerSignTID?: number,
    Comment?: string,
    Attachments?: Attachment[]
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
    Comment?: string,
    Attachments?: Attachment[],
    Extent?: number[][],
    StartExtent?: number[][],
    StopExtent?: number[][],
   }
  
   export type LandslideObs = {
    LandSlideName?: string,
    LandSlideTriggerName?: string,
    LandSlideSizeName?: string,
    GeoHazardName?: string,
    ActivityInfluencedName?: string,
    ForecastAccurateName?: string,
    DamageExtentName?: string,
    Urls?: Url[],
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
    DtLandSlideTimeEnd?: string,
    Attachments?: Attachment[],
    Extent?: number[][],
    StartExtent?: number[][],
    StopExtent?: number[][],
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
    Attachments?: Attachment[]
    //_imageUrl?: string
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
    Comment?: string,
    Attachments?: Attachment[]
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
    IceCapacityTID: number, //Bæreevne. IceCapacityKD unique identifier
    Attachments: Attachment[]
   }
  
   export type IceThicknessLayer = {
    IceLayerName?: string,
    IceLayerTID?: number, //The IceLayerKD unique identifier
    IceLayerThickness?:	number, //($double) IceLayerThickness
    Comment?: string, //maxLength: 1024 Comment
   }
  
   export type IceThickness = {
    IceThicknessLayers: IceThicknessLayer[],
    SnowDepth: number, //($double) Mengden tørr snø oppå isen. Verdi i meter [m].
    SlushSnow: number, //($double) Mengden sørpe oppå isen. Verdi i meter [m].
    IceThicknessSum: number, //($double) Total istykkelse. I tabellen IceThicknessLayer kan individuelle islag registreres. Summen av dem skal samsvare med IceThickenssSum. Verdi i meter [m].
    IceHeightBefore: number, //($double) Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden før borring. IceHeightBefore = 0 betyr at isen er tørr og negative verdier angir overvann. Verdi i meter [m].
    IceHeightAfter: number, //($double) Isen kan være presset under vannspeilet eller flyte oppå. Her registreres denne høyden etter borring. IPositive verdier angir at vannet står nedi hulet og og negative verdier angir overvann. Verdi i meter [m].
    Comment: string //maxLength: 1024 Comment
    Attachments?: Attachment[]
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
  IsMainAttachment?: boolean, //Om bildet skal vises først i registreringen, eller ikke
  CropImage?: boolean
}
   
   export type Test = {  //can't find this in the api...
    Test: string,
    Stability: string
   }
  
   export type SnowProfile = {
      GeoHazardName: string,
      RegistrationName: string,
      Url: string,
      Photographer: string,
      Copyright: string,
      Aspect: number,
      GeoHazardTID: number,
      RegistrationTID: number,
      Comment: string,
      Attachments?: Attachment[]
   }
  
   export type LandslideProblem = {  //can't find this in the api...
    _description: string,
    _type: string,
    _estimatedLoadToTrigger: string,
    _sizeOfExpectedLandslide: string,
    _spread: string,
    _comment: string,
    _imageUrl?: string,
    Attachments?: Attachment[]
   }
  
   export type EstimateOfRisk = {  //can't find this in the api...
    degreeOfRisk: string,
    _estimateOfRisk: string,
    _development: string,
    _imageUrl?: string
   }
  
   export type SnowSurfaceObservation = {
    SnowWindDepth24: string,
    FootPenetration: string,
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
    SnowLine: number,
    Attachments?: Attachment[]
   }
  
   export type WaterLevelMeasurement = {
    WaterLevelMeasurementId?: number, //	integer($int32)
    Attachments?: Attachment[],
    WaterLevelValue?: number, //($double) maximum: 999 minimum: 0
    DtMeasurementTime?: string, //($date-time)
    Comment?: string
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
    Comment: string,
    Attachments?: Attachment[],
    Extent?: number[][],
    StartExtent?: number[][],
    StopExtent?: number[][],
   }

   export type TileProps = {
    src: string;
    top: string;
    left: string;
    id: any;
  }

  export type PolygonsToPlot = {
    totalPolygon: LatLng[];
    startPolygon: LatLng[];
    endPolygon: LatLng[];
  }
  
  export type LatLngBounds = {
    minLng: number;
    minLat: number;
    maxLng: number;
    maxLat: number;
  }
  
  // n, s, e, w in pixels from top left of world
  export type MercatorBounds = {
    n: number;
    s: number;
    e: number;
    w: number;
    zoom: number;
  }
  
  export type Graphic = {
    id: string;
    svg: string;//SafeHtml;
    style: { [styleDesc: string]: number };
  }

  export type PositionToPlot = {
    pos: ImageLocation['latLng'];
    type: 'start' | 'stop' | 'damage' | 'obs';
    px?: { x: number; y: number };
  }


   enum GeoHazard {
    Snow = 10,
    Soil = 20,
    Water = 60,
    Ice = 70,
  }



export type ImageLocation = {
  latLng: L.LatLng;
  geoHazard: GeoHazard;
  startStopLocation?: ImageLocationStartStop;
  damageLocations?: Array<L.LatLng>;
}

export type ImageLocationStartStop = {
  start?: L.LatLng;
  stop?: L.LatLng;
  totalPolygon?: L.Polygon;
  startPolygon?: L.Polygon;
  endPolygon?: L.Polygon;
}
  
   export type LatLng = {
    Latitude: number,
    Longitude: number
   } 
  
   export type DamageObs = {
    GeoHazardName?:	string,
    DamageTypeName?:	string,
    Attachments?: Attachment[],
    GeoHazardTID?: number, //	integer($int32)
    DamageTypeTID?: number, //	integer($int32)
    DamagePosition?:	LatLng,
    Comment?:	string,
   }
  
   export type Image = {
    _imageData?: any,
    _photographer?: string,
    _copyright?: string,
    _comment?: string
   }

   export type ObsLocation = {

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

 
  
   export type AvalancheEvalProblem2 = {
    AvalProbabilityName?: string,
    AvalTriggerSimpleName?: string,
    AvalCauseDepthName?: string,
    ExposedHeightComboName?:	string,
    AvalancheExtName?:	string,
    AvalCauseName?: string,
    DestructiveSizeName?: string,
    AvalPropagationName?: string,
    AvalCauseAttributeLightName?: string,
    AvalCauseAttributeThinName?:	string,
    AvalCauseAttributeSoftName?:	string,
    AvalCauseAttributeCrystalName?: string,
    AvalProbabilityTID?: number, // integer($int32) Sannsynlighet for skred. The AvalProbabilityKD unique identifier
    AvalPropagationTID?: number, //	integer($int32)
    AvalTriggerSimpleTID?: number, //	integer($int32) The AvalTriggerSimpleKD unique identifier
    AvalCauseDepthTID?: number, //	integer($int32) Hvor dypt ligger det overnevnte svake laget? The AvalCauseDepthKD unique identifier
    ValidExposition?:	string, // maxLength: 8 Velg utsatte retninger
    ExposedHeight1?: number, //	integer($int32) Øverste høyde på “utsatt høyde” symbolet.
    ExposedHeight2?: number, //	integer($int32) Nederste høyde på “utsatt høyde” symbolet.
    ExposedHeightComboTID?: number, //	integer($int32) Hvilket symbol brukes? Er utsatt tereng over ExposedHeight2 eller under den? The ExposedHeightComboKD unique identifier
    AvalancheExtTID?: number, // integer($int32) Skredtype. I appen er dette 1. felt under skredproblem. The AvalancheExtKD unique identifier
    Comment?: string, // Kommentar til skredproblemet
    AvalCauseTID?: number, // integer($int32) Hvilket svakt lag løsner skredet på? The AvalCauseKD unique identifier
    AvalCauseAttributeLightTID?: number, //	integer($int32)
    AvalCauseAttributeThinTID?: number, //	integer($int32)
    AvalCauseAttributeSoftTID?: number, //	integer($int32)
    AvalCauseAttributeCrystalTID?: number, //	integer($int32)
    DestructiveSizeTID?: number, //	integer($int32) Sannsynlig tilleggsbelastning for å utløse skred. The DestructiveSizeKD unique identifier
    Attachments?: Attachment[]
  }
  
   export type AvalancheEvaluation3 = {
    AvalancheDangerName: string,
    ForecastCorrectName: string,
    AvalancheDangerTID:	number, //integer($int32) Faregrad. The AvalancheDangerKD unique identifier
    AvalancheEvaluation: string, // maxLength: 1024 Her blir Skredfarevurdering skrevet inn. I appen blir “Utstrekning” lagt til som tekst i denne kolonnen
    AvalancheDevelopment: string, // maxLength: 1024 Her blir forventet utvikling skrevet inn.
    ForecastCorrectTID: number, //	integer($int32) Felt hvor observatøren kan fortelle de syns varslet stemmer. Valg fra liste gitt i ForecastCorrectKD. The ForecastCorrectKD unique identifier
    ForecastComment: string, //maxLength: 1024 Kommentarfelt for utdypende kommentar om varslet stemmer eller ikke.
    Attachments?: Attachment[]
  }
    
   export type CompressionTest = {
    CompressionTestName?: string,
    PropagationName?: string,
    StabilityEvalName?: string,
    ComprTestFractureName?: string,
    CompressionTestTID?: number, //	integer($int32) The CompressionTestKDV unique identifier
    TapsFracture?: number, //	integer($int32) TapsFracture
    TapsFullPropagation?: number, //	integer($int32) TapsFullPropagation
    PropagationTID?: number, //	integer($int32) The PropagationKD unique identifier
    FractureDepth?: number, //($double) maximum: 100 minimum: 0 FractureDepth
    PstX?:	number, //($double) maximum: 100 minimum: 0 PST X distance (in meters)
    PstY?:	number, //($double) maximum: 100 minimum: 0 PST Y distance (in meters)
    StabilityEvalTID?: number, // integer($int32) The StabilityEvalKD unique identifier
    ComprTestFractureTID?: number, //	integer($int32) The ComprTestFractureKD unique identifier
    RbRelease?: number, //	integer($int32) Percentage of block that released in Rutchblock test
    Comment?:	string, //Comment
    IncludeInSnowProfile?:	boolean,
    Attachments?: Attachment[]
   }
  
  
   export  type Url = {
    UrlDescription?: string //maxLength: 1024 UrlDescription
    UrlLine?: string, //maxLength: 1024 UrlLine
   }
  
   export type GeneralObservation = {
    GeoHazardName: string,
    Urls: Url[],
    GeoHazardTID: number, //	integer($int32) Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is).
    ObsComment: string, //maxLength: 2048 Selve registreringen.
    ObsHeader: string, //maxLength: 100 Overskriften (hovedpoenget).
    Comment: string, // maxLength: 1024 Kommentarfelt for å skrive utfyllende tekst
    Attachments?: Attachment[] 
  }
  
  
   export type Incident = {
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
    Attachments?: Attachment[]
   }
  
  
   export type StratProfileLayer = {
    GrainFormPrimaryTName?:	string,
    GrainFormSecondaryTName?:	string,
    HardnessTName?:	string,
    HardnessBottomTName?:	string,
    WetnessTName?:	string,
    CriticalLayerTName?:	string,
    DepthTop?:	number, //($double)
    Thickness?: number, //($double)
    GrainFormPrimaryTID?: number, //	integer($int32)
    GrainFormSecondaryTID?: number,	//integer($int32)
    GrainSizeAvg?:	number, //($double)
    GrainSizeAvgMax?:	number, //($double)
    HardnessTID?: number, //($int32)
    HardnessBottomTID?: number, //($int32)
    WetnessTID?: number, //	integer($int32)
    CriticalLayerTID?: number, //	integer($int32)
    Comment?: string,
    SortOrder?: number //	integer($int32)
   }
  
   export type StratProfile = {
    TotalDepth:	number, //($double)
    Layers: StratProfileLayer[],
    Attachments?: Attachment[]
   }
  
   export type SnowTempObs = {
    Depth?: number, //($double) maximum: 100 minimum: 0
    SnowTemp?:	number, //($double) maximum: 0 minimum: -70

   }
  
   export type SnowTemp = {
    Layers: SnowTempObs[],
    Attachments?: Attachment[]
   }
  
   export type SnowDensityLayer = {
    Depth?: number, //($double)
    Thickness?: number //($double) thickness in m
    Density?: number //($double) Density in kg/m^3
    Comment?: string,
    Weight?:	number, //($double) Weight in KG
    WaterEquivalent?: number, // ($double)
    SortOrder?: number //	integer($int32)
   }
  
   export type SnowDensity = {
    CylinderDiameter?:	number, //($double)
    TareWeight?: number, //($double)
    Comment?: string,
    Layers?: SnowDensityLayer[],
    Attachments?: Attachment[]
   }
  
   export type SnowProfile2 = {
    TotalDepth: number, //($double)
    StratProfile: StratProfile,
    Comment: string,
    IsProfileToGround: boolean,
    Exposition: number, // integer($int32)
    SlopeAngle: number, // integer($int32)
    SnowTemp:	SnowTemp,
    SnowDensity: SnowDensity[],
    ImageUrl?: string,
    Attachments?: Attachment[]
  
   }

  
   export type AvalancheEvaluation = {
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
    Comment:	string,
    Attachments?: Attachment[]
   }
  
   export type AvalancheActivityObs = {
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
    DtOffAvalancheTime: string, //($date-time)
    Attachments?: Attachment[] 
  }
  
   export type AvalancheDangerObs = {
    AvalancheDangerObsID?: number, //	integer($int32)
    DangerSignTID?: number,	// integer($int32)
    DangerSignName?:	string,
    Comment?:	string,
    Attachments?: Attachment[]
   }
  
   export type AvalancheEvalProblem = {
    AvalancheEvalProblemID?: number, //	integer($int32)
    AvalProbabilityTID?: number, //	integer($int32)
    AvalProbabilityName?:	string,
    AvalTriggerSimpleTID?: number, //	integer($int32)
    AvalTriggerSimpleName?:	string,
    DestructiveSizeExtTID?: number, //	integer($int32)
    DestructiveSizeExtName?:	string,
    AvalancheExtTID?: number, //	integer($int32)
    AvalancheExtName?:	string,
    AvalCauseTID?: number, //	integer($int32)
    AvalCauseName?:	string,
    AvalCauseExtTID?: number, //	integer($int32)
    AvalCauseExtName?:	string,
    AvalReleaseHeightTID?: number, //	integer($int32)
    AvalReleaseHeightName?:	string,
    AvalancheProbabilityAutoText?:	string,
    AvalancheProblemAutoText?:	string,
    Comment?: string,
    Attachments?: Attachment[]
   }
  
   export type AvalancheEvaluation2 = {
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
    AvalancheEvalProblems: AvalancheEvalProblem	[],
    Attachments?: Attachment[]
   }
  
   export type SnowCoverObs = {
    DepthHoarThickness:	number, // ($double) DepthHoarThickness
    CriticalLayerExists:	boolean, // CriticalLayerExists
    CriticalLayerLocation:	number, // ($double) CriticalLayerLocation
    CriticalLayerTID: number, //	integer($int32) The CriticalLayerKD unique identifier
    SnowPilotRef:	string, // SnowPilotRef
    Comment:	string, // Comment.
    CriticalLayerName:	string,
    Attachments?: Attachment[]
   }
  
   export type WaterLevel = {
    WaterLevelDescribed: string,
    WaterLevelValue:	number, // ($double)
    WaterLevelRefTID: number, //	integer($int32)
    WaterLevelRefName: 	string,
    Comment:	string,
    MeasuredDischarge:	number, //($double)
    IsRiver:	boolean,
    Attachments?: Attachment[]
   }
  

  
  