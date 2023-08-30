import { Component, Prop, h } from '@stencil/core';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-snow-density-layer',
  styleUrl: 'varsom-snow-density-layer.css',
  shadow: false,
  assetsDirs: ['images']
})
export class VarsomSnowDensityLayer {

  @Prop() shortVersion: string;
  @Prop() Depth: number;
  @Prop() Thickness: number;
  @Prop() Density: number;
  @Prop() Weight: number;
  @Prop() WaterEquivalent: number;
  @Prop() SortOrder: number;


  @Element() elem: HTMLElement;
  
  render(){
    return <span> 
    {
      `${this.Density} kg/m\u00B3 (${this.WaterEquivalent} mm) @ ${this.Depth * 100} cm`
    }
    </span>
  }
    
  }

  
  
