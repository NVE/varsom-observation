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

      {this.SnowTemp !== null ? 
    <varsom-key-value
    _value={this.SnowTemp + " \u00B0"}
    ></varsom-key-value>
    :""}
    
    {this.Depth !== null ? 
    <varsom-key-value
    _value={" @ " + this.Depth*100 + " cm"}
    ></varsom-key-value>
    :""}


    </div>
  }
    
  }

  
  
