import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';


@Component({
  tag: 'varsom-water-level',
  styleUrl: 'varsom-water-level.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWaterLevel {

  @Prop({mutable: true}) strings: any;
  @Prop() shortVersion: any;
  @Prop() WaterLevelDescribed: any;
  @Prop() WaterLevelValue: any;
  @Prop() WaterLevelRefTID: any;
  @Prop() WaterLevelRefName: any;
  @Prop() MeasuredDischarge: any;
  @Prop() IsRiver: any;
  @Prop() Attachments: Attachment[];

  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings();
  }
   
  render(){
    return <div class="parent"> 

<varsom-label-small
label={this.strings ? this.strings.Observations.WaterLevel.ObsName : "Vannstand"}
></varsom-label-small>

{this.WaterLevelRefTID ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel.WaterLevelRefTName: (this.shortVersion ? null : "Referansenivå") }
    _value={this.WaterLevelRefName}
    ></varsom-key-value>
    :""}

{this.WaterLevelDescribed ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel.WaterLevelDescribed: (this.shortVersion ? null : "Vannstand beskrivelse") }
    _value={this.WaterLevelDescribed}
    ></varsom-key-value>
    :""}

{this.WaterLevelValue ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel.WaterLevelValue: (this.shortVersion ? null : "Størrelse") }
    _value={this.WaterLevelValue}
    ></varsom-key-value>
    :""}

{(this.Attachments && !this.shortVersion) ? 
      <span class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
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

  
  
