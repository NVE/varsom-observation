import { Component, Prop, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-activity-obs2',
  styleUrl: 'varsom-avalanche-activity-obs2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheActivityObs2 {

  @Prop() strings: any;
  @Prop() Comment: any;
  @Prop() AvalCauseName: any;
  @Prop() DtStart: any;
  @Prop() EstimatedNumName: any;
  @Prop() ExposedHeightComboName: any;
  @Prop() AvalancheExtName: any;
  @Prop() AvalTriggerSimpleName: any;
  @Prop() DestructiveSizeName: any;
  @Prop() AvalPropagationName: any;
  @Prop() EstimatedNumTID: any;
  @Prop() DtEnd: any;
  @Prop() ValidExposition: any;
  @Prop() ExposedHeight1: any;
  @Prop() ExposedHeight2: any;
  @Prop() ExposedHeightComboTID: any;
  @Prop() AvalancheExtTID: any;
  @Prop() AvalCauseTID: any;
  @Prop() AvalTriggerSimpleTID: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() AvalPropagationTID: any;
 
  
  render(){
    return <div> 

    {(this.DtStart && this.DtEnd) ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheActivityObs2.DtAvalancheTime}: </div>
        : <div>Tid: </div>}
        </label>
    {this.DtStart} - {this.DtEnd}
    </div>
      : ""} 


    {this.EstimatedNumTID ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheActivityObs.HowManyAvalanches : "Antall, størrelse og skredutløser" }
    _value={this.EstimatedNumName ? this.EstimatedNumName + ". " : "" +
    this.DestructiveSizeName ? this.DestructiveSizeName + ". " : "" + 
    this.AvalTriggerSimpleName ? this.AvalTriggerSimpleName : ""}
    ></varsom-key-value>
    :""}
 
    {this.AvalPropagationTID ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem.AvalancheProblem : "Utbredelse" }
    _value={this.AvalPropagationTID}
    ></varsom-key-value>
    :""}
    
    {/* TODO: IMPLEMENT SVG IMAGE */}
    {this.ValidExposition ? 
    <div><img src={getAssetPath(`/assets/svg/ext/${this.ValidExposition}.svg`)}></img></div>
      
    :""}  

    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheActivityObs.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    
    
    </div>
  }
    
  }

  
  
