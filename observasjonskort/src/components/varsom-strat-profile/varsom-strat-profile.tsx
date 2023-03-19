import { Component, Prop, h } from '@stencil/core';
import { StratProfileLayer } from '../varsom-observasjon/observation-model';

@Component({
  tag: 'varsom-strat-profile',
  styleUrl: 'varsom-strat-profile.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomStratProfile {

  @Prop() strings: any;
  @Prop() TotalDepth:	any;
  @Prop() Layers: StratProfileLayer[]



  render(){
    return <div> 

      {this.TotalDepth ? 
      <span>
      <label>Label mangler: </label>
      {this.TotalDepth}
      </span> : ""}
  
      {this.Layers.map((el: StratProfileLayer = {}) =>{
            return <varsom-strat-profile-layer
            strings={this.strings}
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


    </div>
  }
    
  }

  
  