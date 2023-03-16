import { Component, Prop, h } from '@stencil/core';


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

  

  render(){
    return <div> 

     
      {this.AvalancheEvalProblemID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheEvalProblemID}
      </span> : ""}

      
      {this.AvalProbabilityName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalProbabilityName}
      </span> : ""}

      {this.AvalProbabilityTID ? 
      <span>
      {this.AvalProbabilityTID}
      </span> : ""}

      {this.AvalTriggerSimpleTID ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalTriggerSimpleTID}: </label>
      {this.AvalTriggerSimpleTID}
      </span> : ""}

      {this.AvalTriggerSimpleName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalTriggerSimpleName}
      </span> : ""}

      {this.DestructiveSizeExtTID ? 
      <span>
      <label>Label mangler: </label>
      {this.DestructiveSizeExtTID}
      </span> : ""}

      {this.DestructiveSizeExtName ? 
      <span>
      <label>Label mangler: </label>
      {this.DestructiveSizeExtName}
      </span> : ""}

      {this.AvalancheExtTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheExtTID}
      </span> : ""}

      {this.AvalancheExtName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheExtName}
      </span> : ""}

      {this.AvalCauseTID ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalCauseTID}: </label>
      {this.AvalCauseTID}
      </span> : ""}

      {this.AvalCauseName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseName}
      </span> : ""}

      {this.AvalCauseExtTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseExtTID}
      </span> : ""}

      {this.AvalCauseExtName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseExtName}
      </span> : ""}

      {this.AvalReleaseHeightTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalReleaseHeightTID}
      </span> : ""}

      {this.AvalReleaseHeightName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalReleaseHeightName}
      </span> : ""}

      {this.AvalancheProbabilityAutoText ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheProbabilityAutoText}
      </span> : ""}

      {this.AvalancheProblemAutoText ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheProblemAutoText}
      </span> : ""}

      {this.Comment ? 
      <span>
      <label>{this.strings.Observations.CompressionTest.Comment}: </label>
      {this.Comment}
      </span> : ""}

     
    
    
    </div>
  }
    
  }

  
  
