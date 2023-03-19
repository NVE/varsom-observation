import { Component, Prop, h } from '@stencil/core';
import { IceThicknessLayer } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-ice-thickness',
  styleUrl: 'varsom-ice-thickness.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomIceThickness {

  @Prop() strings: any;
  @Prop() Comment: any;
  @Prop() IceThicknessLayers: IceThicknessLayer[];
  @Prop() SnowDepth: any;
  @Prop() SlushSnow: any;
  @Prop() IceThicknessSum: any;
  @Prop() IceHeightBefore: any;
  @Prop() IceHeightAfter: any;


  render(){
    return <div> 

{this.IceThicknessLayers.map((el: IceThicknessLayer = {}) =>{
            return <varsom-ice-thickness-layer
            strings={this.strings}
            Comment={el.Comment ? el.Comment : null}
            IceLayerName={el.IceLayerName ? el.IceLayerName : null}
            IceLayerThickness={el.IceLayerThickness ? el.IceLayerThickness : null}          
            >

            </varsom-ice-thickness-layer>
        })
        }

      {this.IceThicknessLayers ? 
      <span>
      <label>Label mangler: </label>
      {this.IceThicknessLayers}
      </span> : ""}


      {this.SnowDepth ? 
      <span>
      <label>Label mangler: </label>
      {this.SnowDepth}
      </span> : ""}

      {this.SlushSnow ? 
      <span>
      <label>Label mangler: </label>
      {this.SlushSnow}
      </span> : ""}

      {this.IceThicknessSum ? 
      <span>
      <label>Label mangler: </label>
      {this.IceThicknessSum}
      </span> : ""}

      {this.IceHeightBefore ? 
      <span>
      <label>Label mangler: </label>
      {this.IceHeightBefore}
      </span> : ""}
      
      {this.IceHeightAfter ? 
      <span>
      <label>Label mangler: </label>
      {this.IceHeightAfter}
      </span> : ""}

    
    </div>
  }
    
  }

  
  
