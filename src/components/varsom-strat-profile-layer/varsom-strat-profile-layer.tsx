import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-strat-profile-layer',
  styleUrl: 'varsom-strat-profile-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomStratProfileLayer {

  @Prop() shortVersion: string;
  @Prop() GrainFormPrimaryTName: string;
  @Prop() GrainFormSecondaryTName: string;
  @Prop() HardnessTName: string;
  @Prop() HardnessBottomTName: string;
  @Prop() WetnessTName: string;
  @Prop() CriticalLayerTName: string;
  @Prop() DepthTop: number;
  @Prop() Thickness: number;
  @Prop() GrainFormPrimaryTID: number;
  @Prop() GrainFormSecondaryTID: number;
  @Prop() GrainSizeAvg: number;
  @Prop() GrainSizeAvgMax: number;
  @Prop() HardnessTID: number;
  @Prop() HardnessBottomTID: number;
  @Prop() WetnessTID: number;
  @Prop() CriticalLayerTID: number;
  @Prop() Comment: string;
  @Prop() SortOrder: number;

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

  
  
