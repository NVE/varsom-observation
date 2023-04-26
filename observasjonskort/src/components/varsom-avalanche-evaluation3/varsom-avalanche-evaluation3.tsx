import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { getDangerTypeSvg } from '../../utils/utils';
import { Attachment } from '../varsom-observasjon/observation-model';

@Component({
  tag: 'varsom-avalanche-evaluation3',
  styleUrl: 'varsom-avalanche-evaluation3.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvaluation3 {

  @Prop() strings: any;
  @Prop() shortVersion: any;
  @Prop() AvalancheDangerName: any;
  @Prop() ForecastCorrectName: any;
  @Prop() AvalancheDangerTID: any;
  @Prop() AvalancheEvaluation: any;
  @Prop() AvalancheDevelopment: any;
  @Prop() ForecastCorrectTID: any;
  @Prop() ForecastComment: any;
  @Prop() Attachments: Attachment[];


  render(){
    return <div class="container">
    
    <div class="content"> 
    {this.AvalancheEvaluation ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvaluation3.ObsName : (this.shortVersion ? null : "Skredfareurdering") }
    _value={this.AvalancheEvaluation}
    ></varsom-key-value>
    :""}

    {this.ForecastCorrectName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvaluation3.ForecastCorrectTID : (this.shortVersion ? null : "Varslelets riktighet") }
    _value={this.ForecastCorrectName}
    ></varsom-key-value>
    :""}

    {this.AvalancheDevelopment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvaluation3.AvalancheDevelopment : (this.shortVersion ? null : "Utvikling") }
    _value={this.AvalancheDevelopment}
    ></varsom-key-value>
    :""}

    {this.ForecastComment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvaluation3.ForecastComment : (this.shortVersion ? null : "Kommentar") }
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

{this.Attachments ? 
      <div>
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            shortVersion={this.shortVersion ? this.shortVersion : null}
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </div> : ""}
    
    </div>
  }
    
  }

  
  
