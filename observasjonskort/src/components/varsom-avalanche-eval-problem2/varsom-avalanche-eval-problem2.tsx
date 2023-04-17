import { Component, Prop, h, getAssetPath } from '@stencil/core';


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
    return <div class="container">
    <div class="parent"> 


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

    {this.AvalPropagationName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem.Propagation : "Utbredelse" }
    _value={this.AvalPropagationName}
    ></varsom-key-value>
    :""}
  
    {this.AvalCauseAttributeLightTID ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvalProblem2.AvalCauseAttributeLightTID : "Ugunstige egenskaper på det svake laget" }
    _value={this.AvalCauseAttributeLightName ? this.AvalCauseAttributeLightName + ". " : "" + 
    this.AvalCauseAttributeThinName ? this.AvalCauseAttributeThinName + ". " : "" +
    this.AvalCauseAttributeSoftName ? this.AvalCauseAttributeSoftName + ". " : "" + 
    this.AvalCauseAttributeCrystalName ? this.AvalCauseAttributeCrystalName : ""
  }
    ></varsom-key-value>
    :""}

    {this.AvalCauseDepthName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvalProblem2.AvalCauseDepthTID : "Avstand fra overflaten til det svake laget" }
    _value={this.AvalCauseDepthName}
    ></varsom-key-value>
    :""}

    {this.AvalProbabilityName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvalProblem2.AvalProbabilityTID : "Sannsynlighet for skred" }
    _value={this.AvalProbabilityName}
    ></varsom-key-value>
    :""}

    {this.AvalTriggerSimpleName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvalProblem2.AvalTriggerSimpleTID : "Sannsynlighet for å løse ut skred" }
    _value={this.AvalTriggerSimpleName}
    ></varsom-key-value>
    :""}

    {this.DestructiveSizeName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvalProblem2.DestructiveSizeTID : "Størrelse på forventet skred" }
    _value={this.DestructiveSizeName}
    ></varsom-key-value>
    :""}

    {this.ValidExposition ? 
    <div><img src={getAssetPath(`/assets/svg/ext/${this.ValidExposition}.svg`)}></img></div>
    : ""}

    <div>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvalProblem2.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    </div>
    
    </div>
    </div>
  }
    
  }

  
  
