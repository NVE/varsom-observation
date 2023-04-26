import { Component, Prop, h } from '@stencil/core';
import { Attachment, SnowTempObs } from '../varsom-observasjon/observation-model';

@Component({
  tag: 'varsom-snow-temp',
  styleUrl: 'varsom-snow-temp.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowTemp {

  @Prop() strings?: any;
  @Prop() shortVersion: any;
  @Prop() Layers: SnowTempObs[];
  @Prop() Attachments: Attachment[];
  
  
  render(){
    return <div> 
      {this.Layers.map((el: SnowTempObs = {}) =>{
            return <varsom-snow-temp-obs
            strings={this.strings}
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

  
  
