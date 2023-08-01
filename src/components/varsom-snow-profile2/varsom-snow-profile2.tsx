import { Component, Prop, h } from '@stencil/core';
import { Attachment, SnowDensity, SnowTempObs } from '../varsom-observation/observation-model';
import { getExpositionFromNumber } from '../../utils/utils';


@Component({
  tag: 'varsom-snow-profile2',
  styleUrl: 'varsom-snow-profile2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowProfile2 {

  @Prop() strings: any;
  @Prop() shortVersion: any;
  @Prop() TotalDepth: any;
  @Prop() StratProfile: any;
  @Prop() Comment: any;
  @Prop() IsProfileToGround: any;
  @Prop() Exposition: any;
  @Prop() SlopeAngle: any;
  @Prop() SnowTemp: any;
  @Prop() ImageUrl: any;
  @Prop() SnowDensity: SnowDensity[];
  @Prop() RegId: any;
  @Prop() Attachments: Attachment[];

  render(){
    return <div> 

<varsom-label
      label={this.strings ? this.strings.Observations.SnowProfile.ObsName : "Snøprofil"}
      ></varsom-label>

<div class="content">

{this.Exposition ?
<varsom-key-value
_key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvaluation.ValidExposition: (this.shortVersion ? null : "Eksposisjon") }
_value={this.strings.COMPASS_DIRECTION[getExpositionFromNumber(this.Exposition)]}
></varsom-key-value>
: ""}

 
{this.SlopeAngle ?
<varsom-key-value
_key={this.strings && !this.shortVersion ? this.strings.MapSelection.SupportSteepnessName: (this.shortVersion ? null : "Bratthet") }
_value={this.SlopeAngle + "\u00B0"}
></varsom-key-value>
: ""}



{this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.SnowProfile.Comment: (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    
    {this.SnowTemp.Layers ? 
<div>
  
  <span>{this.strings && !this.shortVersion ? this.strings.Observations.SnowProfile.SnowTemperature + ": ": (this.shortVersion ? null : "Temperatur:") }</span>
  
      {this.SnowTemp.Layers.map((el: SnowTempObs = {}) =>{
            return <varsom-snow-temp-obs
            strings={this.strings}
            shortVersion={this.shortVersion ? this.shortVersion : null}
            Depth={el.Depth}
            SnowTemp={el.SnowTemp}
            >
</varsom-snow-temp-obs>
        })
        }
</div> : ""}  
    
  <br></br>
  <br></br>
{this.ImageUrl ?
 <a href={"https://plot.regobs.no/v1/SnowProfile/" + this.RegId}>
  <img src={this.ImageUrl}></img>
 </a>
 : ""}

{/**
 * 
 * {this.SnowDensity ? 
<div>
      {this.SnowDensity.map((el: SnowDensity = {}) =>{
            return <varsom-snow-density
            strings={this.strings}
            shortVersion={this.shortVersion ? this.shortVersion : null}
            CylinderDiameter={el.CylinderDiameter ? el.CylinderDiameter : null}
            TareWeight={el.TareWeight ? el.TareWeight : null}
            Comment={el.Comment ? el.Comment : null}   
            Layers={el.Layers ? el.Layers : null}          
            >

            </varsom-snow-density>
        })
        }
     </div>   : ""}
 */}


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
    strings={this.strings}
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

  
  
