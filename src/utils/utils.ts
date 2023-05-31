
// import fetch from "node-fetch";  //needs to be included to test with Ponicode

//import './js/jquery-1.11.1.min.js';
//import './js/jquery.jqplot.min.js';
//import './js/jqplot.canvasOverlay.min.js';
//import './js/jqplot.canvasTextRenderer.min.js';
//import './js/jqplot.canvasAxisLabelRenderer.min.js';
//import './js/istykkelse.js'
import { IceThicknessLayer } from '../components/varsom-observation/observation-model.js';
import { CreatePlot } from './js/istykkelse.js';

export function format(first: string, middle: string, last: string): string {
  
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');

}



export async function getObservationFromApiById(id: string){
    let data = `{"RegId": ${id}}`
    let response = await fetch('https://api.regobs.no/v5/Search', {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let json = await response.json();
  return json[0]["RegId"];
  
  }

  
  export function generatePlotForIceThickness(iceThicknessLayers: IceThicknessLayer[], regId:number, elem: HTMLElement, elem2: HTMLElement,
    iceThicknessSum, obsLocationId: number, locationName: string, 
    slushSnow: number, IceHeightBefore: number, IceHeightAfter: number, snowDepth: number){

      var iceThickness = [];
    for(let i = 0; i < iceThicknessLayers.length; i++){
      iceThickness.push({"RegID":regId,"DtObsTime":null,"ObsLocationID":obsLocationId,"LocationName":locationName,"SnowDepth":snowDepth,"SlushSnow":slushSnow,"IceThicknessSum":iceThicknessSum,"IceHeightBefore":IceHeightBefore,"IceHeightAfter":IceHeightAfter,"IceLayerID":null,"IceLayerTID":iceThicknessLayers[i].IceLayerTID,"IceLayerName": iceThicknessLayers[i].IceLayerName,"IceLayerThickness":iceThicknessLayers[i].IceLayerThickness})
    }
  
    CreatePlot(iceThickness, elem, elem2);  
            
  }

  export function getDangerTypeSvg(id: number){
    switch(id){
      case 1: {
        return "Dry-Snow-1-EAWS.svg";
      }
      case 2: {
        return "Dry-Snow-2-EAWS.svg";
      }
      case 3: {
        return "Dry-Snow-3-EAWS.svg";
      }
      case 4: case 5: {
        return "Dry-Snow-4-5-EAWS.svg";
      }
      default: {
        return "No-Rating-EAWS.svg";
      }
    }
  }

  export function getIconName(name: string){
    switch(name){
      case "Snow":
        case "Snø":  
        case "Schnee":
          case "Snö":
            case "Sneg":
              case "Neige":
                case "Sne":
      {
        return "snow";
      }
      case "Ice":
      case "Is":
        case "Eis":
          case "Led":
            case "Glace":  
      {
        return "ice";
      }
      case "Water":
      case "Vann":
        case "Vand":
          case "Hydrologie":
            case "Vatn":
              case "Vatten":
                case "Voda":
                  case "Wasser":  
      {
          return "water";
        }
        case "Soil":
        case "Jord":
          case "Erde":
            case "Zemlja":
              case "Sol":  
        {
          return "dirt";
        }
      default:{
        return "";
        
      }
    }
  }

  export async function getObservationFromApiByLanguageAndType(type: string, language: string){
    let geoHazardId = getGeoHazardIdFromName(type);
    let langKey = getLangKeyFromName(language);
    let data = `{"SelectedGeoHazards": [${geoHazardId}], "LangKey": ${langKey}}`
      let response = await fetch('https://api.regobs.no/v5/Search', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let json = await response.json();
    return json[0]["GeoHazardName"];
    
    }

    export async function getObservationsFromApiByTypeAmountAndLanguage(type: string, num: number, language: string){
      let geoHazardId = getGeoHazardIdFromName(type);
      let langKey = getLangKeyFromName(language);
      let data = `{"NumberOfRecords": ${num}, "SelectedGeoHazards": [${geoHazardId}], "LangKey": ${langKey}}`
        let response = await fetch('https://api.regobs.no/v5/Search', {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let json = await response.json();
      return json[1]["GeoHazardName"];
      
      }

export function getGeoHazardIdFromName(hazardName: string) {
  switch (hazardName){
    case "Snow": {
      return 10
    }
    case "Dirt": {
      return 20
    }
    case "Water": {
      return 60
    }
    case "Ice": {
      return 70
    }

  } }

  export function getLangKeyFromName(language: string){
    switch (language){
      case "en": {
        return 2
      }
      case "nb": {
        return 1
      }
      case "de": {
        return 3
      }
      case "sl": {
        return 4
      }
      case "it": {
        return 6
      }
      case "sv": {
        return 5
      }
      case "nn": {
        return 7
      }
      case "fr": {
        return 8
      }
      case "da": {
        return 9
      }
    }
  }

export function valueIsNotGiven(value: any){
  let notGiven = ["Ikke gitt", "Not given", "Keine Angabe", "Nicht angegeben", "Ni podano", "Ej angivet", "Ikkje gitt", "Non donné", "Ikke givet"];
  return notGiven.includes(String(value));
}

  


