import { Component, Prop, h} from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { valueIsNotGiven } from '../../utils/utils';


@Component({
  tag: 'varsom-avalanche-activity-obs2',
  styleUrl: 'varsom-avalanche-activity-obs2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheActivityObs2 {

  @Prop() strings: any;
  @Prop() Comment: any;
  @Prop() shortVersion: any;
  @Prop() AvalCauseName: any;
  @Prop() DtStart: any;
  @Prop() EstimatedNumName: any;
  @Prop() ExposedHeightComboName: any;
  @Prop() AvalancheExtName: any;
  @Prop() AvalTriggerSimpleName: any;
  @Prop() DestructiveSizeName: any;
  @Prop() AvalPropagationName: any;
  @Prop() EstimatedNumTID: any;
  @Prop() DtEnd: any;
  @Prop() ValidExposition: any;
  @Prop() ExposedHeight1: any;
  @Prop() ExposedHeight2: any;
  @Prop() ExposedHeightComboTID: any;
  @Prop() AvalancheExtTID: any;
  @Prop() AvalCauseTID: any;
  @Prop() AvalTriggerSimpleTID: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() AvalPropagationTID: any;
  @Prop() Attachments: Attachment[];
 
  render(){
    return <div class="container">
    
    <div class="parent"> 

    {(this.DtStart && this.DtEnd) ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheActivityObs2.DtAvalancheTime}: </div>
        : <div>Tid: </div>}
        </label>
    {new Date(this.DtStart).toLocaleString("no")} - {new Date(this.DtEnd).toLocaleString("no")}
    </div>
      : ""} 

<div>
    {this.EstimatedNumTID ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheActivityObs2.NumberAndSizeAndTrigger : (this.shortVersion ? null : "Antall, størrelse og skredutløser") }
    _value={(this.EstimatedNumName && !valueIsNotGiven(this.EstimatedNumName) ? (this.EstimatedNumName + ". ") : "" )+ 
    (this.DestructiveSizeName && !valueIsNotGiven(this.DestructiveSizeName) ? (this.DestructiveSizeName + ". ") : "" ) + 
    (this.AvalTriggerSimpleName && !valueIsNotGiven(this.AvalTriggerSimpleName) ? this.AvalTriggerSimpleName : "")}
    ></varsom-key-value>
    :""}
 </div>
 
    {this.AvalPropagationTID? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheActivityObs2.Prevalence : (this.shortVersion ? null : "Utbredelse") }
    _value={this.AvalPropagationName}
    ></varsom-key-value>
    :""}
    

    {this.ValidExposition ? 
    <div><img src={(`src/assets/svg/ext/${this.ValidExposition}.svg`)}></img></div>
    :""}  

    <br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheActivityObs.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    
    {this.Attachments && !this.shortVersion ? 
      <div>
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            CropImage
            >

            </varsom-attachment>
        })
        } </div> : ""}
    
    </div>

    </div>
  }
    
  }

  
  
