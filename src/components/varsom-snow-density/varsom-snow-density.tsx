import { Component, Prop, h } from '@stencil/core';
import { Attachment, SnowDensityLayer } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';


import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-snow-density',
  styleUrl: 'varsom-snow-density.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowDensity {

  private strings: any
  @Prop() shortVersion: any;
  @Prop() CylinderDiameter: any;
  @Prop() TareWeight: any;
  @Prop() Weight: any;
  @Prop() Density: any;
  @Prop() Depth: any;
  @Prop() Comment: any;
  @Prop() Layers: SnowDensityLayer[];
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
    return <div> 

{this.CylinderDiameter ? 
    <varsom-key-value
    _key={this.strings.Observations.Density.CylinderBoreDiam}
    _value={this.CylinderDiameter}
    ></varsom-key-value>
    :""}

{this.TareWeight ? 
    <varsom-key-value
    _key={this.strings.Observations.Density.TareWeight}
    _value={this.TareWeight}
    ></varsom-key-value>
    :""}

<br></br>
{this.Comment ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowProfile.Comment}
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    
    {this.Layers ? 
      <label>
      {this.strings.Observations.SnowProfile.SnowDensity}:  
      </label>
    : ""}
  
{this.Layers ? 
<span class="density">
  
      {this.Layers.map((el: SnowDensityLayer = {}) =>{
            return <varsom-snow-density-layer
            
            shortVersion={this.shortVersion ? this.shortVersion : null}
            Thickness={el.Thickness ? el.Thickness : null}
            Weight={el.Weight ? el.Weight : null}
            Depth={el.Depth ? el.Depth : 0}
            Density={el.Density ? el.Density : null}
            WaterEquivalent={el.WaterEquivalent ? el.WaterEquivalent : null}          
            SortOrder={el.SortOrder ? el.SortOrder : null}          
            >
</varsom-snow-density-layer>
        })
        }
</span> : ""}  
    
    </div>
  }
    
  }

  
  
