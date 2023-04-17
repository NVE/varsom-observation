import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-avalanche-activity-obs',
  styleUrl: 'varsom-avalanche-activity-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheActivityObs {

  @Prop() strings: any;
  @Prop() header: any;
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
    _key={this.strings ? this.strings.Observations.AvalancheActivityObs.HowManyAvalanches : "Antall skred" }
    _value={this.EstimatedNumName}
    ></varsom-key-value>
    :""}

    {this.AvalancheTriggerName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheActivityObs.AvalancheTriggerTID : "Skredutløser" }
    _value={this.AvalancheTriggerName}
    ></varsom-key-value>
    :""}

    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheActivityObs.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

    </div>
    </div>
  }
    
  }

  
  
