import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';


@Component({
  tag: 'varsom-danger-obs',
  styleUrl: 'varsom-danger-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomDangerObs {

  @Prop() strings: any;
  @Prop() shortVersion: any;
  @Prop() GeoHazardName: any;
  @Prop() DangerSignName: any;
  @Prop() GeoHazardTID: any;
  @Prop() DangerSignTID: any;
  @Prop() Comment: any;
  @Prop() Attachments: Attachment[];
 
  render(){
    return <div class="container">
    <div class="parent"> 

    {this.DangerSignName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.DangerObs.DangerSignTName : (this.shortVersion ? null : "Type") }
    _value={this.DangerSignName}
    ></varsom-key-value>
    :""}


<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.DangerObs.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
 
 </div>
 {this.Attachments ? 
      <span class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            shortVersion={this.shortVersion ? this.shortVersion : null}
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </span> : ""}
 
 
    </div>
  }
    
  }

  
  
