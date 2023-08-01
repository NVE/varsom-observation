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
    return <span class="content">

      {this.SnowTemp + " \u00B0 @ " + this.Depth*100 + " cm"}  
   

    </span>
  }
    
  }

  
  
