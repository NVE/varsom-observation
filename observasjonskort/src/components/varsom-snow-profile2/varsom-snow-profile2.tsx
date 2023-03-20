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

      {this.TotalDepth ? 
      <span>
      <label>Label mangler: </label>
      {this.TotalDepth}
      </span> : ""} 

      {this.StratProfile ? 
      <span>
      <label>Label mangler: </label>
      {this.StratProfile}
      </span> : ""} 

      {this.Comment ? 
      <span>
      <label>Label mangler: </label>
      {this.Comment}
      </span> : ""} 

      {this.IsProfileToGround ? 
      <span>
      <label>Label mangler: </label>
      {this.IsProfileToGround}
      </span> : ""} 

      {this.Exposition ? 
      <span>
      <label>Label mangler: </label>
      {this.Exposition}
      </span> : ""} 

      {this.SlopeAngle ? 
      <span>
      <label>Label mangler: </label>
      {this.SlopeAngle}
      </span> : ""} 

      {this.SlopeAngle ? 
      <span>
      <label>Label mangler: </label>
      {this.SlopeAngle}
      </span> : ""} 

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
    
    </div>
  }
    
  }

  
  
