import { Component, Prop, h } from '@stencil/core';
import { Attachment, SnowTempObs } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-snow-temp',
  styleUrl: 'varsom-snow-temp.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowTemp {

  private strings: any
  @Prop() shortVersion: any;
  @Prop() Layers: SnowTempObs[];
  @Prop() Attachments: Attachment[];
  
  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }
  
  render(){
    return <div> 
      {this.Layers.map((el: SnowTempObs = {}) =>{
            return <varsom-snow-temp-obs
            
            shortVersion={this.shortVersion ? this.shortVersion : null}
            Depth={el.Depth ? el.Depth : null}
            SnowTemp={el.SnowTemp ? el.SnowTemp : null}          
            >
            </varsom-snow-temp-obs>
        })
        }

    </div>
  }
    
  }

  
  
