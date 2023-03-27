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

      {/** can't find in api... */}

    
    </div>
  }
    
  }

  
  
