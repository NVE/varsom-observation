import { Component, Prop, h, State, Host, getAssetPath, Listen } from '@stencil/core';

import 'smart-webcomponents/source/components/smart.ui.carousel.js';



 type SignsOfDanger = {
  _type: string,
  _comment: string
 }

 type Observer = {
  _nickName: string,
  _observerId: number,
  _competenceLevelTID: number,
  _compentenceLevelName: string
 }

 type LandslideActivity = {
  _landSlideName: string,
  _landSlideTriggerName: string,
  _landSlideSizeName: string,
  _geoHazardName: string,
  _activityInfluencedName: string,
  _forecastAccurateName: string,
  _damageExtentName: string,
  _imageurl?: string,
  _landSlideTID: number,
  _landSlideTriggerTID: number,
  _landSlideSizeTID: number,
  _comment: string,
  _geoHazardTID: number,
  _activityInfluencedTID: number,
  _forecastAccurateTID: number,
  _damageExtentTId: number,
  _startLat: number,
  _startLong: number,
  _stopLat: number,
  _stopLong: number,
  _dtLandSlideTime: string,
  _dtLandSlideTimeEnd: string
 }

 type WeatherObservation = {
  _precipitationName: string,
  _windDirectionName: string,
  _precipitationTID: number,
  _airTemperature: number,
  _windSpeed: number,
  _windDirection: number,
  _cloudCover: number,
  _comment: string,
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

 type SnowSurface = {
  
  _surfaceWaterContentName: string,
  _snowDriftName: string,
  _snowSurfaceName: string,
  _skiConditionsTID: number,
  _skiConditionsName: string,
  _surfaceRoughnessName: string,
  _snowDepth: number,
  _newSnowDepth24: number,
  _newSnowLine: number,
  _surfaceWaterContentTID: number,
  _snowDriftTID: number,
  _snowSurfaceTID: number,
  _comment: string,
  _heightLimitLayeredSnow: number,
  _snowLine: number 
  
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
 _signsOfDanger?: SignsOfDanger,
 _landslideActivity?: LandslideActivity,
 _weather?: WeatherObservation,
 _test?: Test,
 _snowProfile?: SnowProfile,
 _landslideProblem?: LandslideProblem,
_estimateOfRisk?: EstimateOfRisk
_snowSurface?: SnowSurface
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
        _landslideActivity: data[i]["LandslideActivity"],
        _snowSurface: data[i]["SnowSurface"]

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
