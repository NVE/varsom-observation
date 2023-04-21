import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { getDangerTypeSvg } from '../../utils/utils';
import { Attachment } from '../varsom-observasjon/observation-model';

@Component({
  tag: 'varsom-avalanche-evaluation',
  styleUrl: 'varsom-avalanche-evaluation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvaluation {

  @Prop() strings: any;
  @Prop() RegID: any;
  @Prop() CanPublish: any;
  @Prop() AvalancheDangerTID: any;
  @Prop() AvalancheDangerName: any;
  @Prop() ValidExposition: any;
  @Prop() ValidHeightRelative: any;
  @Prop() ValidHeightFrom: any;
  @Prop() ValidHeigtTo: any;
  @Prop() AvalancheProblemTID1: any;
  @Prop() AvalancheProblemName1: any;
  @Prop() AvalancheProblemTID2: any;
  @Prop() AvalancheProblemName2: any;
  @Prop() AvalancheProblemTID3: any;
  @Prop() AvalancheProblemName3: any;
  @Prop() AvalancheEvaluation1: any;
  @Prop() Comment: any;
  @Prop() Attachments: Attachment[];


  render(){
    return <div class="container"> 

    <div class="content">
    {this.AvalancheEvaluation1 ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation.AvalancheEvaluation1 : "Skredfareurdering" }
    _value={this.AvalancheEvaluation1}
    ></varsom-key-value>
    :""}

{this.AvalancheDangerTID ? 
<div>
  <p>{this.strings ? this.strings.Observations.AvalancheEvaluation.AvalancheDangerTID : "Faregrad"}</p>
  
<span><img src={getAssetPath(`/assets/svg/avalanche/Icon-Avalanche-Danger-Level-${getDangerTypeSvg(this.AvalancheDangerTID)}`)}></img> 1 Liten</span> 
 </div>
: ""}

<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

</div>

{this.Attachments ? 
      <div>
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
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

  
  
