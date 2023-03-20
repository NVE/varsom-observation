import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-strat-profile-layer',
  styleUrl: 'varsom-strat-profile-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomStratProfileLayer {

  @Prop() strings: any;
  @Prop() GrainFormPrimaryTName: any;
  @Prop() GrainFormSecondaryTName: any;
  @Prop() HardnessTName: any;
  @Prop() HardnessBottomTName: any;
  @Prop() WetnessTName: any;
  @Prop() CriticalLayerTName: any;
  @Prop() DepthTop: any;
  @Prop() Thickness: any;
  @Prop() GrainFormPrimaryTID: any;
  @Prop() GrainFormSecondaryTID: any;
  @Prop() GrainSizeAvg: any;
  @Prop() GrainSizeAvgMax: any;
  @Prop() HardnessTID: any;
  @Prop() HardnessBottomTID: any;
  @Prop() WetnessTID: any;
  @Prop() CriticalLayerTID: any;
  @Prop() Comment: any;
  @Prop() SortOrder: any;



  render(){
    return <div> 

      not implemented
  
    </div>
  }
    
  }

  
  
