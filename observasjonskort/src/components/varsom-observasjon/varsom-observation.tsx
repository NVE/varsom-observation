import { Component, Prop, h, State, getAssetPath } from '@stencil/core';
import { getLangKeyFromName } from '../../utils/utils';
import { getGeoHazardIdFromName } from '../../utils/utils';
import { Observation } from './observation-model';
import { AvalancheActivityObs2 } from './observation-model';
import { Attachment } from './observation-model';


@Component({
  tag: 'varsom-observation',
  styleUrl: 'varsom-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomObservation {

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
        _images: [],
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
        _avalancheActivityObs: data[i]["AvalancheActivityObs"],
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

        //add compressionTest
        if (data[i]["CompressionTest"].length > 0){
          for (let j = 0; j < data[i]["CompressionTest"].length; j++){
            this.observations[i]._compressionTest.push({
              CompressionTestName: data[i]["CompressionTest"][j]["CompressionTestName"],
              PropagationName: data[i]["CompressionTest"][j]["PropagationName"],
              StabilityEvalName: data[i]["CompressionTest"][j]["StabilityEvalName"],
              ComprTestFractureName: data[i]["CompressionTest"][j]["CompressionTestFractureName"],
              CompressionTestTID: data[i]["CompressionTest"][j]["CompressionTestTID"], //	integer($int32) The CompressionTestKDV unique identifier
              TapsFracture: data[i]["CompressionTest"][j]["TapsFracture"], //	integer($int32) TapsFracture
              TapsFullPropagation: data[i]["CompressionTest"][j]["TapsFullPropagation"], //	integer($int32) TapsFullPropagation
              PropagationTID: data[i]["CompressionTest"][j]["PropagationTID"], //	integer($int32) The PropagationKD unique identifier
              FractureDepth: data[i]["CompressionTest"][j]["FractureDepth"], //($double) maximum: 100 minimum: 0 FractureDepth
              PstX:	data[i]["CompressionTest"][j]["PstX"], //($double) maximum: 100 minimum: 0 PST X distance (in meters)
              PstY:	data[i]["CompressionTest"][j]["PstY"], //($double) maximum: 100 minimum: 0 PST Y distance (in meters)
              StabilityEvalTID: data[i]["CompressionTest"][j]["StabilityEvalTID"], // integer($int32) The StabilityEvalKD unique identifier
              ComprTestFractureTID: data[i]["CompressionTest"][j]["ComprTestFractureTID"], //	integer($int32) The ComprTestFractureKD unique identifier
              RbRelease: data[i]["CompressionTest"][j]["RbRelease"], //	integer($int32) Percentage of block that released in Rutchblock test
              Comment:	data[i]["CompressionTest"][j]["Comment"], //Comment
              IncludeInSnowProfile:	data[i]["CompressionTest"][j]["IncludeInSnowProfile"]
              
            })
          }
        }


        //add avalancheDangerObs
        if (data[i]["AvalancheDangerObs"].length > 0){
          for (let j = 0; j < data[i]["AvalancheDangerObs"].length; j++){
            this.observations[i]._avalancheDangerObs.push({
              AvalancheDangerObsID: data[i]["AvalancheDangerObs"][j]["AvalancheDangerObsID"],
              DangerSignTID: data[i]["AvalancheDangerObs"][j]["DangerSignTID"],
              DangerSignName:	data[i]["AvalancheDangerObs"][j]["DangerSignName"],
              Comment:	data[i]["AvalancheDangerObs"][j]["Comment"],
            
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
