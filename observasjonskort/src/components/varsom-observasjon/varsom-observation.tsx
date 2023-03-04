import { Component, Prop, h, State, getAssetPath } from '@stencil/core';

import { getLangKeyFromName } from '../../utils/utils';
import { getGeoHazardIdFromName } from '../../utils/utils';


type SignsOfDanger = {
  _type: string,
  _comment: string
 }

 type DangerObs = {
  GeoHazardName?: string,
  DangerSignName?: string,
  GeoHazardTID?: number,
  DangerSignTID?: number,
  Comment?: string
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

 type Observer = {
  NickName?: string,
  ObserverID?: number,
  CompetenceLevelTID?: number,
  CompentenceLevelName?: string
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
 
 type Test = {
  _test: string,
  _stability: string
 }



 type SnowProfile = {
  _comment: string,
  _temperature: string,
  _layering: string,
  _imageUrl?: string
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

 type SnowSurfaceObservation = {
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

 type LatLng = {
  Latitude: number,
  Longitude: number
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
        _snowSurfaceObservation: data[i]["SnowSurfaceObservation"],
        //_attachments: data[i]["Attachments"],
        _images: [],
        _className: `${data[i]["RegId"]} fade`,
        _observationImages: [],
        _geoHazardName: data[i]["GeoHazardName"],
        _attachments: [],
        _weather: data[i]["WeatherObservation"],
        _observerGroupName: data[i]["ObserverGroupName"],
        _iceCoverObs: data[i]["IceCoverObs"],
        _iceThickness: data[i]["IceThickness"],
        _waterLevel: data[i]["WaterLevel2"],
        _damageObs: []
        
        
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
              Comment: data[i]["DangerObs"][j]["Comment"]
              
              //etc....
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
      
      {/* HEADER */}
      <p>{obs._region}</p>
      <p>ID: {obs._regId}</p></div>
      

      {/* METADATA */}
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


{/* IMAGE SLIDER */}
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


{/* CONTENT */}
<div class="observation-content">
  

{/* ATTACHMENTS */}
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


{/* AVALANCHE ACTIVITY OBSERVATIONS */}
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

{/* AVALANCHE OBSERVATIONS */}  
{obs._avalancheObs ? 
<div>
<h2>Skredobservasjon</h2>
<div>Tid: {obs._avalancheObs.DtAvalancheTime}</div>
<div>Kommentar: {obs._avalancheObs.Comment}</div>
  
</div>
  
  : "" }


{/* WEATHER OBSERVATIONS */}
{obs._weather ? 

<div>
  <h2>Vær:</h2>
  <div>Nedbørstype: {obs._weather.PrecipitationName}</div>
  <div>Temperatur: {obs._weather.AirTemperature}</div>
  
   </div>

: ""}


{/* AVALANCHE EVAL PROBLEM */}


{/* DAMAGE OBSERVATIONS */}


{/* DANGER OBSERVATIONS */}

{/* COMPRESSION TEST */}



{/* SNOW SURFACE */}
{obs._snowSurfaceObservation ? 
<div>
  <h2>Snødekke</h2>
   <div>Snødybde: {obs._snowSurfaceObservation.SnowDepth} </div>
   <div>Kommentar: {obs._snowSurfaceObservation.Comment}</div> 
   <div>Snøfuktighet:  {obs._snowSurfaceObservation.SurfaceWaterContentName}</div>
   <div>Snøfokk:  {obs._snowSurfaceObservation.SnowDriftName} </div>
   <div>Snødekkehardhet: {obs._snowSurfaceObservation.SnowSurfaceName} </div> 
   <div>Skiføre: {obs._snowSurfaceObservation.SkiConditionsName}</div> 
   <div>Siste døgn: {obs._snowSurfaceObservation.NewSnowLine}</div>  {/*riktig?*/ }

</div>
  
  
  : ""}




      </div>
      </div>
      
    
    
    )}
    
    </div>
   
    
  }

  
  }
