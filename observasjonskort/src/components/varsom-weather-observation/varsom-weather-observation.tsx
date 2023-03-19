import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-weather-observation',
  styleUrl: 'varsom-weather-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWeatherObservation {

  @Prop() strings: any;
  @Prop() PrecipitationName: any;
  @Prop() WindDirectionName: any;
  @Prop() PrecipitationTID: any;
  @Prop() AirTemperature: any;
  @Prop() WindDirection: any;
  @Prop() WindSpeed: any;
  @Prop() CloudCover: any;
  @Prop() Comment: any;
  
  
  
  
  render(){
    return <div> 

   not implemented

    
    </div>
  }
    
  }

  
  
