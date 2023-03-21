import { Component, Prop, h } from '@stencil/core';


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
  
  
  render(){
    return <div> 

    {this.header ? 
      <div class="header">
    {this.header}
    </div>
      : ""} 

    {this.EstimatedNumName ? 
    <varsom-key-value
    label={this.strings ? this.strings.Observations.AvalancheActivityObs.HowManyAvalanches : "Antall skred" }
    _value={this.EstimatedNumName}
    ></varsom-key-value>
    :""}

    {this.EstimatedNumName ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheActivityObs.HowManyAvalanches}: </div>
        : <div>Antall skred: </div>}
        </label>
    {this.EstimatedNumName}
    </div>
      : ""} 

    {this.DestructiveSizeName ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheActivityObs.NumberAndSize}: </div>
        : <div>Antall og størrelse: </div>}
        </label>
    {this.DestructiveSizeName}
    </div>
      : ""} 

    {this.AvalancheTriggerName ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheActivityObs.AvalancheTriggerTID}: </div>
        : <div>Skredutløser: </div>}
        </label>
    {this.AvalancheTriggerName}
    </div>
      : ""} 

      
{this.Comment ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheActivityObs.Comment}: </div>
        : <div>Kommentar: </div>}
        </label>
    {this.Comment}
    </div>
      : ""} 

    </div>
  }
    
  }

  
  
