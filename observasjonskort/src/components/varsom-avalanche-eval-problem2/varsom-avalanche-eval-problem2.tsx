import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-eval-problem2',
  styleUrl: 'varsom-avalanche-eval-problem2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvalProblem2 {

  @Prop() strings: any;
  @Prop() AvalProbabilityTID: any;
  @Prop() AvalProbabilityName: any;
  @Prop() AvalCauseDepthTID: any;
  @Prop() AvalTriggerSimpleName: any;
  @Prop() AvalCauseDepthName: any;
  @Prop() ValidExposition: any;
  @Prop() ExposedHeight1: any;
  @Prop() ExposedHeight2: any;
  @Prop() ExposedHeightComboTID: any;
  @Prop() ExposedHeightComboName: any;
  @Prop() AvalancheExtTID: any;
  @Prop() AvalancheExtName: any;
  @Prop() AvalCauseTID: any;
  @Prop() AvalCauseName: any;
  @Prop() AvalCauseAttributeLightTID: any;
  @Prop() AvalCauseAttributeLightName: any;
  @Prop() AvalCauseAttributeThinTID: any;
  @Prop() AvalCauseAttributeThinName: any;
  @Prop() AvalCauseAttributeSoftTID: any;
  @Prop() AvalCauseAttributeSoftName: any;
  @Prop() AvalCauseAttributeCrystalTID  : any;
  @Prop() AvalCauseAttributeCrystalName: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() AvalTriggerSimpleTID: any;
  @Prop() DestructiveSizeName: any;
  @Prop() AvalPropagationTID: any;
  @Prop() AvalPropagationName: any;
  @Prop() Comment: any;
  

  render(){
    return <div> 


    {this.AvalCauseName ? 
    <varsom-label-small
    label={this.AvalCauseName}
    ></varsom-label-small>
    :""}

    {this.AvalancheExtName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem.AvalancheType : "Skredtype" }
    _value={this.AvalancheExtName}
    ></varsom-key-value>
    :""}

    {this.AvalCauseDepthName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem2.AvalCauseDepthTID : "Avstand fra overflaten til det svake laget" }
    _value={this.AvalCauseDepthName}
    ></varsom-key-value>
    :""}

  
    {this.AvalCauseAttributeLightTID ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem2.AvalCauseAttributeLightTID : "Ugunstige egenskaper på det svake laget" }
    _value={this.AvalCauseAttributeLightName ? this.AvalCauseAttributeLightName + ". " : "" + 
    this.AvalCauseAttributeThinName ? this.AvalCauseAttributeThinName + ". " : "" +
    this.AvalCauseAttributeSoftName ? this.AvalCauseAttributeSoftName : ""}
    ></varsom-key-value>
    :""}

    {this.AvalCauseDepthName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem2.AvalCauseDepthTID : "Avstand fra overflaten til det svake laget" }
    _value={this.AvalCauseDepthName}
    ></varsom-key-value>
    :""}


    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}




  {/* TODO IMPLEMENT ICONS */}    

    
    </div>
  }
    
  }

  
  
