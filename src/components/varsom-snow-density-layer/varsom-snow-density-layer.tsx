import { Component, Prop, h } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';


import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-snow-density-layer',
  styleUrl: 'varsom-snow-density-layer.css',
  shadow: false,
  assetsDirs: ['images']
})
export class VarsomSnowDensityLayer {

  private strings: any
  @Prop() shortVersion: any;
  @Prop() Depth: any;
  @Prop() Thickness: any;
  @Prop() Density: any;
  @Prop() Weight: any;
  @Prop() WaterEquivalent: any;
  @Prop() SortOrder: any;


  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }
  
  render(){
    return <span> 
    {
      `${this.Density} kg/m\u00B3 (${this.WaterEquivalent} mm) @ ${this.Depth * 100} cm`
    }
    </span>
  }
    
  }

  
  
