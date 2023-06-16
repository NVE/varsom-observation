import { Component, Prop, h, State } from '@stencil/core';
import { getLangKeyFromName } from '../../utils/utils';
import { getGeoHazardIdFromName } from '../../utils/utils';
import { AvalancheDangerObs, AvalancheEvalProblem, CompressionTest, DamageObs, Observation, WaterLevelMeasurement } from './observation-model';
import { AvalancheEvalProblem2 } from './observation-model';
import { DangerObs } from './observation-model';
import { AvalancheActivityObs2 } from './observation-model';
import { Attachment } from './observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'varsom-observation',
  styleUrl: 'varsom-observation.css',
  shadow: false,
})
export class VarsomObservation {

  @State() slideIndex: number = 1;
  
  observations: Observation[] = []; 
  
  @Prop() regid: string;
  @Prop() language: string = "nb";
  @Prop() type: string;
  @Prop() number: number = 1;
  @Prop() json: any;
  @Prop() version: string;


  element: HTMLElement;
  strings: any;
  
  //carousel: Carousel;
  dataSource: any;

  observationImages: HTMLElement[] = [];


  @Prop() count: number = 1;

  addAttachments(object: any, url: string, comment: string, photographer: string, copyright: string){
 
    object.Attachments.push({
      Comment: comment,
      Photographer: photographer,
      Copyright: copyright,
      Url: url
    }
    )
  }
  
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
      if (slides[i])
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      //dots[i].className = dots[i].className.replace(" active", "");
    }
    if ( slides[this.slideIndex-1] != null)
      slides[this.slideIndex-1].style.display = "block";
    if ( slides[this.slideIndex] != null)
    slides[this.slideIndex].style.display = "block";
    //dots[this.slideIndex-1].className += " active";
  }



  async componentDidRender(){
    for (let i = 0; i < this.observations.length; i++){
      var obs = this.observations[i];
      for (let j = 0; j < this.observationImages.length; j++){
        obs._observationImages[j].style.display = "none"
      }
    }
    for (let k = 0; k < this.observations.length; k++){
    this.showSlides(this.slideIndex, this.observations[k]);
    }

    }

    

  async componentWillLoad(){

  this.strings = await getLocaleComponentStrings(this.language);
  let data;
  let geoHazardId = getGeoHazardIdFromName(this.type);
  let langKey = getLangKeyFromName(this.language);
  let _data; 
  if (!(this.json && this.json.length > 2)){
  if (this.regid.length !== 0){
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
  data = await response.json();
  
}else {
  data = JSON.parse(this.json);
}

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
        _landslideObs: data[i]["LandSlideObs"],
        _avalancheObs: data[i]["AvalancheObs"],
        _avalancheActivityObs2: [],
        _snowSurfaceObservation: data[i]["SnowSurfaceObservation"],
        Attachments: [],
        _images: [],
        _loopNumbers: [],
        _className: `${data[i]["RegId"]} fade`,
        _observationImages: [],
        _geoHazardName: data[i]["GeoHazardName"],
        _weather: data[i]["WeatherObservation"],
        _observerGroupName: data[i]["ObserverGroupName"],
        _iceCoverObs: data[i]["IceCoverObs"],
        _iceThickness: data[i]["IceThickness"],
        _waterLevel2: data[i]["WaterLevel2"],
        _damageObs: [],
        _obsLocation: data[i]["ObsLocation"],
        _avalancheEvalProblem2: [],
        _avalancheEvalProblem: [],
        _avalancheEvaluation3: data[i]["AvalancheEvaluation3"],
        _compressionTest: [],
        _generalObservation: data[i]["GeneralObservation"],
        _incident: data[i]["Incident"],
        _snowProfile: data[i]["SnowProfile"],
        _snowProfile2: data[i]["SnowProfile2"],
        _avalancheEvaluation: data[i]["AvalancheEvaluation"],
        _avalancheActivityObs: data[i]["AvalancheActivityObs"],
        _avalancheDangerObs: [],
        _avalancheEvaluation2: data[i]["AvalancheEvaluation2"],
        _snowCoverObs: data[i]["SnowCoverObs"],
        _waterLevel: data[i]["WaterLevel"],  
        _dtObsTime: data[i]["DtObsTime"]
        }          
     );
     
   
    
     //add imageUrl for snowProfile2
     for (let i = 0; i < this.observations.length; i ++){
      for (let j = 0; j < data[i]["Summaries"].length; j ++){
        if (data[i]["Summaries"][j]["RegistrationTID"] == 36){
          if (data[i]["Summaries"][j]["AdaptiveElements"].length > 2){
            if (this.observations[i]._snowProfile2)
            this.observations[i]._snowProfile2.ImageUrl = data[i]["Summaries"][j]["AdaptiveElements"][2]["svgUrl"];
          }
        }
      }
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
              Comment: data[i]["AvalancheActivityObs2"][j]["Comment"],
              Attachments: []
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
              Comment: data[i]["DangerObs"][j]["Comment"],
              Attachments: []
              
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
              DamageTypeTID: data[i]["DamageObs"][j]["DamageTypeTID"],
              DamagePosition:	data[i]["DamageObs"][j]["DamagePosition"],
              Comment: data[i]["DamageObs"][j]["Comment"],
              Attachments: []
            })
          }
        }

         //add avalancheEvalProblem
         if (data[i]["AvalancheEvalProblem"].length > 0){
          for (let j = 0; j < data[i]["AvalancheEvalProblem"].length; j++){
            this.observations[i]._avalancheEvalProblem.push({
              AvalProbabilityName: data[i]["AvalancheEvalProblem"][j]["AvalProbabilityName"],
              AvalProbabilityTID: data[i]["AvalancheEvalProblem"][j]["AvalProbabilityTID"],
              AvalancheEvalProblemID: data[i]["AvalancheEvalProblem"][j]["AvalancheEvalProblemID"],
              AvalTriggerSimpleTID: data[i]["AvalancheEvalProblem"][j]["AvalTriggerSimpleTID"],
              AvalTriggerSimpleName: data[i]["AvalancheEvalProblem"][j]["AvalTriggerSimpleName"],
              DestructiveSizeExtTID: data[i]["AvalancheEvalProblem"][j]["DestructiveSizeExtTID"],
              DestructiveSizeExtName: data[i]["AvalancheEvalProblem"][j]["DestructiveSizeExtName"],
              AvalancheExtTID: data[i]["AvalancheEvalProblem"][j]["AvalancheExtTID"],
              AvalancheExtName: data[i]["AvalancheEvalProblem"][j]["AvalancheExtName"],
              AvalCauseTID: data[i]["AvalancheEvalProblem"][j]["AvalCauseTID"],
              AvalCauseName: data[i]["AvalancheEvalProblem"][j]["AvalCauseName"],
              AvalCauseExtTID: data[i]["AvalancheEvalProblem"][j]["AvalCauseExtTID"],
              AvalCauseExtName: data[i]["AvalancheEvalProblem"][j]["AvalCauseExtName"],
              AvalReleaseHeightTID: data[i]["AvalancheEvalProblem"][j]["AvalReleaseHeightTID"],
              AvalReleaseHeightName: data[i]["AvalancheEvalProblem"][j]["AvalReleaseHeightName"],
              AvalancheProbabilityAutoText: data[i]["AvalancheEvalProblem"][j]["AvalancheProbabilityAutoText"],
              AvalancheProblemAutoText: data[i]["AvalancheEvalProblem"][j]["AvalancheProblemAutoText"],
              Comment: data[i]["AvalancheEvalProblem"][j]["Comment"],
              Attachments: []
            })
          }
        }

        //add avalancheEvalProblem2
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
              DestructiveSizeTID: data[i]["AvalancheEvalProblem2"][j]["DestructiveSizeTID"],
              Attachments: []
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
              IncludeInSnowProfile:	data[i]["CompressionTest"][j]["IncludeInSnowProfile"],
              Attachments: []
              
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
              Attachments: []
        
            })
          }
        }

    //initialize attachment arrays in objects
    for (let k = 0; k < this.observations.length; k++){
    this.observations[k]._snowProfile2 && !this.observations[k]._snowProfile2.Attachments ? this.observations[k]._snowProfile2.Attachments = [] : "";
    this.observations[k]._iceThickness && !this.observations[k]._iceThickness.Attachments ? this.observations[k]._iceThickness.Attachments = [] : "";
    this.observations[k]._iceCoverObs && !this.observations[k]._iceCoverObs.Attachments ? this.observations[k]._iceCoverObs.Attachments = [] : "";
    this.observations[k]._snowSurfaceObservation && !this.observations[k]._snowSurfaceObservation.Attachments ? this.observations[k]._snowSurfaceObservation.Attachments = [] : "";
    this.observations[k]._weather && !this.observations[k]._weather.Attachments ? this.observations[k]._weather.Attachments = [] : "";
    this.observations[k]._generalObservation && !this.observations[k]._generalObservation.Attachments ? this.observations[k]._generalObservation.Attachments = [] : "";
    this.observations[k]._waterLevel2  && !this.observations[k]._waterLevel2.Attachments ? this.observations[k]._waterLevel2.Attachments = [] : "";
    this.observations[k]._waterLevel && !this.observations[k]._waterLevel.Attachments ? this.observations[k]._waterLevel.Attachments = [] : "";
    this.observations[k]._landslideObs && !this.observations[k]._landslideObs.Attachments ? this.observations[k]._landslideObs.Attachments = [] : "";
    this.observations[k]._avalancheObs && !this.observations[k]._avalancheObs.Attachments ? this.observations[k]._avalancheObs.Attachments = [] : "";
    this.observations[k]._snowCoverObs && !this.observations[k]._snowCoverObs.Attachments ? this.observations[k]._snowCoverObs.Attachments = [] : "";
    this.observations[k]._incident && !this.observations[k]._incident.Attachments ? this.observations[k]._incident.Attachments = [] : "";
    this.observations[k]._avalancheActivityObs && !this.observations[k]._avalancheActivityObs.Attachments ? this.observations[k]._avalancheActivityObs.Attachments = [] : "";
    this.observations[k]._avalancheEvaluation2 && !this.observations[k]._avalancheEvaluation2.Attachments ? this.observations[k]._avalancheEvaluation2.Attachments = [] : "";
    this.observations[k]._avalancheEvaluation3 && !this.observations[k]._avalancheEvaluation3.Attachments ? this.observations[k]._avalancheEvaluation3.Attachments = [] : "";
    this.observations[k]._avalancheEvaluation && !this.observations[k]._avalancheEvaluation.Attachments ? this.observations[k]._avalancheEvaluation.Attachments = [] : "";
  
}
     //add attachments to objects
