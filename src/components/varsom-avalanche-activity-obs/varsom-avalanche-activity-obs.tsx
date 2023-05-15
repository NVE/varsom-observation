import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';


@Component({
  tag: 'varsom-avalanche-activity-obs',
  styleUrl: 'varsom-avalanche-activity-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheActivityObs {

  @Prop() strings: any;
  @Prop() header: any;
  @Prop() shortVersion: any;
  @Prop() AvalancheActivityObsID: any;
  @Prop() Aspect: any;
  @Prop() HeigthStartZone: any;
  @Prop() DtAvalancheTime: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() DestructiveSizeName: any;
  @Prop() EstimatedNumTID: any;
  @Prop() EstimatedNumName: any;
  @Prop() AvalancheTID: any;
  @Prop() AvalancheName: any;
  @Prop() AvalancheTriggerTID: any;
  @Prop() AvalancheTriggerName: any;
  @Prop() TerrainStartZoneTID: any;
  @Prop() TerrainStartZoneName: any;
  @Prop() SnowLine: any;
  @Prop() SnowLineName: any;
  @Prop() DtOffAvalancheTime: any;
  @Prop() Comment: any;
  @Prop() Attachments: Attachment[];
  
  
  render(){
    return <div> 

    {this.header ? 
      <div class="header">
    {this.header}
    </div>
      : ""} 

    <div class="content">
    {this.EstimatedNumName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheActivityObs.HowManyAvalanches : (this.shortVersion ? null : "Antall skred") }
    _value={this.EstimatedNumName}
    ></varsom-key-value>
    :""}

    {this.AvalancheTriggerName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheActivityObs.AvalancheTriggerTID : (this.shortVersion ? null : "Skredutløser") }
    _value={this.AvalancheTriggerName}
    ></varsom-key-value>
    :""}

    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheActivityObs.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

    </div>

    {this.Attachments && !this.shortVersion ? 
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

  
  
