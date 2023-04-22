import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-water-level',
  styleUrl: 'varsom-water-level.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWaterLevel {

  @Prop() strings: any;
  @Prop() WaterLevelDescribed: any;
  @Prop() WaterLevelValue: any;
  @Prop() WaterLevelRefTID: any;
  @Prop() WaterLevelRefName: any;
  @Prop() MeasuredDischarge: any;
  @Prop() IsRiver: any;
  @Prop() Attachments: Attachment[];
   
  render(){
    return <div class="parent"> 

<varsom-label-small
label={this.strings ? this.strings.Observations.WaterLevel.ObsName : "Vannstand"}
></varsom-label-small>

{this.WaterLevelRefTID ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WaterLevel.WaterLevelRefTName: "Referansenivå" }
    _value={this.WaterLevelRefName}
    ></varsom-key-value>
    :""}

{this.WaterLevelDescribed ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WaterLevel.WaterLevelDescribed: "Vannstand beskrivelse" }
    _value={this.WaterLevelDescribed}
    ></varsom-key-value>
    :""}

{this.WaterLevelValue ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WaterLevel.WaterLevelValue: "Størrelse" }
    _value={this.WaterLevelValue}
    ></varsom-key-value>
    :""}

{this.Attachments ? 
      <div>
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
    
    </div>
  }
    
  }

  
  
