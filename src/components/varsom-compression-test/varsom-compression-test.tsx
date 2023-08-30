import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { valueIsNotGiven } from '../../utils/utils';
import { getLocaleComponentStrings } from '../../utils/locale';


import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-compression-test',
  styleUrl: 'varsom-compression-test.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomCompressionTest {

  private strings;
  @Prop() shortVersion: string;
  @Prop() CompressionTestTID: number;
  @Prop() CompressionTestName: string;
  @Prop() TapsFracture: number;
  @Prop() TapsFullPropagation: number;
  @Prop() PropagationTID: number;
  @Prop() PropagationName: string;
  @Prop() FractureDepth: number;
  @Prop() PstX: number;
  @Prop() PstY: number;
  @Prop() RbRelease: number;
  @Prop() StabilityEvalTID: number;
  @Prop() StabilityEvalName: string;
  @Prop() ComprTestFractureTID: number;
  @Prop() ComprTestFractureName: string;
  @Prop() IncludeInSnowProfile: boolean;
  @Prop() Comment: string;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
    return <div>
    <div class="parent"> 
{/* TODO: se regobs-kode for visning av tabell.... */ } 
    
    {this.PropagationName && this.FractureDepth && this.ComprTestFractureName ?
    <varsom-key-value
    _key={this.strings.Observations.CompressionTest.Test}
    _value={this.PropagationName + "@" + this.FractureDepth * 100 + "cm(" + this.ComprTestFractureName +")"}
    ></varsom-key-value>
    :""}
    
    {this.StabilityEvalName && !valueIsNotGiven(this.StabilityEvalName) ? 
    <varsom-key-value
    _key={this.strings.Observations.CompressionTest.StabilityEvalTID}
    _value={this.StabilityEvalName}
    ></varsom-key-value>
    :""}

<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings.Observations.CompressionTest.Comment}
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

    
  }
    
  }

  
  
