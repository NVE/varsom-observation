import { Component, Prop, h} from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';
import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-avalanche-eval-problem2',
  styleUrl: 'varsom-avalanche-eval-problem2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvalProblem2 {

  private strings;
  @Prop() shortVersion: string;
  @Prop() AvalProbabilityTID: number;
  @Prop() AvalProbabilityName: string;
  @Prop() AvalCauseDepthTID: number;
  @Prop() AvalTriggerSimpleName: string;
  @Prop() AvalCauseDepthName: string;
  @Prop() ValidExposition: string;
  @Prop() ExposedHeight1: number;
  @Prop() ExposedHeight2: number;
  @Prop() ExposedHeightComboTID: number;;
  @Prop() ExposedHeightComboName: string;
  @Prop() AvalancheExtTID: number;
  @Prop() AvalancheExtName: string;
  @Prop() AvalCauseTID: number;
  @Prop() AvalCauseName: string;
  @Prop() AvalCauseAttributeLightTID: number;
  @Prop() AvalCauseAttributeLightName: string;
  @Prop() AvalCauseAttributeThinTID: number;
  @Prop() AvalCauseAttributeThinName: string;
  @Prop() AvalCauseAttributeSoftTID: number;
  @Prop() AvalCauseAttributeSoftName: string;
  @Prop() AvalCauseAttributeCrystalTID: number;
  @Prop() AvalCauseAttributeCrystalName: string;
  @Prop() DestructiveSizeTID: number;
  @Prop() AvalTriggerSimpleTID: number;
  @Prop() DestructiveSizeName: string;
  @Prop() AvalPropagationTID: number;
  @Prop() AvalPropagationName: string;
  @Prop() Comment: string;
  @Prop() Attachments: Attachment[];
  
  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){

    return <div>
    <div class="parent"> 

    {this.AvalCauseName ? 
    <varsom-label-small
    label={this.AvalCauseName}
    ></varsom-label-small>
    :""}
    

    {this.AvalancheExtName ? 
    <varsom-key-value
    _key={this.strings.Observations.AvalancheProblem.AvalancheType}
    _value={this.AvalancheExtName}
    ></varsom-key-value>
    :""}

 
    {this.AvalPropagationName ? 
    <varsom-key-value
    _key={this.strings.Observations.AvalancheProblem.Propagation}
    _value={this.AvalPropagationName}
    ></varsom-key-value>
    :""}
  
    {this.AvalCauseDepthName ? 
    <varsom-key-value
    _key={this.strings.Observations.AvalancheEvalProblem2.AvalCauseDepthTID}
    _value={this.AvalCauseDepthName}
    ></varsom-key-value>
    :""}

    <varsom-key-value
    _key={this.strings.Observations.AvalancheEvalProblem2.AvalCauseAttributeLightTID}
    _value={this.AvalCauseAttributeLightName ? this.AvalCauseAttributeLightName : "" + 
    this.AvalCauseAttributeThinName ? this.AvalCauseAttributeThinName : "" +
    this.AvalCauseAttributeSoftName ? this.AvalCauseAttributeSoftName : "" + 
    this.AvalCauseAttributeCrystalName ? this.AvalCauseAttributeCrystalName : ""
    }
    ></varsom-key-value>

    {this.AvalProbabilityName ? 
    <varsom-key-value
    _key={this.strings.Observations.AvalancheEvalProblem2.AvalProbabilityTID}
    _value={this.AvalProbabilityName}
    ></varsom-key-value>
    :""}

    {this.AvalTriggerSimpleName ? 
    <varsom-key-value
    _key={this.strings.Observations.AvalancheEvalProblem2.AvalTriggerSimpleTID}
    _value={this.AvalTriggerSimpleName}
    ></varsom-key-value>
    :""}

    {this.DestructiveSizeName ? 
    <varsom-key-value
    _key={this.strings.Observations.AvalancheEvalProblem2.DestructiveSizeTID}
    _value={this.DestructiveSizeName}
    ></varsom-key-value>
    :""}

    <varsom-exposed-height
    ValidExposition={this.ValidExposition ?? null}
    ExposedHeight1={this.ExposedHeight1 ?? null}
    ExposedHeight2={this.ExposedHeight2 ?? null}
    ></varsom-exposed-height>
  
    <div>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings.Observations.AvalancheEvalProblem2.Comment}
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    </div>
    
    
    {(this.Attachments && !this.shortVersion) ? 
      <span class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </span> : ""}
    
    
  </div>
</div>
 
  
  }
    
}