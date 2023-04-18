import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-avalanche-eval-problem',
  styleUrl: 'varsom-avalanche-eval-problem.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvalProblem {

  @Prop() strings: any;
  @Prop() AvalancheEvalProblemID: any;
  @Prop() AvalProbabilityTID: any;
  @Prop() AvalProbabilityName: any;
  @Prop() AvalTriggerSimpleTID: any;
  @Prop() AvalTriggerSimpleName: any;
  @Prop() DestructiveSizeExtTID: any;
  @Prop() DestructiveSizeExtName: any;
  @Prop() AvalancheExtTID: any;
  @Prop() AvalancheExtName: any;
  @Prop() AvalCauseTID: any;
  @Prop() AvalCauseExtTID: any;
  @Prop() AvalCauseName: any;
  @Prop() AvalCauseExtName: any;
  @Prop() AvalReleaseHeightTID: any;
  @Prop() AvalReleaseHeightName: any;
  @Prop() AvalancheProbabilityAutoText: any;
  @Prop() AvalancheProblemAutoText: any;
  @Prop() Comment: any;
  @Prop() Attachments: Attachment[];

  

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

    {this.AvalTriggerSimpleName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem.AvalTriggerSimpleTID : "Sannsynlig belasting for å løse ut skred" }
    _value={this.AvalTriggerSimpleName}
    ></varsom-key-value>
    :""}

    {this.AvalProbabilityName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem.AvalProbabilityTID : "Sannsynlighet for skred" }
    _value={this.AvalProbabilityName}
    ></varsom-key-value>
    :""}

    {this.DestructiveSizeExtName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem.DestructiveSizeTID : "Størrelse på forventet skred" }
    _value={this.DestructiveSizeExtName}
    ></varsom-key-value>
    :""}

    <div>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheProblem.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    </div>
    
    </div>

    </div>
  }
    
  }

  
  
