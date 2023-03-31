import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { getDangerTypeSvg } from '../../utils/utils';

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
  @Prop() Comment: any;
  @Prop() AvalancheEvalProblems: any[];
  

  render(){
    return <div> 

    {this.AvalancheEvaluation ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation2.ObsName : "Skredfareurdering" }
    _value={this.AvalancheEvaluation}
    ></varsom-key-value>
    :""}

    {this.AvalancheDevelopment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation2.AvalancheDevelopment : "Utvikling" }
    _value={this.AvalancheDevelopment}
    ></varsom-key-value>
    :""}


{this.AvalancheDangerTID ? 
<div>
  <p>{this.strings ? this.strings.Observations.AvalancheEvaluation.AvalancheDangerTID : "Faregrad"}</p>
  
<span><img src={getAssetPath(`/assets/svg/avalanche/Icon-Avalanche-Danger-Level-${getDangerTypeSvg(this.AvalancheDangerTID)}`)}></img> 1 Liten</span> 
 </div>
: ""}

<div>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation3.ForecastComment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
</div>

      {this.AvalancheEvalProblems ?
      <div>
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
</div> : ""}

  
    
    </div>
  }
    
  }

  
  
