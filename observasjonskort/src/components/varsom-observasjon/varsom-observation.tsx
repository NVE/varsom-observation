import { Component, Prop, h, State, Host, getAssetPath, Listen } from '@stencil/core';

import { getLangKeyFromName } from '../../utils/utils';
import { getGeoHazardIdFromName } from '../../utils/utils';


type SignsOfDanger = {
  _type: string,
  _comment: string
 }
/*
 type Observer = {
  _nickName: string,
  _observerId: number,
  _competenceLevelTID: number,
  _compentenceLevelName: string
 }
*/
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
/*
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
*/
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
 _observer?: string,
 _typeOfWeather?: string
 _signsOfDanger?: SignsOfDanger,
 _landslideActivity?: LandslideActivity,
 _weather?: WeatherObservation,
 _test?: Test,
 _snowProfile?: SnowProfile,
 _landslideProblem?: LandslideProblem,
_estimateOfRisk?: EstimateOfRisk,
_images?: any[],
_dataSource?: any,
_className?: string,
_observationImages: HTMLElement[]
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
  let data 
  if (this.regId !== undefined){
    data = `{"LangKey": ${langKey}, "RegId": ${this.regId}}`
  } else
  data = `{"NumberOfRecords": ${this.count}, "SelectedGeoHazards": [${geoHazardId}], "LangKey": ${langKey}}`
    let response = await fetch('https://api.regobs.no/v5/Search', {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let json = await response.json();
        
     for(let i = 0; i < this.count; i++){
    
     //source: https://pipinghot.dev/snippet/check-if-an-array-has-length-in-javascript-typescript/
      this.observations.push({
        _moh: json[i]["ObsLocation"]["Height"],
        _region: json[i]["ObsLocation"]["MunicipalName"],
        _regId: json[i]["RegId"],
        _images: [],
        _className: `${json[i]["RegId"]} fade`,
        _observationImages: []
        
        }          
     );
     
        //add images for image carousel
     this.observations[i]._images.push((json[i]["Attachments"][0] && json[i]["Attachments"][0] !== 0) ? json[i]["Attachments"][0]["Url"] : "");
     this.observations[i]._images.push((json[i]["Attachments"][1] && json[i]["Attachments"][1] !== 0) ? json[i]["Attachments"][1]["Url"] : "");
     this.observations[i]._images.push((json[i]["Attachments"][2] && json[i]["Attachments"][2] !== 0) ? json[i]["Attachments"][2]["Url"] : "");

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
      
      Observert 10.5.2022. 06:50 Registrert 10.5.23. 09:15.
         Oppdatert 10.5.23 09:15
         <br></br>
         Ikon faretype ... ikon moh {obs._moh}  .... 
         bruker brukerRating..... SvvDrift???..

      </div>
      <div>
        <img class="map" src={getAssetPath("./images/mapRegobs.png")}></img>
      </div>
<div class="slideshow-container">
  <div ref={(el) => obs._observationImages[0] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <div>
  <img class="observation-images" src={obs._images[0]}></img>
  </div>
    <div class="text"> <b>Opphavsrett:</b> nve@nve.no <br></br>
        <b>Fotograf:</b> fotograf... <br></br>
        <b>Kommentar:</b> Statens vegvesen....</div>
  </div>

  <div ref={(el) => obs._observationImages[1] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">2 / 3</div>
  <img src={obs._images[1]}></img>
    <div class="text">Caption Text</div>
  </div>

  <div ref={(el) => obs._observationImages[2] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">3 / 3</div>
  <img src={obs._images[2]}></img>
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
        <h2>Faretegn</h2>
        <b>Type: </b> Fersk vindtransportert snø 
           <br></br>
           <b>Kommentar:</b> 
           Område: På dette stedet. Beskrivelse: Det renner vann 
          overalt
        <br></br>
        <b>type</b> Rask temp. stigning
        <br></br>
        <b>kommentar:</b> -4C ved bilen kl.12 ....

        <h2>Skredaktivitet</h2> 
        <b>Tid: </b> 10. feb. i løpet av dagen 
         <b> Antall, størrelse og skredutløser: </b> Ingen skredaktivitet 
         <br></br>

         <h2>Vær</h2>
         <b>Nedbørstype:</b> ikke nedbør 
         <b>Temperatur: </b> 3,5 C 
         <b>Vind: </b> 12 m/s fra øst
         <b>Skydekke: </b> 100 % skyer
         <br></br>
          <b>Kommentar: </b> Ingen nedbør og noe begrenset med vind frem til ca. 14.

<br></br>

<h2>Snødekke</h2>

<b>Snøfokk: </b>kraftig snøfokk 
<b>Siste døgn: </b> 20 cm
<b>Snøgrenser: </b> Nysnøgrense på 0 moh
<br></br>
<b>Snødekkehardhet:</b> Vindpakket hard
<b>Snøfuktighet:</b> tørr
<br></br>
<b>Kommentar: </b>Stort sett vindpakket hard der jeg var 
<br></br>
<img class="observation-images" src={obs._images[0]}></img>

      </div>
      </div>
      
    
    
    )}
    
    </div>
   
    
  }

  
  }
