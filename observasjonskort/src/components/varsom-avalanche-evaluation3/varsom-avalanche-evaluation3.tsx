import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { getDangerTypeSvg } from '../../utils/utils';

@Component({
  tag: 'varsom-avalanche-evaluation3',
  styleUrl: 'varsom-avalanche-evaluation3.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvaluation3 {

  @Prop() strings: any;
  @Prop() AvalancheDangerName: any;
  @Prop() ForecastCorrectName: any;
  @Prop() AvalancheDangerTID: any;
  @Prop() AvalancheEvaluation: any;
  @Prop() AvalancheDevelopment: any;
  @Prop() ForecastCorrectTID: any;
  @Prop() ForecastComment: any;



  render(){
    return <div class="container">
    
    <div class="content"> 
    {this.AvalancheEvaluation ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation3.ObsName : "Skredfareurdering" }
    _value={this.AvalancheEvaluation}
    ></varsom-key-value>
    :""}

    {this.ForecastCorrectName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation3.ForecastCorrectTID : "Varslelets riktighet" }
    _value={this.ForecastCorrectName}
    ></varsom-key-value>
    :""}

    {this.AvalancheDevelopment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation3.AvalancheDevelopment : "Utvikling" }
    _value={this.AvalancheDevelopment}
    ></varsom-key-value>
    :""}

    {this.ForecastComment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation3.ForecastComment : "Kommentar" }
    _value={this.ForecastComment}
    ></varsom-key-value>
    :""}


{this.AvalancheDangerTID ? 
<div>
  <p>{this.strings ? this.strings.Observations.AvalancheEvaluation.AvalancheDangerTID : "Faregrad"}</p>
  
<span><img src={getAssetPath(`/assets/svg/avalanche/Icon-Avalanche-Danger-Level-${getDangerTypeSvg(this.AvalancheDangerTID)}`)}></img> 1 Liten</span> 
 </div>
: ""}

</div>
    
    </div>
  }
    
  }

  
  
