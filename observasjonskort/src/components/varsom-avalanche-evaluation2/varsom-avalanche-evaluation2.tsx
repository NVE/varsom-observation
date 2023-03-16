import { Component, Prop, h } from '@stencil/core';
import { AvalancheEvalProblem } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-avalanche-evaluation2',
  styleUrl: 'varsom-avalanche-evaluation2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvaluation2 {

  @Prop() strings: any;
  @Prop() AvalancheDangerName: any;
  @Prop() ValidExposition: any;
  @Prop() AvalancheEvaluation: any;
  @Prop() AvalancheDevelopment: any;
  @Prop() ExposedHeight1: any;
  @Prop() ExposedHeight2: any;
  @Prop() ExposedHeightComboTID: any;
  @Prop() ExposedHeightComboName: any;
  @Prop() ExposedClimateTID: any;
  @Prop() ExposedClimateName: any;
  @Prop() AvalancheDangerTID: any;
  @Prop() AvalancheEvalProblems: any[];
  

  render(){
    return <div> 

      {this.AvalancheDangerName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheDangerName}
      </span> : ""}

      {this.AvalancheDangerName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheDangerName}
      </span> : ""}

      {this.ValidExposition ? 
      <span>
      <label>Label mangler: </label>
      {this.ValidExposition}
      </span> : ""}

      {this.AvalancheEvaluation ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheEvaluation}
      </span> : ""}

      {this.AvalancheDevelopment ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheDevelopment}
      </span> : ""}

      {this.ExposedHeight1 ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedHeight1}
      </span> : ""}

      {this.ExposedHeight2 ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedHeight2}
      </span> : ""}

      {this.ExposedHeightComboTID ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedHeightComboTID}
      </span> : ""}

      {this.ExposedHeightComboName ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedHeightComboName}
      </span> : ""}

      {this.ExposedClimateTID ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedClimateTID}
      </span> : ""}

      {this.ExposedClimateName ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedClimateName}
      </span> : ""}

      {this.AvalancheDangerTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheDangerTID}
      </span> : ""}

      {this.AvalancheEvalProblems.map((el: AvalancheEvalProblem = {}) =>{
            return <varsom-avalanche-eval-problem
            strings={this.strings}
            AvalancheEvalProblemID={el.AvalancheEvalProblemID ? el.AvalancheEvalProblemID : null}
            AvalProbabilityTID={el.AvalProbabilityTID ? el.AvalProbabilityTID : null}
            AvalProbabilityName={el.AvalProbabilityName ? el.AvalProbabilityName : null}
            AvalTriggerSimpleTID={el.AvalTriggerSimpleTID ? el.AvalTriggerSimpleTID : null}
            AvalTriggerSimpleName={el.AvalTriggerSimpleName ? el.AvalTriggerSimpleName : null}
            DestructiveSizeExtTID={el.DestructiveSizeExtTID ? el.DestructiveSizeExtTID : null}
            DestructiveSizeExtName={el.DestructiveSizeExtName ? el.DestructiveSizeExtName : null}
            AvalancheExtTID={el.AvalancheExtTID ? el.AvalancheExtTID : null}
            AvalancheExtName={el.AvalancheExtName ? el.AvalancheExtName : null}
            AvalCauseTID={el.AvalCauseTID ? el.AvalCauseTID : null}
            AvalCauseExtTID={el.AvalCauseExtTID ? el.AvalCauseExtTID : null}
            AvalCauseName={el.AvalCauseName ? el.AvalCauseName : null}
            AvalCauseExtName={el.AvalCauseExtName ? el.AvalCauseExtName : null}
            AvalReleaseHeightTID={el.AvalReleaseHeightTID ? el.AvalReleaseHeightTID : null}
            AvalReleaseHeightName={el.AvalReleaseHeightName ? el.AvalReleaseHeightName : null}
            AvalancheProbabilityAutoText={el.AvalancheProbabilityAutoText ? el.AvalancheProbabilityAutoText : null}
            AvalancheProblemAutoText={el.AvalancheProblemAutoText ? el.AvalancheProblemAutoText : null}
            Comment={el.Comment ? el.Comment : null}

            >

            </varsom-avalanche-eval-problem>

})
}

  
    
    </div>
  }
    
  }

  
  
