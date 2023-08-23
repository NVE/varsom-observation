import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings} from '../../utils/locale';
import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-avalanche-danger-obs',
  styleUrl: 'varsom-avalanche-danger-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheDangerObs {

  private strings: any
  @Prop() shortVersion: any;
  @Prop() DangerSignName: any;
  @Prop() AvalancheDangerObsID: any;
  @Prop() Comment: any;
  @Prop() DangerSignTID: any;
  @Prop() Attachments: Attachment[];
    
  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }
  
  render(){
    return <div>
    <div class="parent"> 

    {this.DangerSignName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheDangerObs.DangerSignTID : (this.shortVersion ? null : "Type") }
    _value={this.DangerSignName}
    ></varsom-key-value>
    :""}

    <div>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.DangerObs.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    </div>
 
    </div>

    </div>
  }
    
  }

  
  
