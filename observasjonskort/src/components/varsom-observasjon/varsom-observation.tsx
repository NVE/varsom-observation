import { Component, Prop, h, State, Host, getAssetPath, Listen } from '@stencil/core';

import 'smart-webcomponents/source/components/smart.ui.carousel.js';



 type DangerObs = {
  GeoHazardName: string,
  DangerSignName: string,
  GeoHazardTID: number,
  DangerSignTID: number,
  Comment: string
 }

 type Observer = {
  NickName: string,
  ObserverId: number,
  CompetenceLevelTID: number,
  CompentenceLevelName: string
 }

 type AvalancheObs = {
  DestructiveSizeName: string,
  AvalancheTriggerName: string,
  AvalancheName: string,
  TerrainStartZoneName: string,
  AvalCauseName: string,
  DtAvalancheTime: string, //Tid da skredet gikk
  Aspect: number, //Eksposisjon
  HeightStartZone: number, //Høyde i løsneområdet
  HeightStopZone: number, //Høyde i stoppområdet
  DestructiveSizeTID: number, //Størrelse. The DestructiveSizeKD unique identifier
  AvalancheTriggerTID: number, //Skredutløser. The AvalancheTriggerKD unique identifier
  AvalancheTID: number, //Skredtype. The AvalancheKD unique identifier
  TerrainStartZoneTID: number, //Terrengtype i løsneområdet. The TerrainStartZoneKD unique identifier
  SnowLine: number, //SnowLine
  ValidExposition: string, //ValidExposition
  AvalCauseTID: number, //Skredutløser. The AvalCauseTID unique identifier
  FractureHeight: number, //Bruddhøyde
  FractureWidth: number //Bruddbredde
  Trajectory: string, //Skredbanenavn
  StartLat: number, //($double) StartLat
  StartLong: number, //($double) StartLong
  StopLat: number, //($double) StopLat
  StopLong: number //($double) StopLong
  RemotelyTriggered: boolean, //Ble skredet fjernutløst?
  Comment: string
 }

 type LandslideObs = {
  LandSlideName: string,
  LandSlideTriggerName: string,
  LandSlideSizeName: string,
  GeoHazardName: string,
  ActivityInfluencedName: string,
  ForecastAccurateName: string,
  DamageExtentName: string,
  Imageurl?: string,
  LandSlideTID: number,
  LandSlideTriggerTID: number,
  LandSlideSizeTID: number,
  Comment: string,
  GeoHazardTID: number,
  ActivityInfluencedTID: number,
  ForecastAccurateTID: number,
  DamageExtentTID: number,
  StartLat: number,
  StartLong: number,
  StopLat: number,
  StopLong: number,
  DtLandSlideTime: string,
  DtLandSlideTimeEnd: string
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

//  type LandslideProblem = {
//   _description: string,
//   _type: string,
//   _estimatedLoadToTrigger: string,
//   _sizeOfExpectedLandslide: string,
//   _spread: string,
//   _comment: string,
//   _imageUrl?: string
//  }

 type EstimateOfRisk = {
  degreeOfRisk: string,
  _estimateOfRisk: string,
  _development: string,
  _imageUrl?: string
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

 type Attachments = {
  AttachmentId: number,
GeoHazardName: string, //GeoHazard name
RegistrationName: string, //Registration name
//UrlFormats	{...}
Url: string, //Full original image url
Photographer: string, //maxLength: 60 Navn på fotograf.

Copyright: string, //maxLength: 60 Rettigheter til bilde.
Aspect: number, //Hvilken himmelretning peker bilde. Gis i grader slik gitt på kompass. 0 er nord og 90 er øst osv.

GeoHazardTID: number, //Sett naturfare. Tabellen brukes av alle naturfarer (snø, jord, vann, is). The GeoHazardKD unique identifier

RegistrationTID: number, //Hva er bildet av. Dette feltet relaterer bildet til en observasjonstype. Feks værobservasjon, faretegn, osv. The RegistrationKD unique identifier

Comment: string, //maxLength: 2048 Kommentarfelt for bildet. F.eks for å beskrive det.

AttachmentMimeType: string,
IsMainAttachment: boolean //Om bildet skal vises først i registreringen, eller ikke
 }


 type Observation = {
 _moh?: number,
 _geoHazardName?: string,
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
 _latitude: number,
 _longitude: number,
 _dangerObs?: DangerObs,
 _landslideObs?: LandslideObs,
 _avalancheObs?: AvalancheObs,
 _weather?: WeatherObservation,
 _test?: Test,
 _snowProfile?: SnowProfile,
//  _landslideProblem?: LandslideProblem,
_estimateOfRisk?: EstimateOfRisk,
_snowSurface?: SnowSurface,
_attachments?: Attachments
};


@Component({
  tag: 'varsom-observation',
  styleUrl: 'varsom-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomObservation {

  @State() regId: string;
  @State() moh: number;
  @State() imageUrl: string;
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
  @State() latitude: number;
  @State() longitude: number;
  @State() snowSurface: SnowSurface;
  // @State() affectedArea: string;
  // @State() typeOfLandslide: string;
  // @State() size?: number;
  // @State() trigger?: string;
  // @State() varsomAlertCorrect?: boolean;
  // @State() areaOfAvalanche?: string;
  // @State() terrainOfArea?: string;
  // @State() nameOfPathOfAvalanche: string;

  
  @State() observations: Observation[] = []; //when multiple observations they are stored in an array
  
  @Prop() id: string;
  @Prop() language: string = "Norwegian";
  @Prop() type: string;
  @Prop() number: number = 1;
  @Prop() carousel: Carousel;
  dataSource: any;

  componentWillLoad(){
    this.dataSource = [{ label: 'Glacier1', content: "Glacier 1", image: `${getAssetPath(`./images/isbre1.jpg`)}`},{ label: 'Glacier2',content: "Glacier 2", image: `${getAssetPath(`./images/isbre2.jpg`)}`}, { label: 'Glacier3', content: "Glacier 3", image: `${getAssetPath(`./images/isbre3.jpg`)}`}]
  }

  

  

  componentDidLoad(){

    // let avalancheDate: string;
    // let landlideStartDate
  
    getDataFromApi(this.type, this.number, this.language, this.regId).then((data => {
        
     for(let i = 0; i < this.number; i++){

      
     //source: https://pipinghot.dev/snippet/check-if-an-array-has-length-in-javascript-typescript/
      this.observations.push({
        _imageUrl: (data[i]["Attachments"][0] && data[i]["Attachments"][0] !== 0) ? data[i]["Attachments"][0]["Url"] : "", //check if image is included
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
        _dangerObs: data[i]["DangerObs"],
        _landslideObs: data[i]["LandslideObs"],
        _avalancheObs: data[i]["AvalancheObs"],
        _snowSurface: data[i]["SnowSurface"],
        _attachments: data[i]["Attachments"]

        }    
     );
     }
    }));

   
  
}
     
  render(){
    
    return <div>{this.observations.map((obs: any = {}) =>
    <div class="observation-container">
      <div class="observation-header"> 
      <p>{obs._region}</p>
      <p>ID: {obs._regId}</p></div>
      
      <div class="observation-metadata">
      
      Observert 10.5.2023. 06:50 Registrert 10.5.23. 09:15
         Oppdatert 10.5.23 09:15
         <br></br>
         Ikon faretype ... ikon moh {obs._moh}  .... 
         bruker brukerRating..... SvvDrift???
          

      </div>
<div class="observation-image-container">
      <img alt="legg inn bildekommentar..." class="observation-image" src={obs._imageUrl}></img>
      <br></br>
      <b>Opphavsrett:</b> nve@nve.no <br></br>
        <b>Fotograf:</b> fotograf... <br></br>
        <b>Kommentar:</b> Statens vegvesen...
</div>

  <Host>
    <smart-carousel dataSource = {this.dataSource}></smart-carousel>
  </Host>


<div class="observation-content">
        <h2>Faretegn</h2>
        <b>Type: </b> Overvann i terreng <b>Kommentar: 
           </b> ... 
           Område: På dette stedet. Beskrivelse: Det renner vann 
          overalt
        <br></br>
        type... kommentar....

        <h2>Skredhendelse</h2>
        <b>Tid: </b>Mellom tidspunkt og tidspunkt... <b>Skredtype: </b>flomskred
         <b> Størrelse: </b> 100m3
         <br></br>
         <b>Trigger: </b>Graving i området <b>Omfang: </b>trafikk hindret
         <br></br>
         <b>Stemte varsel på varsom.no? </b> varsel ikke kjent
         <b>Kommentar: </b>her er ytterligere beskrivelse av hendelsen

         <h2>Notater</h2>
         <b>Tekst: </b>enda mer beskrivelse under "notat"

      </div>
      </div>
      
    
    
    )}
    
    </div>
   
    
  }

 
    private getText(): string {
      return <div>id : {this.id}, type: {this.type}, number: {this.number} </div>;
    }
  
   
  }
