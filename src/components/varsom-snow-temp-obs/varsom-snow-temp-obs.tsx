import { Component, Prop, h } from '@stencil/core';
import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-snow-temp-obs',
  styleUrl: 'varsom-snow-temp-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowTempObs {

  @Prop() shortVersion: string;
  @Prop() Depth: number; 
  @Prop() SnowTemp:	number;
  
  @Element() elem: HTMLElement;

  render(){
    return <span class="content">

      {this.SnowTemp + " \u00B0 @ " + this.Depth*100 + " cm"}  
   

    </span>
  }
    
  }

  
  
