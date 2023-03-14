import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-weather',
  styleUrl: 'varsom-weather.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWeather {

  @Prop() strings: any;
  @Prop() weatherPrecipitationName: any;
  @Prop() airTemperature: any;
  
  
  render(){
    return <div> 

    <div class="header">{this.strings.Observations.WeatherObservation.ObsName} </div>
      {this.weatherPrecipitationName ? 
      <span>
      <label>{this.strings.Observations.WeatherObservation.Precipitation}: </label>
      {this.weatherPrecipitationName}
      </span> : ""}
     
      {this.airTemperature ? 
      <span>
      <label>{this.strings.Observations.WeatherObservation.AirTemperature}: </label>
      {this.airTemperature}
      </span> : ""}
      

    
    </div>
  }
    
  }

  
  
