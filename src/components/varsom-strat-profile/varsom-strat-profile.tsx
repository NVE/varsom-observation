import { Component, Prop, h } from '@stencil/core';
import { Attachment, StratProfileLayer } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';

@Component({
  tag: 'varsom-strat-profile',
  styleUrl: 'varsom-strat-profile.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomStratProfile {

  @Prop({mutable: true}) strings: any;
  @Prop() shortVersion: any;
  @Prop() TotalDepth:	any;
  @Prop() Layers: StratProfileLayer[];
  @Prop() Attachments: Attachment[];

  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings();
  }

  render(){
    return <span> 
  

      {this.Layers.map((el: StratProfileLayer = {}) =>{
            return <varsom-strat-profile-layer
            strings={this.strings}
            shortVersion={this.shortVersion ? this.shortVersion : null}
            GrainFormPrimaryTName={el.GrainFormPrimaryTName ? el.GrainFormPrimaryTName : null}
            GrainFormSecondaryTName={el.GrainFormSecondaryTName ? el.GrainFormSecondaryTName : null}
            HardnessTName={el.HardnessTName ? el.HardnessTName : null}
            HardnessBottomTName={el.HardnessBottomTName ? el.HardnessBottomTName : null}
            WetnessTName={el.WetnessTName ? el.WetnessTName : null}
            CriticalLayerTName={el.CriticalLayerTName ? el.CriticalLayerTName : null}
            DepthTop={el.DepthTop ? el.DepthTop : null}
            Thickness={el.Thickness ? el.Thickness : null}
            GrainFormPrimaryTID={el.GrainFormPrimaryTID ? el.GrainFormPrimaryTID : null}
            GrainFormSecondaryTID={el.GrainFormSecondaryTID ? el.GrainFormSecondaryTID : null}
            GrainSizeAvg={el.GrainSizeAvg ? el.GrainSizeAvg : null}
            GrainSizeAvgMax={el.GrainSizeAvgMax ? el.GrainSizeAvgMax : null}
            HardnessTID={el.HardnessTID ? el.HardnessTID : null}
            HardnessBottomTID={el.HardnessBottomTID ? el.HardnessBottomTID : null}
            WetnessTID={el.WetnessTID ? el.WetnessTID : null}
            CriticalLayerTID={el.CriticalLayerTID ? el.CriticalLayerTID : null}
            Comment={el.Comment ? el.Comment : null}
            SortOrder={el.SortOrder ? el.SortOrder : null}
            >

            </varsom-strat-profile-layer>
        })
        }     


    </span>
  }
    
  }

  
  
