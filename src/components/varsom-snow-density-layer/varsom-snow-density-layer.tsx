import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-snow-density-layer',
  styleUrl: 'varsom-snow-density-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowDensityLayer {

  @Prop() strings: any;
  @Prop() shortVersion: any;
  @Prop() Depth: any;
  @Prop() Thickness: any;
  @Prop() Density: any;
  @Prop() Weight: any;
  @Prop() WaterEquivalent: any;
  @Prop() SortOrder: any;

  render(){
    return <span> 
    {
      `${this.Density} kg/m\u00B3 (${this.WaterEquivalent} mm) @ ${this.Depth * 100} cm,`
    }
    </span>
  }
    
  }

  
  
