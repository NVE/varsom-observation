import { Component, Prop, h, State, Host, getAssetPath } from '@stencil/core';
import { format, getDataFromApi } from '../../utils/utils';
import {Carousel, CarouselProperties, CarouselDisplayMode} from 'smart-webcomponents/source/typescript/smart.elements';

import 'smart-webcomponents/source/components/smart.ui.carousel.js';


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
_estimateOfRisk?: EstimateOfRisk
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
  
  @State() observations: Observation[] = []; //when multiple observations they are stored in an array
  
  @Prop() id: string;
  @Prop() language: string = "Norwegian";
  @Prop() type: string;
  @Prop() number: number = 1;
  
  carousel: Carousel;
  dataSource: any;

  
componentWillLoad(){
  this.dataSource = [{ label: 'Glacier1', image: `${getAssetPath(`./images/isbre3.jpg`)}`, content: "..."},{ label: 'Glacier2', image: `${getAssetPath(`./images/isbre2.jpg`)}`, content: ",,,"}, { label: 'Glacier3', image: `${getAssetPath(`./images/isbre3.jpg`)}`, content: "..."}]
  
  
}


  componentDidLoad(){
  
    getDataFromApi(this.type, this.number, this.language, this.regId).then((data => {
        
     for(let i = 0; i < this.number; i++){
     //source: https://pipinghot.dev/snippet/check-if-an-array-has-length-in-javascript-typescript/
      this.observations.push({
        _imageUrl: (data[i]["Attachments"][0] && data[i]["Attachments"][0] !== 0) ? data[i]["Attachments"][0]["Url"] : "", //check if image is included
        _moh: data[i]["ObsLocation"]["Height"],
        _region: data[i]["ObsLocation"]["MunicipalName"],
        _regId: data[i]["RegId"]
        }    
     );
     }
    }));

    
  
}
     
  render(){
    
  
  
    return <Host>{this.observations.map((obs: any = {}) =>
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
          .........

      </div>
<div class="observation-image-container">
      <img alt="legg inn bildekommentar..." class="observation-image" src={obs._imageUrl}></img>
      <br></br>
      <b>Opphavsrett:</b> nve@nve.no <br></br>
        <b>Fotograf:</b> fotograf... <br></br>
        <b>Kommentar:</b> Statens vegvesen....
</div>..
<div>

<smart-carousel size="large" dataSource = {this.dataSource}></smart-carousel>

  {/* <jeep-carousel  data = '{"slides":[
  {"slide":["<img src=\"images/isbre1.jpg\"></img>"]},
  {"slide":["<img class=\"image\" src=\"../../../../assets/images/elephantl.jpg\"></img>"]},
  {"slide":["<img class=\"image\" src=\"../../../../assets/images/tigerl.jpg\"></img>"]},
  {"slide":["<img class=\"image\" src=\"../../../../assets/images/lionl.jpg\"></img>"]},
  {"slide":["<img class=\"image\" src=\"../../../../assets/images/eaglel.jpg\"></img>"]},
  {"slide":["<img class=\"image\" src=\"../../../../assets/images/eagleheadl.jpg\"></img>"]}
  ]}'
  cstyle = ".image {  width: auto;max-width: 100%;height: auto;max-height: 100%;}"
  options = '{"direction":"horizontal",
  "autoplay":{"delay":5000,"disableOnInteraction":false,"stopOnLastSlide":true},
  "pagination":{"el":".swiper-pagination","type":"bullets","clickable":true},
  "navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"}}'>


  </jeep-carousel> */}
  
  
  
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
    
    </Host>
   
    
  }

 
    private getText(): string {
      return <div>id : {this.id}, type: {this.type}, number: {this.number} </div>;
    }
  
   
  }