for(let j = 0; j < 50; j++){  //max 50 attachments
if(data[i]["Attachments"][j] && data[i]["Attachments"][j] !== 0){

  //objects
if (data[i]["Attachments"][j].RegistrationTID == 51){
  if (this.observations[i]._iceCoverObs)
  this.addAttachments(this.observations[i]._iceCoverObs, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
} 
if (data[i]["Attachments"][j].RegistrationTID == 50){
  if (this.observations[i]._iceThickness)
  this.addAttachments(this.observations[i]._iceThickness, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
} 
if (data[i]["Attachments"][j].RegistrationTID == 34){
  if (this.observations[i]._snowProfile2)
  this.addAttachments(this.observations[i]._snowProfile2, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
} 
if (data[i]["Attachments"][j].RegistrationTID == 37){
  if (this.observations[i]._snowProfile2)
  this.addAttachments(this.observations[i]._snowProfile2, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
} 
if (data[i]["Attachments"][j].RegistrationTID == 22){
  if (this.observations[i]._snowSurfaceObservation)
  this.addAttachments(this.observations[i]._snowSurfaceObservation, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 36){
  if (this.observations[i]._snowProfile2)
  this.addAttachments(this.observations[i]._snowProfile2, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 21){
  if (this.observations[i]._weather)
  this.addAttachments(this.observations[i]._weather, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 23){
  if (this.observations[i]._snowCoverObs)
  this.addAttachments(this.observations[i]._snowCoverObs, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 62){
  if (this.observations[i]._waterLevel2)
  this.addAttachments(this.observations[i]._waterLevel2, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 71){
  if (this.observations[i]._landslideObs)
  this.addAttachments(this.observations[i]._landslideObs, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 10){
  if (this.observations[i]._generalObservation)
  this.addAttachments(this.observations[i]._generalObservation, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 11){
  if (this.observations[i]._incident)
  this.addAttachments(this.observations[i]._incident, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 27){
  if (this.observations[i]._avalancheActivityObs)
  this.addAttachments(this.observations[i]._avalancheActivityObs, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 30){
  if (this.observations[i]._avalancheEvaluation2)
  this.addAttachments(this.observations[i]._avalancheEvaluation2, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 31){
  if (this.observations[i]._avalancheEvaluation3)
  this.addAttachments(this.observations[i]._avalancheEvaluation3, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 28){
  if (this.observations[i]._avalancheEvaluation)
  this.addAttachments(this.observations[i]._avalancheEvaluation, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 26){
  if (this.observations[i]._avalancheObs)
  this.addAttachments(this.observations[i]._avalancheObs, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 61){
  if (this.observations[i]._waterLevel)
  this.addAttachments(this.observations[i]._waterLevel, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == 62){
  if (this.observations[i]._waterLevel2)
  this.addAttachments(this.observations[i]._waterLevel2, data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}
if (data[i]["Attachments"][j].RegistrationTID == null){
  this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
}


////arrays of objects
if (data[i]["Attachments"][j].RegistrationTID == 13){
  if (this.observations[i]._dangerObs.length > 0)
  this.addAttachments(this.observations[i]._dangerObs[0], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  }
  if (data[i]["Attachments"][j].RegistrationTID == 25){
    if (this.observations[i]._compressionTest.length > 0)
    this.addAttachments(this.observations[i]._compressionTest[0], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
    else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  }
  if (data[i]["Attachments"][j].RegistrationTID == 32){
    if (this.observations[i]._avalancheEvalProblem2.length > 0)
    this.addAttachments(this.observations[i]._avalancheEvalProblem2[0], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
    else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  }
  if (data[i]["Attachments"][j].RegistrationTID == 24){
    if (this.observations[i]._avalancheDangerObs.length > 0)
    this.addAttachments(this.observations[i]._avalancheDangerObs[0], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
    else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  }
  if (data[i]["Attachments"][j].RegistrationTID == 33){
    if (this.observations[i]._avalancheActivityObs2.length > 0)
    this.addAttachments(this.observations[i]._avalancheActivityObs2[0], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
    else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  }
  if (data[i]["Attachments"][j].RegistrationTID == 14){
    if (this.observations[i]._damageObs.length > 0)
    this.addAttachments(this.observations[i]._damageObs[0], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
    else this.addAttachments(this.observations[i], data[i]["Attachments"][j]["Url"], data[i]["Attachments"][j]["Comment"], data[i]["Attachments"][j]["Photographer"], data[i]["Attachments"][j]["Copyright"]);
  }
  

  }
} 

        //add images for image carousel
        for (let m = 0; m < data[i]["Attachments"].length; m++){ 
          
          this.observations[i]._images.push(
            {
              _imageData: (data[i]["Attachments"][m] && data[i]["Attachments"][m] !== 0) ? data[i]["Attachments"][m]["Url"] : null,
              _copyright: (data[i]["Attachments"][m] && data[i]["Attachments"][m] !== 0) ? data[i]["Attachments"][m]["Copyright"] : null,
              _photographer: (data[i]["Attachments"][m] && data[i]["Attachments"][m] !== 0) ? data[i]["Attachments"][m]["Photographer"] : null,
              _comment: (data[i]["Attachments"][m] && data[i]["Attachments"][m] !== 0) ? data[i]["Attachments"][m]["Comment"] : null,
          }
        );
          
        if(m == 0 || m % 2 == 0)
        this.observations[i]._loopNumbers.push(m);
      
      }

     }
    };


  
  render(){
      return <div>
      {this.observations.map((obs: any = {}) =>
    <div class="observation-container">
         
      <varsom-header 
      region={obs._region} 
      regId={obs._regId}
      ></varsom-header>

      <varsom-metadata 
      strings={this.strings} 
      date-of-registration={obs._dateOfRegistration ? obs._dateOfRegistration : null}
      date-of-last-update={obs._dateOfLastUpdate ? obs._dateOfLastUpdate : null}
      geo-hazard-name={obs._geoHazardName ? obs._geoHazardName : null}
      moh={obs._moh ? obs._moh : null}
      nickname={obs._observer.NickName ? obs._observer.NickName : null}
      competence-level-name={obs._observer.CompetenceLevelName ? obs._observer.CompetenceLevelName :null}
      observer-group-name={obs._observerGroupName ? obs._observerGroupName : null}
      shortVersion={this.version==="short" ? this.version : null}
      > </varsom-metadata>      
         
      
{/* STATIC MAP */}
{this.version!=="short" ?
<varsom-static-map
observation={obs}
avalanche={obs._avalancheObs ? true : false}
allowZoom={true}
></varsom-static-map>
  : 
<div class="container-for-image-slider">
<varsom-image-slider
_images={obs._images} 
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
observation={obs}
  ></varsom-image-slider>
</div>
 }

{/* CONTENT */}
<div class="observation-content">

{obs._damageObs.map((el: DamageObs = {}) =>{

            return <varsom-damage-obs
            strings={this.strings}
            shortVersion={this.version==="short" ? this.version : null}
            DamageTypeName={el.DamageTypeName ? el.DamageTypeName : null}
            GeoHazardName={el.GeoHazardName ? el.GeoHazardName : null}
            GeoHazardTID={el.GeoHazardTID ? el.GeoHazardTID : null}
            DamageTypeTID={el.DamageTypeTID ? el.DamageTypeTID : null}
            DamagePosition={el.DamagePosition ? el.DamagePosition : null}
            Attachments={el.Attachments ? el.Attachments : null}
   
           > </varsom-damage-obs>
        })
        }

{obs._damageObs.length > 0 ?
<div class="border"></div> :"" }
  
{obs._avalancheActivityObs2.length > 0 ?
<varsom-label
label={this.strings.Observations.AvalancheActivityObs2.ObsName ? this.strings.Observations.AvalancheActivityObs2.ObsName : "Skredaktivitet"}
></varsom-label>
: ""}


{obs._avalancheActivityObs2.map((el: AvalancheActivityObs2 = {}) =>{

            return <varsom-avalanche-activity-obs2
            strings={this.strings}
            shortVersion={this.version==="short" ? this.version : null}
            dt-start={el.DtStart ? el.DtStart : null}
            aval-cause-name={el.AvalCauseName ? el.AvalCauseName : null}
            EstimatedNumName={el.EstimatedNumName ? el.EstimatedNumName : null}
            ExposedHeightComboName={el.ExposedHeightComboName ? el.ExposedHeightComboName : null}
            AvalancheExtName={el.AvalancheExtName ? el.AvalancheExtName : null}
            AvalCauseName={el.AvalCauseName ? el.AvalCauseName : null}
            AvalTriggerSimpleName={el.AvalTriggerSimpleName ? el.AvalTriggerSimpleName : null}
            AvalPropagationName={el.AvalPropagationName ? el.AvalPropagationName : null}
            DestructiveSizeName={el.DestructiveSizeName ? el.DestructiveSizeName : null}
            EstimatedNumTID={el.EstimatedNumTID ? el.EstimatedNumTID : null}
            DtStart={el.DtStart ? el.DtStart : null}
            DtEnd={el.DtEnd ? el.DtEnd : null}
            ValidExposition={el.ValidExposition ? el.ValidExposition : null}
            ExposedHeight1={el.ExposedHeight1 ? el.ExposedHeight1 : null}
            ExposedHeight2={el.ExposedHeight2 ? el.ExposedHeight2 : null}
            ExposedHeightComboTID={el.ExposedHeightComboTID ? el.ExposedHeightComboTID : null}
            AvalancheExtTID={el.AvalancheExtTID ? el.AvalancheExtTID : null}
            AvalCauseTID={el.AvalCauseTID ? el.AvalCauseTID : null}
            DestructiveSizeTID={el.DestructiveSizeTID ? el.DestructiveSizeTID : null}
            AvalPropagationTID={el.AvalPropagationTID ? el.AvalPropagationTID : null}
            Comment={el.Comment ? el.Comment : null}
            Attachments={el.Attachments ? el.Attachments : null}
            

            > </varsom-avalanche-activity-obs2>
        })
        }

{obs._avalancheActivityObs2.length > 0 ?
<div class="border"></div> :"" }

{obs._avalancheActivityObs ? 
<varsom-avalanche-activity-obs
header={this.strings.Observations.AvalancheTID}
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
AvalancheActivityObsID={obs._avalancheActivityObs.AvalancheActivityObsID ? obs._avalancheActivityObs.AvalancheActivityObsID : null}
Aspect={obs._avalancheActivityObs.Aspect ? obs._avalancheActivityObs.Aspect : null}
HeigthStartZone={obs._avalancheActivityObs.HeigthStartZone ? obs._avalancheActivityObs.HeigthStartZone : null}
DtAvalancheTime={obs._avalancheActivityObs.DtAvalancheTime ? obs._avalancheActivityObs.DtAvalancheTime : null}
DestructiveSizeTID={obs._avalancheActivityObs.DestructiveSizeTID ? obs._avalancheActivityObs.DestructiveSizeTID : null}
DestructiveSizeName={obs._avalancheActivityObs.DestructiveSizeName ? obs._avalancheActivityObs.DestructiveSizeName : null}
EstimatedNumTID={obs._avalancheActivityObs.EstimatedNumTID ? obs._avalancheActivityObs.EstimatedNumTID : null}
EstimatedNumName={obs._avalancheActivityObs.EstimatedNumName ? obs._avalancheActivityObs.EstimatedNumName : null}
AvalancheTID={obs._avalancheActivityObs.AvalancheTID ? obs._avalancheActivityObs.AvalancheTID : null}
AvalancheName={obs._avalancheActivityObs.AvalancheName ? obs._avalancheActivityObs.AvalancheName : null}
AvalancheTriggerTID={obs._avalancheActivityObs.AvalancheTriggerTID ? obs._avalancheActivityObs.AvalancheActivityObsID : null}
AvalancheTriggerName={obs._avalancheActivityObs.AvalancheTriggerName ? obs.AvalancheTriggerTID.AvalancheTriggerName : null}
TerrainStartZoneTID={obs._avalancheActivityObs.TerrainStartZoneTID ? obs._avalancheActivityObs.TerrainStartZoneTID : null}
TerrainStartZoneName={obs._avalancheActivityObs.TerrainStartZoneName ? obs._avalancheActivityObs.TerrainStartZoneName : null}
SnowLine={obs._avalancheActivityObs.SnowLine ? obs._avalancheActivityObs.SnowLine : null}
SnowLineName={obs._avalancheActivityObs.SnowLineName ? obs._avalancheActivityObs.SnowLineName : null}
DtOffAvalancheTime={obs._avalancheActivityObs.DtOffAvalancheTime ? obs._avalancheActivityObs.DtOffAvalancheTime : null}
Attachments={obs._avalancheActivityObs.Attachments ? obs._avalancheActivityObs.Attachments : null}
></varsom-avalanche-activity-obs>
: ""}


{obs._avalancheObs ? 
<varsom-avalanche-obs
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
DestructiveSizeName={obs._avalancheObs.DestructiveSizeName ? obs._avalancheObs.DestructiveSizeName : null}
AvalancheTriggerName={obs._avalancheObs.AvalancheTriggerName ? obs._avalancheObs.AvalancheTriggerName : null}
AvalancheName={obs._avalancheObs.AvalancheName ? obs._avalancheObs.AvalancheName : null}
TerrainStartZoneName={obs._avalancheObs.TerrainStartZoneName ? obs._avalancheObs.TerrainStartZoneName : null}
AvalCauseName={obs._avalancheObs.AvalCauseName ? obs._avalancheObs.AvalCauseName : null}
DtAvalancheTime={obs._avalancheObs.DtAvalancheTime ? obs._avalancheObs.DtAvalancheTime : null}
Aspect={obs._avalancheObs.Aspect ? obs._avalancheObs.Aspect : null}
HeightStartZone={obs._avalancheObs.HeightStartZone ? obs._avalancheObs.HeightStartZone : null}
HeightStopZone={obs._avalancheObs.HeightStopZone ? obs._avalancheObs.HeightStopZone : null}
DestructiveSizeTID={obs._avalancheObs.DestructiveSizeTID ? obs._avalancheObs.DestructiveSizeTID : null}
AvalancheTriggerTID={obs._avalancheObs.AvalancheTriggerTID ? obs._avalancheObs.AvalancheTriggerTID : null}
AvalancheTID={obs._avalancheObs.AvalancheTID ? obs._avalancheObs.AvalancheTID : null}
TerrainStartZoneTID={obs._avalancheObs.TerrainStartZoneTID ? obs._avalancheObs.TerrainStartZoneTID : null}
SnowLine={obs._avalancheObs.SnowLine ? obs._avalancheObs.SnowLine : null}
ValidExposition={obs._avalancheObs.ValidExposition ? obs._avalancheObs.ValidExposition : null}
AvalCauseTID={obs._avalancheObs.AvalCauseTID ? obs._avalancheObs.AvalCauseTID : null}
FractureHeight={obs._avalancheObs.FractureHeight ? obs._avalancheObs.FractureHeight : null}
FractureWidth={obs._avalancheObs.FractureWidth ? obs._avalancheObs.FractureWidth : null}
Trajectory={obs._avalancheObs.Trajectory ? obs._avalancheObs.Trajectory : null}
StartLat={obs._avalancheObs.StartLat ? obs._avalancheObs.StartLat : null}
StartLong={obs._avalancheObs.StartLong ? obs._avalancheObs.StartLong : null}
StopLat={obs._avalancheObs.StopLat ? obs._avalancheObs.StopLat : null}
StopLong={obs._avalancheObs.StopLong ? obs._avalancheObs.StopLong : null}
RemotelyTriggered={obs._avalancheObs.RemotelyTriggered ? obs._avalancheObs.RemotelyTriggered : null}
Comment={obs._avalancheObs.Comment ? obs._avalancheObs.Comment : null}
Attachments={obs._avalancheObs.Attachments ? obs._avalancheObs.Attachments : null}
Observation={obs}
></varsom-avalanche-obs>  
  : "" }


{obs._waterLevel ? 
<varsom-water-level
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
WaterLevelDescribed={obs._waterLevel.WaterLevelDescribed ? obs._waterLevel.WaterLevelDescribed : null}
WaterLevelValue={obs._waterLevel.WaterLevelValue ? obs._waterLevel.WaterLevelValue : null}
WaterLevelRefTID={obs._waterLevel.WaterLevelRefTID ? obs._waterLevel.WaterLevelRefTID : null}
WaterLevelRefName={obs._waterLevel.WaterLevelRefName ? obs._waterLevel.WaterLevelRefName : null}
MeasuredDischarge={obs._waterLevel.MeasuredDischarge ? obs._waterLevel.MeasuredDischarge : null}
IsRiver={obs._waterLevel.IsRiver ? obs._waterLevel.IsRiver : null}
Attachments={obs._waterLevel.Attachments ? obs._waterLevel.Attachments : null}
></varsom-water-level>
: ""}

{obs._waterLevel2 ? 
<varsom-water-level2
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
WaterLevelStateName={obs._waterLevel2.WaterLevelStateName ? obs._waterLevel2.WaterLevelStateName : null}
WaterAstrayName={obs._waterLevel2.WaterAstrayName ? obs._waterLevel2.WaterAstrayName : null}
ObservationTimingName={obs._waterLevel2.ObservationTimingName ? obs._waterLevel2.ObservationTimingName : null}
MeasurementReferenceName={obs._waterLevel2.MeasurementReferenceName ? obs._waterLevel2.MeasurementReferenceName  : null}
MeasurementTypeName={obs._waterLevel2.MeasurementTypeName ? obs._waterLevel2.MeasurementTypeName : null}
WaterLevelMethodName={obs._waterLevel2.WaterLevelMethodName ? obs._waterLevel2.WaterLevelMethodName  : null}
MarkingReferenceName={obs._waterLevel2.MarkingReferenceName ? obs._waterLevel2.MarkingReferenceName : null}
MarkingTypeName={obs._waterLevel2.MarkingTypeName ? obs._waterLevel2.MarkingTypeName : null}
WaterLevelMeasurement={obs._waterLevel2.WaterLevelMeasurement ? obs._waterLevel2.WaterLevelMeasurement : null}
WaterAstrayTID={obs._waterLevel2.WaterAstrayTID ? obs._waterLevel2.WaterAstrayTID : null}
ObservationTimingTID={obs._waterLevel2.ObservationTimingTID ? obs._waterLevel2.ObservationTimingTID : null}
MeasurementReferenceTID={obs._waterLevel2.MeasurementReferenceTID ? obs._waterLevel2.MeasurementReferenceTID : null}
MeasurementTypeTID={obs._waterLevel2.MeasurementTypeTID ? obs._waterLevel2.MeasurementTypeTID : null}
WaterLevelMethodTID={obs._waterLevel2.WaterLevelMethodTID ? obs._waterLevel2.WaterLevelMethodTID : null}
MarkingReferenceTID={obs._waterLevel2.MarkingReferenceTID ? obs._waterLevel2.MarkingReferenceTID : null}
WaterLevelStateTID={obs._waterLevel2.WaterLevelStateTID ? obs._waterLevel2.WaterLevelStateTID : null}
MarkingTypeTID={obs._waterLevel2.MarkingTypeTID ? obs._waterLevel2.MarkingTypeTID : null}
MeasuringToolDescription={obs._waterLevel2.MeasuringToolDescription ? obs._waterLevel2.MeasuringToolDescription : null}
Attachments={obs._waterLevel2.Attachments ? obs._waterLevel2.Attachments : null}

></varsom-water-level2>
: ""}



{obs._waterLevel ? 
<div>
<varsom-label
label={this.strings.Observations.WaterLevel2.WaterMeasurement ? this.strings.Observations.WaterLevel2.WaterMeasurement : "Water measurement"}> 
</varsom-label>
{obs._waterLevel.WaterLevelMeasurement.map((el: WaterLevelMeasurement = {}) =>{
  return <varsom-water-measurement
  strings={this.strings}
  shortVersion={this.version==="short" ? this.version : null}
  dt-measurement-time={el.DtMeasurementTime ? el.DtMeasurementTime : null}
  water-level-value={el.WaterLevelValue ? el.WaterLevelValue : null}
  Comment={el.Comment ? el.Comment : null}
  ></varsom-water-measurement>
})

}
</div> : ""}





{obs._iceThickness ? 
<varsom-ice-thickness
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
regId={obs._regId}
ObsLocationId={obs._obsLocation.ObsLocationId}
DtObsTime={obs._dtObsTime}
LocationName={obs._obsLocation.LocationName}
Comment={obs._iceThickness.Comment ? obs._iceThickness.Comment : null}
IceThicknessLayers={obs._iceThickness.IceThicknessLayers ? obs._iceThickness.IceThicknessLayers : null}
SnowDepth={obs._iceThickness.SnowDepth ? obs._iceThickness.SnowDepth : null}
SlushSnow={obs._iceThickness.SlushSnow ? obs._iceThickness.SlushSnow : null}
IceThicknessSum={obs._iceThickness.IceThicknessSum ? obs._iceThickness.IceThicknessSum : null}
IceHeightBefore={obs._iceThickness.IceHeightBefore ? obs._iceThickness.IceHeightBefore : null}
IceHeightAfter={obs._iceThickness.IceHeightAfter ? obs._iceThickness.IceHeightAfter : null}
Attachments={obs._iceThickness.Attachments ? obs._iceThickness.Attachments : null}
>
</varsom-ice-thickness>
: ""}

{obs._landslideObs ? 
<varsom-landslide-observation
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
LandSlideName={obs._landslideObs.LandSlideName ? obs._landslideObs.LandSlideName : null}
LandSlideTriggerName={obs._landslideObs.LandSlideTriggerName ? obs._landslideObs.LandSlideTriggerName : null}
ActivityInfluencedName={obs._landslideObs.ActivityInfluencedName ? obs._landslideObs.ActivityInfluencedName : null}
GeoHazardName={obs._landslideObs.GeoHazardName ? obs._landslideObs.GeoHazardName : null}
ForecastAccurateName={obs._landslideObs.ForecastAccurateName ? obs._landslideObs.ForecastAccurateName : null}
Urls={obs._landslideObs.Urls ? obs._landslideObs.Urls : null}
DamageExtentName={obs._landslideObs.DamageExtentName ? obs._landslideObs.DamageExtentName : null}
LandSlideTID={obs._landslideObs.LandSlideTID ? obs._landslideObs.LandSlideTID : null}
LandSlideTriggerTID={obs._landslideObs.LandSlideTriggerTID ? obs._landslideObs.LandSlideTriggerTID : null}
Comment={obs._landslideObs.Comment ? obs._landslideObs.Comment : null}
LandSlideSizeName={obs._landslideObs.LandSlideSizeName ? obs._landslideObs.LandSlideSizeName : null}
GeoHazardTID={obs._landslideObs.GeoHazardTID ? obs._landslideObs.GeoHazardTID : null}
ActivityInfluencedTID={obs._landslideObs.ActivityInfluencedTID ? obs._landslideObs.ActivityInfluencedTID : null}
ForecastAccurateTID={obs._landslideObs.ForecastAccurateTID ? obs._landslideObs.ForecastAccurateTID : null}
DamageExtentTID={obs._landslideObs.DamageExtentTID ? obs._landslideObs.DamageExtentTID : null}
StartLat={obs._landslideObs.StartLat ? obs._landslideObs.StartLat : null}
StopLat={obs._landslideObs.StopLat ? obs._landslideObs.StopLat : null}
StartLong={obs._landslideObs.StartLong ? obs._landslideObs.StartLong : null}
StopLong={obs._landslideObs.StopLong ? obs._landslideObs.StopLong : null}
DtLandSlideTimeEnd={obs._landslideObs.DtLandSlideTimeEnd ? obs._landslideObs.DtLandSlideTimeEnd : null}
DtLandSlideTime={obs._landslideObs.DtLandSlideTime ? obs._landslideObs.DtLandSlideTime : null}
LandSlideSizeTID={obs._landslideObs.LandSlideSizeTID ? obs._landslideObs.LandSlideSizeTID : null}
Attachments={obs._landslideObs.Attachments ? obs._landslideObs.Attachments : null}

></varsom-landslide-observation>
: ""}

{/* WEATHER OBSERVATIONS */}
{obs._weather ? 
<varsom-weather-observation
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
PrecipitationName={obs._weather.PrecipitationName ? obs._weather.PrecipitationName : null}
WindDirectionName={obs._weather.WindDirectionName ? obs._weather.WindDirectionName : null}
PrecipitationTID={obs._weather.PrecipitationTID ? obs._weather.PrecipitationTID : null}
WindSpeed={obs._weather.WindSpeed ? obs._weather.WindSpeed : null}
CloudCover={obs._weather.CloudCover ? obs._weather.CloudCover : null}
AirTemperature={obs._weather.AirTemperature ? obs._weather.AirTemperature : null}
Attachments={obs._weather.Attachments ? obs._weather.Attachments : null}
>
   </varsom-weather-observation>
: ""}


{/* AVALANCHE EVAL PROBLEM */}
{obs._avalancheEvalProblem.length > 0 ? 
<varsom-label
label={this.strings.Observations.AvalancheEvalProblem2.ObsName ? this.strings.Observations.AvalancheEvalProblem2.ObsName : "Skreproblem"}> 
</varsom-label>
: ""}

{obs._avalancheEvalProblem.map((el: AvalancheEvalProblem = {}) => {
return <varsom-avalanche-eval-problem
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
AvalancheProblemAutoText={el.AvalancheProblemAutoText ? el.AvalancheProblemAutoText : null}
AvalancheEvalProblemID={el.AvalancheEvalProblemID ? el.AvalancheEvalProblemID : null} 
AvalProbabilityTID={el.AvalProbabilityTID ? el.AvalProbabilityTID : null} 
AvalProbabilityName={el.AvalProbabilityName ? el.AvalProbabilityName : null} 
AvalTriggerSimpleTID={el.AvalTriggerSimpleTID ? el.AvalTriggerSimpleTID : null} 
AvalTriggerSimpleName={el.AvalTriggerSimpleName ? el.AvalTriggerSimpleName : null} 
DestructiveSizeExtTID={el.DestructiveSizeExtTID ? el.DestructiveSizeExtTID : null} 
DestructiveSizeExtName={el.DestructiveSizeExtName ? el.DestructiveSizeExtName : null} 
AvalancheExtTID={el.AvalancheExtTID ? el.AvalancheExtTID : null} 
AvalancheExtName={el.AvalancheExtName ? el.AvalancheExtName : null} 
AvalCauseTID={el.AvalCauseTID ? el.AvalCauseTID : null} 
AvalCauseName={el.AvalCauseName ? el.AvalCauseName : null} 
AvalCauseExtTID={el.AvalCauseExtTID ? el.AvalCauseExtTID : null} 
AvalReleaseHeightTID={el.AvalReleaseHeightTID ? el.AvalReleaseHeightTID : null} 
AvalReleaseHeightName={el.AvalReleaseHeightName ? el.AvalReleaseHeightName : null} 
AvalancheProbabilityAutoText={el.AvalancheProbabilityAutoText ? el.AvalancheProbabilityAutoText : null} 
Attachments={el.Attachments ? el.Attachments : null} 

>
</varsom-avalanche-eval-problem>
})
}
{obs._avalancheEvalProblem.length > 0 ?
<div class="border"></div> :"" }


{/* AVALANCHE EVAL PROBLEM 2 */}
{obs._avalancheEvalProblem2.length > 0 ? 
  <varsom-label
label={this.strings.Observations.AvalancheEvalProblem2.ObsName ? this.strings.Observations.AvalancheEvalProblem2.ObsName : "Skreproblem"}> 
</varsom-label>
: ""}

{obs._avalancheEvalProblem2.map((el: AvalancheEvalProblem2 = {}) => {
return <varsom-avalanche-eval-problem2
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
aval-probability-tid={el.AvalProbabilityTID ? el.AvalProbabilityTID : null}
aval-probability-name={el.AvalProbabilityName ? el.AvalProbabilityName : null}
aval-cause-depth-tid={el.AvalCauseDepthTID ? el.AvalCauseDepthTID : null}
valid-exposition={el.ValidExposition ? el.ValidExposition : null}
exposed-height1={el.ExposedHeight1 ? el.ExposedHeight1 : null}
exposed-height2={el.ExposedHeight2 ? el.ExposedHeight2 : null}
exposed-height-combo-tid={el.ExposedHeightComboTID ? el.ExposedHeightComboTID : null}
exposed-height-combo-name={el.ExposedHeightComboName ? el.ExposedHeightComboName : null}
avalanche-ext-tid={el.AvalancheExtTID ? el.AvalancheExtTID : null}
avalanche-ext-name={el.AvalancheExtName ? el.AvalancheExtName : null}
aval-cause-tid={el.AvalCauseTID ? el.AvalCauseTID : null}
aval-cause-name={el.AvalCauseName ? el.AvalCauseName : null}
aval-cause-attribute-light-tid={el.AvalCauseAttributeLightTID ? el.AvalCauseAttributeLightTID : null}
aval-cause-attribute-light-name={el.AvalCauseAttributeLightName ? el.AvalCauseAttributeLightName : null}
aval-cause-attribute-thin-tid={el.AvalCauseAttributeThinTID ? el.AvalCauseAttributeThinTID : null}
aval-cause-attribute-thin-name={el.AvalCauseAttributeThinName ? el.AvalCauseAttributeThinName : null}
aval-cause-attribute-soft-tid={el.AvalCauseAttributeSoftTID ? el.AvalCauseAttributeSoftTID : null} 
aval-cause-attribute-soft-name={el.AvalCauseAttributeSoftName ? el.AvalCauseAttributeSoftName : null}
aval-cause-attribute-crystal-tidID={el.AvalCauseAttributeSoftTID ? el.AvalCauseAttributeSoftTID : null} 
aval-cause-attribute-crystal-name={el.AvalCauseAttributeCrystalName ? el.AvalCauseAttributeCrystalName : null} 
destructive-size-tid={el.DestructiveSizeTID ? el.DestructiveSizeTID : null} 
aval-trigger-simple-tid={el.AvalTriggerSimpleTID ? el.AvalTriggerSimpleTID : null} 
aval-trigger-simple-name={el.AvalTriggerSimpleName ? el.AvalTriggerSimpleName : null}
destructive-size-name={el.DestructiveSizeName ? el.DestructiveSizeName : null}
aval-propagation-tid={el.AvalPropagationTID ? el.AvalPropagationTID : null}
AvalPropagationName={el.AvalPropagationName ? el.AvalPropagationName : null}
Comment={el.Comment ? el.Comment : null}
Attachments={el.Attachments ? el.Attachments : null}

>
</varsom-avalanche-eval-problem2>
})
}
{obs._avalancheEvalProblem2.length > 0 ?
<div class="border"></div> :"" }

{obs._snowCoverObs ? 
<varsom-snow-cover-obs
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
CriticalLayerExists={obs._snowCoverObs.CriticalLayerExists ? obs._snowCoverObs.CriticalLayerExists : null}
CriticalLayerLocation={obs._snowCoverObs.CriticalLayerLocation ? obs._snowCoverObs.CriticalLayerLocation : null}
CriticalLayerTID={obs._snowCoverObs.CriticalLayerTID ? obs._snowCoverObs.CriticalLayerTID : null}
SnowPilotRef={obs._snowCoverObs.SnowPilotRef ? obs._snowCoverObs.SnowPilotRef : null}
CriticalLayerName={obs._snowCoverObs.CriticalLayerName ? obs._snowCoverObs.CriticalLayerName : null}
Comment={obs._snowCoverObs.Comment ? obs._snowCoverObs.Comment : null}
Attachments={obs._snowCoverObs.Attachments ? obs._snowCoverObs.Attachments : null}

></varsom-snow-cover-obs>
: ""}


{obs._avalancheEvaluation ? 
<div>
<varsom-label label={this.strings.Observations.AvalancheEvaluation.ObsName}></varsom-label> 
<varsom-avalanche-evaluation
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
RegID={obs._avalancheEvaluation.RegID ? obs._avalancheEvaluation.RegID : null}
CanPublish={obs._avalancheEvaluation.CanPublish ? obs._avalancheEvaluation.CanPublish : null}
AvalancheDangerTID={obs._avalancheEvaluation.AvalancheDangerTID ? obs._avalancheEvaluation.AvalancheDangerTID : null}
AvalancheDangerName={obs._avalancheEvaluation.AvalancheDangerName ? obs._avalancheEvaluation.AvalancheDangerName : null}
ValidExposition={obs._avalancheEvaluation.ValidExposition ? obs._avalancheEvaluation.ValidExposition : null}
ValidHeightRelative={obs._avalancheEvaluation.ValidHeightRelative ? obs._avalancheEvaluation.ValidHeightRelative : null}
ValidHeightFrom={obs._avalancheEvaluation.ValidHeightFrom ? obs._avalancheEvaluation.ValidHeightFrom : null}
ValidHeigtTo={obs._avalancheEvaluation.ValidHeigtTo ? obs._avalancheEvaluation.ValidHeigtTo : null}
AvalancheProblemTID1={obs._avalancheEvaluation.AvalancheProblemTID1 ? obs._avalancheEvaluation.AvalancheProblemTID1 : null}
AvalancheProblemName1={obs._avalancheEvaluation.AvalancheProblemName1 ? obs._avalancheEvaluation.AvalancheProblemName1 : null}
AvalancheProblemTID2={obs._avalancheEvaluation.AvalancheProblemTID2 ? obs._avalancheEvaluation.AvalancheProblemTID2 : null}
AvalancheProblemName2={obs._avalancheEvaluation.AvalancheProblemName2 ? obs._avalancheEvaluation.AvalancheProblemName2 : null}
AvalancheProblemTID3={obs._avalancheEvaluation.AvalancheProblemTID3 ? obs._avalancheEvaluation.AvalancheProblemTID3 : null}
AvalancheProblemName3={obs._avalancheEvaluation.AvalancheProblemName3 ? obs._avalancheEvaluation.AvalancheProblemName3 : null}
AvalancheEvaluation1={obs._avalancheEvaluation.AvalancheEvaluation1 ? obs._avalancheEvaluation.AvalancheEvaluation1 : null}
Comment={obs._avalancheEvaluation.Comment ? obs._avalancheEvaluation.Comment : null}
Attachments={obs._avalancheEvaluation.Attachments ? obs._avalancheEvaluation.Attachments : null}
></varsom-avalanche-evaluation>
</div>
: ""}



{/* AVALANCE EVALUATION 3*/}
{obs._avalancheEvaluation2 ? 
<div>
<varsom-label label={this.strings.Observations.AvalancheEvaluation.ObsName}></varsom-label> 
<varsom-avalanche-evaluation2
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
AvalancheDangerName={obs._avalancheEvaluation2.AvalancheDangerName ? obs._avalancheEvaluation2.AvalancheDangerName : null}
ValidExposition={obs._avalancheEvaluation2.ValidExposition ? obs._avalancheEvaluation2.ValidExposition : null}
Comment={obs._avalancheEvaluation2.Comment ? obs._avalancheEvaluation2.Comment : null}
AvalancheEvaluation={obs._avalancheEvaluation2.AvalancheEvaluation ? obs._avalancheEvaluation2.AvalancheEvaluation : null}
AvalancheDevelopment={obs._avalancheEvaluation2.AvalancheDevelopment ? obs._avalancheEvaluation2.AvalancheDevelopment : null}
ExposedHeight1={obs._avalancheEvaluation2.ExposedHeight1 ? obs._avalancheEvaluation2.ExposedHeight1 : null}
ExposedHeight2={obs._avalancheEvaluation2.ExposedHeight2 ? obs._avalancheEvaluation2.ExposedHeight2 : null}
ExposedHeightComboTID={obs._avalancheEvaluation2.ExposedHeightComboTID ? obs._avalancheEvaluation2.ExposedHeightComboTID : null}
ExposedHeightComboName={obs._avalancheEvaluation2.ExposedHeightComboName ? obs._avalancheEvaluation2.ExposedHeightComboName : null}
ExposedClimateTID={obs._avalancheEvaluation2.ExposedClimateTID ? obs._avalancheEvaluation2.ExposedClimateTID : null}
ExposedClimateName={obs._avalancheEvaluation2.ExposedClimateName ? obs._avalancheEvaluation2.ExposedClimateName : null}
AvalancheDangerTID={obs._avalancheEvaluation2.AvalancheDangerTID ? obs._avalancheEvaluation2.AvalancheDangerTID : null}
AvalancheEvalProblems={obs._avalancheEvaluation2.AvalancheEvalProblems ? obs._avalancheEvaluation2.AvalancheEvalProblems : null}
Attachments={obs._avalancheEvaluation2.Attachments ? obs._avalancheEvaluation2.Attachments : null}
>
</varsom-avalanche-evaluation2>
</div>
: ""}

{/* AVALANCE EVALUATION 3*/}
{obs._avalancheEvaluation3 ? 
<div>
<varsom-label label={this.strings.Observations.AvalancheEvaluation.ObsName}></varsom-label> 
<varsom-avalanche-evaluation3
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
avalanche-evaluation={obs._avalancheEvaluation3.AvalancheEvaluation ? obs._avalancheEvaluation3.AvalancheEvaluation : null}
avalanche-development={obs._avalancheEvaluation3.AvalancheDevelopment ? obs._avalancheEvaluation3.AvalancheDevelopment : null}
forecast-comment={obs._avalancheEvaluation3.forecastComment ? obs._avalancheEvaluation3.forecastComment : null}
AvalancheDangerName={obs._avalancheEvaluation3.AvalancheDangerName ? obs._avalancheEvaluation3.AvalancheDangerName : null}
AvalancheDangerTID={obs._avalancheEvaluation3.AvalancheDangerTID ? obs._avalancheEvaluation3.AvalancheDangerTID : null}
ForecastCorrectName={obs._avalancheEvaluation3.ForecastCorrectName ? obs._avalancheEvaluation3.ForecastCorrectName : null}
ForecastCorrectTID={obs._avalancheEvaluation3.ForecastCorrectTID ? obs._avalancheEvaluation3.ForecastCorrectTID : null}
Attachments={obs._avalancheEvaluation3.Attachments ? obs._avalancheEvaluation3.Attachments : null}

>
</varsom-avalanche-evaluation3>
</div>
: ""}

{/* DAMAGE OBSERVATIONS*/}




{/* SNOW PROFILE */}

{obs._snowProfile ?
<varsom-snow-profile
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
GeoHazardName={obs._snowProfile.GeoHazardName ? obs._snowProfile.GeoHazardName : null}
RegistrationName={obs._snowProfile.RegistrationName ? obs._snowProfile.RegistrationName : null}
Url={obs._snowProfile.Url ? obs._snowProfile.Url : null}
Photographer={obs._snowProfile.Photographer ? obs._snowProfile.Photographer : null}
Copyright={obs._snowProfile.Copyright ? obs._snowProfile.Copyright : null}
Aspect={obs._snowProfile.Aspect ? obs._snowProfile.Aspect : null}
GeoHazardTID={obs._snowProfile.GeoHazardTID ? obs._snowProfile.GeoHazardTID : null}
RegistrationTID={obs._snowProfile.RegistrationTID ? obs._snowProfile.RegistrationTID : null}
Comment={obs._snowProfile.Comment ? obs._snowProfile.Comment : null}
Attachments={obs._snowProfile.Attachments ? obs._snowProfile.Attachments : null}
></varsom-snow-profile>
:""}

{obs._snowProfile2 ?
<varsom-snow-profile2
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
TotalDepth={obs._snowProfile2.TotalDepth ? obs._snowProfile2.TotalDepth : null}
StratProfile={obs._snowProfile2.StratProfile ? obs._snowProfile2.StratProfile : null}
Comment={obs._snowProfile2.Comment ? obs._snowProfile2.Comment : null}
IsProfileToGround={obs._snowProfile2.IsProfileToGround ? obs._snowProfile2.IsProfileToGround : null}
Exposition={obs._snowProfile2.Exposition ? obs._snowProfile2.Exposition : null}
SlopeAngle={obs._snowProfile2.SlopeAngle ? obs._snowProfile2.SlopeAngle : null}
SnowTemp={obs._snowProfile2.SnowTemp ? obs._snowProfile2.SnowTemp : null}
SnowDensity={obs._snowProfile2.SnowDensity ? obs._snowProfile2.SnowDensity : null}
ImageUrl={obs._snowProfile2.ImageUrl ? obs._snowProfile2.ImageUrl : null}
RegId={obs._regId ? obs._regId : null}
Attachments={obs._snowProfile2.Attachments ? obs._snowProfile2.Attachments : null}
></varsom-snow-profile2>
:""}




{/* DANGER OBSERVATIONS */}
{obs._dangerObs.length > 0 ?
<varsom-label
label={this.strings.Observations.DangerObs.ObsName ? this.strings.Observations.DangerObs.ObsName : "Faretegn"}
></varsom-label> : "" }

{obs._dangerObs.map((el: DangerObs = {}) =>{
  
            return <varsom-danger-obs
            strings={this.strings}
            shortVersion={this.version==="short" ? this.version : null}
            GeoHazardName={el.GeoHazardName ? el.GeoHazardName : null}
            Comment={el.Comment ? el.Comment : null}
            DangerSignName={el.DangerSignName ? el.DangerSignName : null}
            GeoHazardTID={el.GeoHazardTID ? el.GeoHazardTID : null}
            DangerSignTID={el.DangerSignTID ? el.DangerSignTID : null}
            Attachments={el.Attachments ? el.Attachments : null}
            > 
      
          </varsom-danger-obs>
        })
        
        }

{obs._dangerObs.length > 0 ?
<div class="border"></div> :"" }

        {/* AVALANCHE DANGER OBSERVATIONS */}
{obs._avalancheDangerObs.length > 0 ?
<varsom-label
label={this.strings.Observations.AvalancheDangerObs.ObsName ? this.strings.Observations.AvalancheDangerObs.ObsName : "Fartegn"}
></varsom-label> : "" }

{obs._avalancheDangerObs.map((el: AvalancheDangerObs = {}) =>{
  
            return <varsom-avalanche-danger-obs
            strings={this.strings}
            shortVersion={this.version==="short" ? this.version : null}
            AvalancheDangerObsID={el.AvalancheDangerObsID ? el.AvalancheDangerObsID : null}
            DangerSignTID={el.DangerSignTID ? el.DangerSignTID : null}
            DangerSignName={el.DangerSignName ? el.DangerSignName : null}
            Comment={el.Comment ? el.Comment : null}
            Attachments={el.Attachments ? el.Attachments : null}
            > 
      
          </varsom-avalanche-danger-obs>
        })
        
        }
{obs._avalancheDangerObs.length > 0 ?
<div class="border"></div> :"" }


{/* COMPRESSION TEST */}
{obs._compressionTest.length > 0 ?
<varsom-label
label={this.strings.Observations.CompressionTest.ObsName ? this.strings.Observations.CompressionTest.ObsName : "Stabilitetstest"}
></varsom-label> :"" }

{obs._compressionTest.map((el: CompressionTest = {}) =>{
  
            return <varsom-compression-test
            strings={this.strings}
            shortVersion={this.version==="short" ? this.version : null}
            CompressionTestTID={el.CompressionTestTID ? el.CompressionTestTID : null}
            TapsFracture={el.TapsFracture ? el.TapsFracture : null}
            TapsFullPropagation={el.TapsFullPropagation ? el.TapsFullPropagation : null}
            PropagationTID={el.PropagationTID ? el.PropagationTID : null}
            PropagationName={el.PropagationName ? el.PropagationName : null}
            FractureDepth={el.FractureDepth ? el.FractureDepth : null}
            PstX={el.PstX ? el.PstX : null}
            PstY={el.PstY ? el.PstY : null}
            RbRelease={el.RbRelease ? el.RbRelease : null}
            StabilityEvalTID={el.StabilityEvalTID ? el.StabilityEvalTID : null}
            StabilityEvalName={el.StabilityEvalName ? el.StabilityEvalName : null}
            ComprTestFractureTID={el.ComprTestFractureTID ? el.ComprTestFractureTID : null}
            ComprTestFractureName={el.ComprTestFractureName ? el.ComprTestFractureName : null}
            IncludeInSnowProfile={el.IncludeInSnowProfile ? el.IncludeInSnowProfile : null}
            Comment={el.Comment}
            Attachments={el.Attachments}
            > 
        
          </varsom-compression-test>
        })
        
        }

{obs._compressionTest.length > 0 ?
<div class="border"></div> :"" }


{/* SNOW SURFACE */}
{obs._snowSurfaceObservation ? 
<varsom-snow-surface-observation
  strings={this.strings}
  shortVersion={this.version==="short" ? this.version : null}
  snow-depth={obs._snowSurfaceObservation.SnowDepth ? obs._snowSurfaceObservation.snowDepth : null}
  surface-water-content-name={obs._snowSurfaceObservation.SurfaceWaterContentName ? obs._snowSurfaceObservation.SurfaceWaterContentName : null}
  snow-drift-name={obs._snowSurfaceObservation.SnowDriftName ? obs._snowSurfaceObservation.SnowDriftName : null} 
  snow-surface-name={obs._snowSurfaceObservation.SnowSurfaceName ? obs._snowSurfaceObservation.SnowSurfaceName : null}
  ski-conditions-name={obs._snowSurfaceObservation.SkiConditionsName ? obs._snowSurfaceObservation.SkiConditionsName : null}
  SkiConditionsTID={obs._snowSurfaceObservation.SkiConditionsTID ? obs._snowSurfaceObservation.SkiConditionsTID : null}
  NewSnowDepth24={obs._snowSurfaceObservation.NewSnowDepth24 ? obs._snowSurfaceObservation.NewSnowDepth24 : null}
  SurfaceWaterContentTID={obs._snowSurfaceObservation.SurfaceWaterContentTID ? obs._snowSurfaceObservation.SurfaceWaterContentTID : null}
  SnowDriftTID={obs._snowSurfaceObservation.SnowDriftTID ? obs._snowSurfaceObservation.SnowDriftTID : null}
  SnowSurfaceTID={obs._snowSurfaceObservation.SnowSurfaceTID ? obs._snowSurfaceObservation.SnowSurfaceTID : null}
  Comment={obs._snowSurfaceObservation.Comment ? obs._snowSurfaceObservation.Comment : null}
  HeightLimitLayeredSnow={obs._snowSurfaceObservation.HeightLimitLayeredSnow ? obs._snowSurfaceObservation.HeightLimitLayeredSnow : null}
  SnowLine={obs._snowSurfaceObservation.SnowLine ? obs._snowSurfaceObservation.SnowLine : null}
  FootPenetration={obs._snowSurfaceObservation.FootPenetration ? obs._snowSurfaceObservation.FootPenetration : null}
  Attachments={obs._snowSurfaceObservation.Attachments ? obs._snowSurfaceObservation.Attachments : null}
>
</varsom-snow-surface-observation> 
  : ""}

{obs._iceCoverObs ? 
<varsom-ice-cover-observation
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
IceCoverBeforeName={obs._iceCoverObs.IceCoverBeforeName ? obs._iceCoverObs.IceCoverBeforeName : null}
IceCoverName={obs._iceCoverObs.IceCoverName ? obs._iceCoverObs.IceCoverName : null}
IceCoverAfterName={obs._iceCoverObs.IceCoverAfterName ? obs._iceCoverObs.IceCoverAfterName   : null}
IceSkateabilityName={obs._iceCoverObs.IceSkateabilityName ? obs._iceCoverObs.IceSkateabilityName : null}
IceCapacityName={obs._iceCoverObs.IceCapacityName ? obs._iceCoverObs.IceCapacityName : null}
IceCoverBeforeTID={obs._iceCoverObs.IceCoverBeforeTID ? obs._iceCoverObs.IceCoverBeforeTID : null}
IceCoverTID={obs._iceCoverObs.IceCoverTID ? obs._iceCoverObs.IceCoverTID : null}
IceCoverAfterTID={obs._iceCoverObs.IceCoverAfterTID ? obs._iceCoverObs.IceCoverAfterTID : null}
IceSkateabilityTID={obs._iceCoverObs.IceSkateabilityTID ? obs._iceCoverObs.IceSkateabilityTID : null}
Comment={obs._iceCoverObs.Comment ? obs._iceCoverObs.Comment : null}
IceCapacityTID={obs._iceCoverObs.IceCapacityTID ? obs._iceCoverObs.IceCapacityTID : null}
Attachments={obs._iceCoverObs.Attachments ? obs._iceCoverObs.Attachments : null}
></varsom-ice-cover-observation>
: ""}


{obs._generalObservation ? 
<varsom-general-observation
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
GeoHazardName={obs._generalObservation.GeoHazardName ? obs._generalObservation.GeoHazardName : null}
Urls={obs._generalObservation.Urls ? obs._generalObservation.Urls : null}
GeoHazardTID={obs._generalObservation.GeoHazardTID ? obs._generalObservation.GeoHazardTID : null}
ObsComment={obs._generalObservation.ObsComment ? obs._generalObservation.ObsComment : null}
ObsHeader={obs._generalObservation.ObsHeader ? obs._generalObservation.ObsHeader : null}
Comment={obs._generalObservation.Comment ? obs._generalObservation.Comment : null}
Attachments={obs._generalObservation.Attachments ? obs._generalObservation.Attachments : null}


></varsom-general-observation>
: ""}




{obs._incident ? 
<varsom-incident
strings={this.strings}
shortVersion={this.version==="short" ? this.version : null}
GeoHazardName={obs._incident.GeoHazardName ? obs._incident.GeoHazardName : null}
ActivityInfluencedName={obs._incident.ActivityInfluencedName ? obs._incident.ActivityInfluencedName : null}
DamageExtentName={obs._incident.DamageExtentName ? obs._incident.DamageExtentName : null}
ForecastAccurateName={obs._incident.ForecastAccurateName ? obs._incident.ForecastAccurateName : null}
SafetyGearName={obs._incident.SafetyGearName ? obs._incident.SafetyGearName : null}
LocalTouristName={obs._incident.LocalTouristName ? obs._incident.LocalTouristName : null}
LocalKnowledgeName={obs._incident.LocalKnowledgeName ? obs._incident.LocalKnowledgeName : null}
RescueName={obs._incident.RescueName ? obs._incident.RescueName : null}
SlopeActivityName={obs._incident.SlopeActivityName ? obs._incident.SlopeActivityName : null}
IncidentURLs={obs._incident.IncidentURLs ? obs._incident.IncidentURLs : null}
GeoHazardTID={obs._incident.GeoHazardTID ? obs._incident.GeoHazardTID : null}
ActivityInfluencedTID={obs._incident.ActivityInfluencedTID ? obs._incident.ActivityInfluencedTID : null}
DamageExtentTID={obs._incident.DamageExtentTID ? obs._incident.DamageExtentTID : null}
ForecastAccurateTID={obs._incident.ForecastAccurateTID ? obs._incident.ForecastAccurateTID : null}
LocalTouristTID={obs._incident.LocalTouristTID ? obs._incident.LocalTouristTID : null}
LocalKnowledgeTID={obs._incident.LocalKnowledgeTID ? obs._incident.LocalKnowledgeTID : null}
InvolvedNum={obs._incident.InvolvedNum ? obs._incident.InvolvedNum : null}
CasualtiesNum={obs._incident.CasualtiesNum ? obs._incident.CasualtiesNum : null}
HarmedNum={obs._incident.HarmedNum ? obs._incident.HarmedNum : null}
DeadNum={obs._incident.DeadNum ? obs._incident.DeadNum : null}
EvacuatedNum={obs._incident.EvacuatedNum ? obs._incident.EvacuatedNum : null}
TrafficObstructed={obs._incident.TrafficObstructed ? obs._incident.TrafficObstructed : null}
MaterialDamages={obs._incident.MaterialDamages ? obs._incident.MaterialDamages : null}
SafetyGearTID={obs._incident.SafetyGearTID ? obs._incident.SafetyGearTID : null}
RescueTID={obs._incident.RescueTID ? obs._incident.RescueTID : null}
SlopeActivityTID={obs._incident.SlopeActivityTID ? obs._incident.SlopeActivityTID : null}
DtEndTime={obs._incident.DtEndTime ? obs._incident.DtEndTime : null}
IncidentHeader={obs._incident.IncidentHeader ? obs._incident.IncidentHeader : null}
IncidentIngress={obs._incident.IncidentIngress ? obs._incident.IncidentIngress : null}
IncidentText={obs._incident.IncidentText ? obs._incident.IncidentText : null}
Comment={obs._incident.Comment ? obs._incident.Comment : null}
Attachments={obs._incident.Attachments ? obs._incident.Attachments : null}
></varsom-incident>
: ""}

{/* ATTACHMENTS */}
{this.version !=="short" ? 
<span class="attachments-container">
{obs.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        }
     </span> : null}


{/* LINK TO REGOBS */}
<varsom-regobs-link
regId={obs._regId}
strings={this.strings}
></varsom-regobs-link>



      </div>
      




      </div>
      
    
    
    )}
    
    </div>
   
    
  }

  
  }


