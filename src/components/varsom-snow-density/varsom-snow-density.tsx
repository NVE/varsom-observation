import { Component, Prop, h } from '@stencil/core';
import { Attachment, SnowDensityLayer } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';


@Component({
  tag: 'varsom-snow-density',
  styleUrl: 'varsom-snow-density.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowDensity {

  @Prop({mutable: true}) strings: any;
  @Prop() shortVersion: any;
  @Prop() CylinderDiameter: any;
  @Prop() TareWeight: any;
  @Prop() Comment: any;
  @Prop() Layers: SnowDensityLayer[];
  @Prop() Attachments: Attachment[];

  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings(getLocaleFromDom());
  }

  render(){
    return <div> 

{this.CylinderDiameter ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Density.CylinderBoreDiam : (this.shortVersion ? null : "Sylinderdiameter (cm)") }
    _value={this.CylinderDiameter}
    ></varsom-key-value>
    :""}

{this.TareWeight ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Density.TareWeight : (this.shortVersion ? null : "Posevekt og evt rør (g)") }
    _value={this.TareWeight}
    ></varsom-key-value>
    :""}

<br></br>
{this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.SnowProfile.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    

{this.Layers ? 
<div>
      {this.Layers.map((el: SnowDensityLayer = {}) =>{
            return <varsom-snow-density-layer
            strings={this.strings}
            shortVersion={this.shortVersion ? this.shortVersion : null}
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

  
  
