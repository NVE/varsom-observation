import { Component, Prop, h } from '@stencil/core';
import { Attachment, SnowDensity, SnowTemp, SnowTempObs, StratProfile } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';


import { Element } from '@stencil/core';
import { getExpositionFromNumber } from '../../utils/utils';

@Component({
  tag: 'varsom-snow-profile2',
  styleUrl: 'varsom-snow-profile2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowProfile2 {

  private strings;
  @Prop() shortVersion: string;
  @Prop() TotalDepth: number;
  @Prop() StratProfile: StratProfile;
  @Prop() Comment: string;
  @Prop() IsProfileToGround: boolean;
  @Prop() Exposition: number;
  @Prop() SlopeAngle: number;
  @Prop() SnowTemp: SnowTemp;
  @Prop() Weight: number;
  @Prop() ImageUrl: string;
  @Prop() SnowDensity: SnowDensity[];
  @Prop() RegId: number;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
    return <div> 

<varsom-label
      label={this.strings.Observations.SnowProfile.ObsName}
      ></varsom-label>

<div class="content">

{this.Exposition ?
<varsom-key-value
_key={this.strings.Observations.AvalancheEvaluation.ValidExposition}
_value={this.strings.COMPASS_DIRECTION[getExpositionFromNumber(this.Exposition)]}
></varsom-key-value>
: ""}

 
{this.SlopeAngle ?
<varsom-key-value
_key={this.strings.MapSelection.SupportSteepnessName}
_value={this.SlopeAngle + "\u00B0"}
></varsom-key-value>
: ""}



{this.Comment ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowProfile.Comment}
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    
    {this.SnowTemp && this.SnowTemp.Layers ? 
<div>
  
  <span class="snowtemp-header">{this.strings.Observations.SnowProfile.SnowTemperature + ": "}</span>
  <span class="snowtemp-layers">
      {this.SnowTemp.Layers.map((el: SnowTempObs = {}) =>{
            return <varsom-snow-temp-obs
            shortVersion={this.shortVersion ? this.shortVersion : null}
            Depth={el.Depth}
            SnowTemp={el.SnowTemp}
            >
</varsom-snow-temp-obs>
        })
        }
        </span>
</div> : ""}  
    
  <br></br>
  <br></br>
{this.ImageUrl ?
 <a href={"https://plot.regobs.no/v1/SnowProfile/" + this.RegId}>
  <img src={this.ImageUrl}></img>
 </a>
 : ""}


 {this.SnowDensity ? 
<div>
      {this.SnowDensity.map((el: SnowDensity = {}) =>{
            return <varsom-snow-density
            
            shortVersion={this.shortVersion ? this.shortVersion : null}
            CylinderDiameter={el.CylinderDiameter ? el.CylinderDiameter : null}
            TareWeight={el.TareWeight ? el.TareWeight : null}
            Comment={el.Comment ? el.Comment : null}   
            Density={el.Density ? el.Density : null}   
            Depth={el.Depth ? el.Depth : 0}
            Weight={el.Weight ? el.Weight : null}   
            Layers={el.Layers ? el.Layers : null}          
            >

            </varsom-snow-density>
        })
        }
     </div>   : ""}
 

{/* Removed until better view is implemented 
     {this.StratProfile ? 
     <div>
      
      <span>
      {this.strings ? this.strings.Observations.SnowProfile.Layers : "Lagdeling" }
      </span>
    
    <varsom-strat-profile
    Layers={this.StratProfile.Layers}
    shortVersion={this.shortVersion ? this.shortVersion : null}
    TotalDepth={this.StratProfile.TotalDepth}
    
    ></varsom-strat-profile>
    </div>:""}
    */
    }

    </div>
    
    {(this.Attachments && !this.shortVersion) ? 
      <div class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </div> : ""}
    
    <div class="border"></div>
    
    </div>

  }
    
  }

  
  
