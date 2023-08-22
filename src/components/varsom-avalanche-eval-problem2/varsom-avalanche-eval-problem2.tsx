import { Component, Prop, h} from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';


@Component({
  tag: 'varsom-avalanche-eval-problem2',
  styleUrl: 'varsom-avalanche-eval-problem2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvalProblem2 {

  @Prop({mutable: true}) strings: any;
  @Prop() shortVersion: any;
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
  @Prop() Attachments: Attachment[];
  
  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings();
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
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheProblem.AvalancheType : (this.shortVersion ? null : "Skredtype") }
    _value={this.AvalancheExtName}
    ></varsom-key-value>
    :""}

    {this.AvalPropagationName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheProblem.Propagation : (this.shortVersion ? null : "Utbredelse") }
    _value={this.AvalPropagationName}
    ></varsom-key-value>
    :""}
  
    {this.AvalCauseDepthName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvalProblem2.AvalCauseDepthTID : (this.shortVersion ? null : "Avstand fra overflaten til det svake laget") }
    _value={this.AvalCauseDepthName}
    ></varsom-key-value>
    :""}

    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvalProblem2.AvalCauseAttributeLightTID : (this.shortVersion ? null : "Ugunstige egenskaper på det svake laget") }
    _value={this.AvalCauseAttributeLightName ? this.AvalCauseAttributeLightName : "" + 
    this.AvalCauseAttributeThinName ? this.AvalCauseAttributeThinName : "" +
    this.AvalCauseAttributeSoftName ? this.AvalCauseAttributeSoftName : "" + 
    this.AvalCauseAttributeCrystalName ? this.AvalCauseAttributeCrystalName : ""
    }
    ></varsom-key-value>

    {this.AvalProbabilityName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvalProblem2.AvalProbabilityTID : (this.shortVersion ? null : "Sannsynlighet for skred") }
    _value={this.AvalProbabilityName}
    ></varsom-key-value>
    :""}

    {this.AvalTriggerSimpleName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvalProblem2.AvalTriggerSimpleTID : (this.shortVersion ? null : "Sannsynlighet for å løse ut skred") }
    _value={this.AvalTriggerSimpleName}
    ></varsom-key-value>
    :""}

    {this.DestructiveSizeName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvalProblem2.DestructiveSizeTID : (this.shortVersion ? null : "Størrelse på forventet skred") }
    _value={this.DestructiveSizeName}
    ></varsom-key-value>
    :""}

    {this.ValidExposition ? 
    <div><img src={(`src/assets/svg/ext/${this.ValidExposition}.svg`)}></img></div>
    : ""}

    <div>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheEvalProblem2.Comment : (this.shortVersion ? null : "Kommentar") }
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