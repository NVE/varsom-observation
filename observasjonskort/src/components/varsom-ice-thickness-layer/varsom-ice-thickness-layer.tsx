import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-ice-thickness-layer',
  styleUrl: 'varsom-ice-thickness-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomIceThicknessLayer {

  @Prop() strings: any;
  @Prop() Comment: any;
  @Prop() IceLayerName: any;
  @Prop() IceLayerThickness: any;


  render(){
    return <div> 

      {this.IceLayerName ? 
      <span>
      <label>Label mangler: </label>
      {this.IceLayerName}
      </span> : ""}

      {this.IceLayerThickness ? 
      <span>
      <label>Label mangler: </label>
      {this.IceLayerThickness}
      </span> : ""}

      {this.Comment ? 
      <span>
      <label>Label mangler: </label>
      {this.Comment}
      </span> : ""}      

    
    </div>
  }
    
  }

  
  
