import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-snow-temp-obs',
  styleUrl: 'varsom-snow-temp-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowTempObs {

  @Prop() strings?: any;
  @Prop() Depth: any; 
  @Prop() SnowTemp:	any;

  
  render(){
    return <div> 
      {this.Depth ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.SnowDepth} </label>
      {this.Depth}
      </span> : ""}

      {this.Depth ? 
      <span>
      <label>{this.strings.Observations.SnowProfile.SnowTemperature} </label>
      {this.Depth}
      </span> : ""}

    </div>
  }
    
  }

  
  
