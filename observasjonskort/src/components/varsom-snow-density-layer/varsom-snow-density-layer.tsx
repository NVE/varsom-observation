import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-snow-density-layer',
  styleUrl: 'varsom-snow-density-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowDensityLayer {

  @Prop() strings: any;
  @Prop() Depth: any;
  @Prop() Thickness: any;
  @Prop() Weight: any;
  @Prop() WaterEquivalent: any;
  @Prop() SortOrder: any;

  render(){
    return <div> 

      {this.Depth ? 
      <span>
      <label>Label mangler: </label>
      {this.Depth}
      </span> : ""}

      {this.Thickness ? 
      <span>
      <label>Label mangler: </label>
      {this.Thickness}
      </span> : ""}

      {this.Weight ? 
      <span>
      <label>Label mangler: </label>
      {this.Weight}
      </span> : ""}

      {this.WaterEquivalent ? 
      <span>
      <label>Label mangler: </label>
      {this.WaterEquivalent}
      </span> : ""}

      {this.SortOrder ? 
      <span>
      <label>Label mangler: </label>
      {this.SortOrder}
      </span> : ""}
    
    </div>
  }
    
  }

  
  
