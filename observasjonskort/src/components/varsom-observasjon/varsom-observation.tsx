import { Component, Prop, h, State, getAssetPath } from '@stencil/core';
import { getLangKeyFromName } from '../../utils/utils';
import { getGeoHazardIdFromName } from '../../utils/utils';
import { Observation, WaterLevelMeasurement } from './observation-model';
import { AvalancheEvalProblem2 } from './observation-model';
import { DangerObs } from './observation-model';
import { AvalancheActivityObs2 } from './observation-model';
import { Attachment } from './observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';
import { getLangCodeFromName } from '../../utils/utils';


@Component({
  tag: 'varsom-observation',
  styleUrl: 'varsom-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomObservation {

  @State() slideIndex: number = 1;
  
  observations: Observation[] = []; 
  
  @Prop() regid: string;
  @Prop() language: string = "Norwegian";
  @Prop() type: string;
  @Prop() number: number = 1;

  element: HTMLElement;
  strings: any;
  
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

  
  this.strings = await getLocaleComponentStrings(getLangCodeFromName(this.language));
  
  let geoHazardId = getGeoHazardIdFromName(this.type);
  let langKey = getLangKeyFromName(this.language);
  let _data 
  if (this.regid !== undefined){
    _data = `{"LangKey": ${langKey}, "RegId": ${this.regid}}`
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
        _damageObs: [],
        _avalancheEvalProblem2: [],
        _avalancheEval3: data[i]["AvalancheEvaluation3"]
        
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
              Comment: data[i]["DangerObs"][j]["Comment"],
              DangerSignName: data[i]["DangerObs"][j]["DangerSignName"]
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
         
      <varsom-header region={obs._region} regId={obs._regId}></varsom-header>

      <varsom-metadata 
      strings={this.strings} 
      date-of-registration={obs._dateOfRegistration ? obs._dateOfRegistration : null}
      date-of-last-update={obs._dateOfLastUpdate ? obs._dateOfLastUpdate : null}
      geo-hazard-name={obs._geoHazardName ? obs._geoHazardName : null}
      moh={obs._moh ? obs._moh : null}
      nickname={obs._observer.NickName ? obs._observer.NickName : null}
      competence-level-name={obs._observer.CompetenceLevelName ? obs._observer.CompetenceLevelName :null}
      observer-group-name={obs._observerGroupName ? obs._observerGroupName : null}
      > </varsom-metadata>      
         
      {/*map*/}     
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
    <div class="imageInfo"> 
    {obs._images[0]._copyright ? 
    <div><b>Opphavsrett: </b> {obs._images[0]._copyright} <br></br> </div> : "" }
    
    {obs._images[0]._photographer ? 
     <div><b>Fotograf: </b> {obs._images[0]._photographer} <br></br></div> : ""}
        
    {obs._images[0]._comment ? 
        <div><b>Kommentar: </b> {obs._images[0]._comment} </div> : ""}

    </div>
  </div>

  <div ref={(el) => obs._observationImages[1] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">2 / 3</div>
  <img class="observation-images" src={obs._images[1]._imageData}></img>
    <div class="text"></div>
  </div>

  <div ref={(el) => obs._observationImages[2] = el as HTMLElement} class="mySlides fade">
    <div class="numbertext">3 / 3</div>
  <img class="observation-images" src={obs._images[2]._imageData}></img>
    <div class="text"></div>
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
 
        {obs._attachments.map((att: Attachment = {}) =>{
            return <varsom-attachment
              strings={this.strings}
              registration-name={att.RegistrationName ? att.RegistrationName : null}
              comment={att.Comment ? att.Comment : null}
              image-url={att.Url ? att.Url : null}
              photographer={att.Photographer ? att.Photographer : null}
              copyright={att.Copyright ? att.Copyright : null}
              ></varsom-attachment>             
        })    
}


{/* AVALANCHE ACTIVITY OBSERVATIONS */}
{obs._avalancheActivityObs2.length > 0 ?
<label>{this.strings.REGISTRATION.SNOW.AVALANCE_ACTIVITY_TITLE}</label> : "" }

{obs._avalancheActivityObs2.map((el: AvalancheActivityObs2 = {}) =>{

            return <varsom-schema
            strings={this.strings}
            dt-start={el.DtStart ? el.DtStart : null}
            aval-cause-name={el.AvalCauseName ? el.AvalCauseName : null}
            comment={el.Comment ? el.Comment : null}
            > </varsom-schema>
        })
        }

{/* AVALANCHE OBSERVATIONS */}  
{obs._avalancheObs ? 
<varsom-schema
strings={this.strings}
dt-avalanche-time={obs._avalancheObs.DtAvalancheTime ? obs._avalancheObs.DtAvalancheTime : null}
comment={obs._avalancheObs.Comment ? obs._avalancheObs.Comment : null}
></varsom-schema>  
  : "" }

{/* WATERLEVEL 2 */}

{obs._waterLevel ? 
<varsom-schema
water-astray-name={obs._waterLevel.WaterAstrayName ? obs._waterLevel.WaterAstrayName : null}
observation-timing-name={obs._waterLevel.ObservationTimingName ? obs._waterLevel.observationTimingName : null}
strings={this.strings}
measurement-type-name={obs._waterLevel.MeasurementTypeName ? obs._waterLevel.MeasurementTypeName : null}
measurement-reference-name={obs._waterLevel.MeasurementReferenceName ? obs._waterLevel.MeasurementReferenceName : null}
></varsom-schema>
: ""}


{/* VANNMÅLING  */ }
<label>vannmåling. label mangler...</label>
{obs._waterLevel ? 
<div>
{obs._waterLevel.WaterLevelMeasurement.map((el: WaterLevelMeasurement = {}) =>{
  return <varsom-schema
  dt-measurement-time={el.DtMeasurementTime ? el.DtMeasurementTime : null}
  water-level-value={el.WaterLevelValue ? el.WaterLevelValue : null}
  comment={el.Comment ? el.Comment : null}
  ></varsom-schema>
})

}
</div> : ""}



{/* WEATHER OBSERVATIONS */}
{obs._weather ? 
<varsom-schema
weather-precipitation-name={obs._weather.PrecipitationName ? obs._weather.PrecipitationName : null}
air-temperature={obs._weather.AirTemperature ? obs._weather.AirTemperature : null}
>
   </varsom-schema>
: ""}


{/* AVALANCHE EVAL PROBLEM */}



{/* AVALANCHE EVAL PROBLEM 2 */}
{obs._avalancheEvalProblem2.length > 0 ? 
<label>Skredproblem: label mangler...</label> : ""}

{obs._avalancheEvalProblem2.map((el: AvalancheEvalProblem2 = {}) => {
return <varsom-schema
aval-cause-name={el.AvalCauseName ? el.AvalCauseName : null}
avalanche-ext-name={el.AvalancheExtName ? el.AvalancheExtName : null}
aval-cause-depth-name={el.AvalCauseDepthName ? el.AvalCauseDepthName : null}
aval-cause-attribute-soft-name={el.AvalCauseAttributeSoftName ? el.AvalCauseAttributeSoftName : null}
aval-trigger-simple-name={el.AvalTriggerSimpleName ? el.AvalTriggerSimpleName : null}
destructive-size-name={el.DestructiveSizeName ? el.DestructiveSizeName : null}
aval-propagation-name={el.AvalPropagationName ? el.AvalPropagationName : null}
>
  
{/* TEGNING HER... */}
</varsom-schema>
})
}

{/* AVALANCE EVALUATION 3*/}
{obs._avalancheEval3 ? 
<div>
<label>Skredfarervurdering... label mangler</label> 
<varsom-schema
avalanche-evaluation={obs._avalancheEval3.AvalancheEvaluation ? obs._avalancheEval3.AvalancheEvaluation : null}
avalanche-development={obs._avalancheEval3.AvalancheDevelopment ? obs._avalancheEval3.AvalancheDevelopment : null}
forecast-comment={obs._avalancheEval3.forecastComment}
>
{/* TEGNING HER */}
</varsom-schema>
</div>
: ""}

{/* DAMAGE OBSERVATIONS ... ikke funnet noe data fra api...*/}


{/* DANGER OBSERVATIONS */}
{obs._dangerObs.length > 0 ?
<label>Faretegn...label mangler</label> : "" }

{obs._dangerObs.map((el: DangerObs = {}) =>{
  
            return <varsom-schema
            danger-sign-name={el.DangerSignName}
            comment={el.Comment}
            > 
          <div> Type: {el.DangerSignName} </div>        
          <div> Kommentar: {el.Comment} </div>
          </varsom-schema>
        })
        
        }

{/* COMPRESSION TEST */}



{/* SNOW SURFACE */}
{obs._snowSurfaceObservation ? 
<div>
  <label>Snødekke... label mangler</label>
<varsom-schema
  snowDepth={obs._snowSurfaceObservation.SnowDepth ? obs._snowSurfaceObservation.snowDepth : null}
  comment={obs._snowSurfaceObservation.Comment ? obs._snowSurfaceObservation.Comment : null}
  surface-water-contentName={obs._snowSurfaceObservation.SurfaceWaterContentName ? obs._snowSurfaceObservation.SurfaceWaterContentName : null}
  snow-drift-name={obs._snowSurfaceObservation.SnowDriftName ? obs._snowSurfaceObservation.SnowDriftName : null} 
  snow-surface-name={obs._snowSurfaceObservation.SnowSurfaceName ? obs._snowSurfaceObservation.SnowSurfaceName : null}
  ski-conditions-name={obs._snowSurfaceObservation.SkiConditionsName ? obs._snowSurfaceObservation.SkiConditionsName : null}
  new-snow-line={obs._snowSurfaceObservation.NewSnowLine ? obs._snowSurfaceObservation.NewSnowLine : null}
>
</varsom-schema>
</div>  
  : ""}




      </div>
      </div>
      
    
    
    )}
    
    </div>
   
    
  }

  
  }
