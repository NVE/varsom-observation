import { Component, Prop, h } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';


import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-strat-profile-layer',
  styleUrl: 'varsom-strat-profile-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomStratProfileLayer {

  @Prop() shortVersion: any;
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
  private strings: any;

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
    return <span> 

    {this.Thickness ? <span>
      {(this.Thickness * 100) + "cm"}
    </span> : "" }

    {(this.HardnessTID && this.HardnessTName) ? <span>
      {this.HardnessTName + ((this.HardnessBottomTID && this.HardnessBottomTID > 0) ? this.HardnessBottomTName : "") + ", "}
    </span> : "" }

    {(this.GrainFormPrimaryTID && this.GrainFormPrimaryTName) ? <span>
      {this.GrainFormPrimaryTName + ((this.GrainFormSecondaryTID && this.GrainFormSecondaryTID > 0) ? this.GrainFormSecondaryTName : "") + " , "}
    </span> : "" }

    {this.GrainSizeAvg ? <span>
      {(this.GrainSizeAvg * 100) + " mm " + 
      (this.GrainSizeAvgMax ? (this.GrainSizeAvgMax * 100) : "") + ", "}
    </span> : "" }
    
    {this.WetnessTID ? <span>
      {this.WetnessTName + ", "}
    </span> : "" }
  
    {this.CriticalLayerTID ? <span>
      {this.CriticalLayerTName + ", "}
    </span> : "" }

    {this.Comment ? <div>
      {this.Comment}
    </div> : "" }

    </span>
  }
    
  }

  
  
