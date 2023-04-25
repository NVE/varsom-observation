import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-snow-temp-obs',
  styleUrl: 'varsom-snow-temp-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowTempObs {

  @Prop() strings?: any;
  @Prop() shortVersion: any;
  @Prop() Depth: any; 
  @Prop() SnowTemp:	any;
  
  render(){
    return <div>

      {this.Depth ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.SnowSurfaceObservation.SnowDepth: (this.shortVersion ? null : "Snødybde") }
    _value={this.Depth}
    ></varsom-key-value>
    :""}
    
    {this.SnowTemp ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.SnowProfile.SnowTemperature: (this.shortVersion ? null : "Snøtemperatur") }
    _value={this.SnowTemp + " cm"}
    ></varsom-key-value>
    :""}


    </div>
  }
    
  }

  
  
