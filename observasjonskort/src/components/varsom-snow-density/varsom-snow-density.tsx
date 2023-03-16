import { Component, Prop, h } from '@stencil/core';
import { SnowDensityLayer } from '../varsom-observasjon/observation-model';
import { VarsomSnowDensityLayer } from '../varsom-snow-density-layer/varsom-snow-density-layer';


@Component({
  tag: 'varsom-snow-density',
  styleUrl: 'varsom-snow-density.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowDensity {

  @Prop() strings: any;
  @Prop() CylinderDiameter: any;
  @Prop() TareWeight: any;
  @Prop() Comment: any;
  @Prop() Layers: SnowDensityLayer[];

  render(){
    return <div> 

      {this.CylinderDiameter ? 
      <span>
      <label>Label mangler: </label>
      {this.CylinderDiameter}
      </span> : ""} 

      {this.TareWeight ? 
      <span>
      <label>Label mangler: </label>
      {this.TareWeight}
      </span> : ""} 

      {this.Comment ? 
      <span>
      <label>Label mangler: </label>
      {this.Comment}
      </span> : ""} 

      {this.Layers.map((el: SnowDensityLayer = {}) =>{
            return <varsom-snow-density-layer
            strings={this.strings}
            Thickness={el.Thickness ? el.Thickness : null}
            Weight={el.Weight ? el.Weight : null}
            WaterEquivalent={el.WaterEquivalent ? el.WaterEquivalent : null}          
            SortOrder={el.SortOrder ? el.SortOrder : null}          
            >
</varsom-snow-density-layer>
        })
        }
  
    
    </div>
  }
    
  }

  
  
