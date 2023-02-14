import { Component, Prop, h, State, Host, getAssetPath, Listen } from '@stencil/core';

import { getLangKeyFromName } from '../../utils/utils';
import { getGeoHazardIdFromName } from '../../utils/utils';


 type SignsOfDanger = {
  _type: string,
  _comment: string
 }

 type LandslideActivity = {
  _type: string,
  _time: string,
  _countSizeAndCause: string,
  _spread: string,
  _comment: string,
  _imageurl?: string
 }

 type Weather = {
  _typeOfPrecipitation: string,
  _temperature: string,
  _wind: string,
  _cloudCover: string,
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
 _weather?: Weather,
 _test?: Test,
 _snowProfile?: SnowProfile,
 _landslideProblem?: LandslideProblem,
_estimateOfRisk?: EstimateOfRisk,
_images?: any[],
_dataSource?: any
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

  showSlides(n: number){
    let i;
    let slides = this.observationImages;
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

    this.showSlides(this.slideIndex);

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
        _imageUrl: (json[i]["Attachments"][0] && json[i]["Attachments"][0] !== 0) ? json[i]["Attachments"][0]["Url"] : "", //check if image is included
        _moh: json[i]["ObsLocation"]["Height"],
        _region: json[i]["ObsLocation"]["MunicipalName"],
        _regId: json[i]["RegId"],
        _images: []
        
        }          
     );
     
        //add images for image carousel
     this.observations[i]._images.push((json[i]["Attachments"][1] && json[i]["Attachments"][1] !== 0) ? json[i]["Attachments"][1]["Url"] : "");
     this.observations[i]._images.push((json[i]["Attachments"][2] && json[i]["Attachments"][2] !== 0) ? json[i]["Attachments"][2]["Url"] : "");
     this.observations[i]._images.push((json[i]["Attachments"][3] && json[i]["Attachments"][3] !== 0) ? json[i]["Attachments"][3]["Url"] : "");

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
<div class="slideshow-container">
  <div ref={(el) => this.observationImages[0] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <div>
  <img src={obs._images[0]}></img>
  </div>
    <div class="text"> <b>Opphavsrett:</b> nve@nve.no <br></br>
        <b>Fotograf:</b> fotograf... <br></br>
        <b>Kommentar:</b> Statens vegvesen....</div>
  </div>

  <div ref={(el) => this.observationImages[1] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">2 / 3</div>
  <img src={obs._images[1]}></img>
    <div class="text">Caption Text</div>
  </div>

  <div ref={(el) => this.observationImages[2] = el as HTMLElement} class="mySlides fade">
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
        <b>Type: </b> Overvann i terreng <b>Kommentar: 
           </b> ... 
           Område: På dette stedet. Beskrivelse: Det renner vann 
          overalt
        <br></br>
        type... kommentar....__

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

  
  }
