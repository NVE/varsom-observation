import { Component, Prop, h } from '@stencil/core';
import { getDangerTypeSvg } from '../../utils/utils';
import { Attachment } from '../varsom-observation/observation-model';

import { Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'varsom-avalanche-evaluation',
  styleUrl: 'varsom-avalanche-evaluation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvaluation {

  private strings;
  @Prop() shortVersion: string;
  @Prop() CanPublish: boolean;
  @Prop() AvalancheDangerTID: number;
  @Prop() AvalancheDangerName: string;
  @Prop() ValidExposition: string;
  @Prop() ValidHeightRelative: string;
  @Prop() ValidHeightFrom: number;
  @Prop() ValidHeigtTo: number;
  @Prop() AvalancheProblemTID1: number;
  @Prop() AvalancheProblemName1: string;
  @Prop() AvalancheProblemTID2: number;
  @Prop() AvalancheProblemName2: string;
  @Prop() AvalancheProblemTID3: number;
  @Prop() AvalancheProblemName3: string;
  @Prop() AvalancheEvaluation1: string;
  @Prop() Comment: string;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
    return <div class="container"> 

    <div class="content">
    {this.AvalancheEvaluation1 ? 
    <varsom-key-value
    _key={this.strings.Observations.AvalancheEvaluation.AvalancheEvaluation1}
    _value={this.AvalancheEvaluation1}
    ></varsom-key-value>
    :""}

{this.AvalancheDangerTID ? 
<div>
<p>{this.strings ? this.strings.Observations.AvalancheEvaluation.AvalancheDangerTID : "Faregrad"}</p>
  
  <span><img src={(`src/assets/svg/avalanche/Icon-Avalanche-Danger-Level-${getDangerTypeSvg(this.AvalancheDangerTID)}`)}></img> 
  
  <span class="danger-size">{this.AvalancheDangerName} </span>
  </span> 
   </div>
  : ""}

<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings.Observations.AvalancheEvaluation.Comment}
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

  
  
