import { Component, Prop, h } from '@stencil/core';
import { SnowDensityLayer } from '../varsom-observasjon/observation-model';


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

{this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowProfile.Comment: "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

{this.CylinderDiameter ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowProfile.Density.CylinderBoreDiam: "Sylinderdiameter (cm)" }
    _value={this.CylinderDiameter}
    ></varsom-key-value>
    :""}

{this.TareWeight ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowProfile.Density.TareWeight: "Posevekt og evt rør (g)" }
    _value={this.TareWeight}
    ></varsom-key-value>
    :""}


{this.Layers ? 
<div>
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
</div> : ""}  
    
    </div>
  }
    
  }

  
  
