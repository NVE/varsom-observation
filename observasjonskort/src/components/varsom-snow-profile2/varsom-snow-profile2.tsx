import { Component, Prop, h } from '@stencil/core';
import { SnowDensity } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-snow-profile2',
  styleUrl: 'varsom-snow-profile2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowProfile2 {

  @Prop() strings: any;
  @Prop() TotalDepth: any;
  @Prop() StratProfile: any;
  @Prop() Comment: any;
  @Prop() IsProfileToGround: any;
  @Prop() Exposition: any;
  @Prop() SlopeAngle: any;
  @Prop() SnowTemp: any;
  @Prop() SnowDensity: SnowDensity[];


  render(){
    return <div> 

{/**TODO: IMPLEMENT PICTURE */}

<varsom-label
      label={this.strings ? this.strings.Observations.SnowProfile.ObsName : "Snøprofil"}
      ></varsom-label>

{this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowProfile.Comment: "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    
{this.SnowDensity ? 
<div>
      {this.SnowDensity.map((el: SnowDensity = {}) =>{
            return <varsom-snow-density
            strings={this.strings}
            CylinderDiameter={el.CylinderDiameter ? el.CylinderDiameter : null}
            TareWeight={el.TareWeight ? el.TareWeight : null}
            Comment={el.Comment ? el.Comment : null}   
            Layers={el.Layers ? el.Layers : null}          
            >

            </varsom-snow-density>
        })
        }
     </div>   : ""}

     {this.StratProfile ? 
     <div>
      
      <span>
      {this.strings ? this.strings.Observations.SnowProfile.Layers : "Lagdeling" }
      </span>
    
    <varsom-strat-profile
    Layers={this.StratProfile.Layers}
    TotalDepth={this.StratProfile.TotalDepth}
    strings={this.strings}
    ></varsom-strat-profile>
    </div>:""}

    
    </div>
  }
    
  }

  
  
