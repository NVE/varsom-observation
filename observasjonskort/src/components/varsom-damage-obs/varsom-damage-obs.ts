import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-damage-obs',
  styleUrl: 'varsom-danger-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomDamageObs {

  @Prop() strings: any;
  @Prop() comment: any;
  @Prop() dangerSignName: any;

  @Prop() geoHazardName: string;
  @Prop() damageTypeName:	string;
  @Prop() attachments?: any;//Attachment[],
  @Prop() geoHazardTID: number; //	integer($int32)
  @Prop() damageTypeTID: number; //	integer($int32)
  @Prop() damagePosition: any;	//LatLng,
  // @Prop() comment:	string;

  // render(){
  //   return <div> 

  //     {this.dangerSignName ? 
  //     <span>
  //     <label>{this.strings.Observations.DamageObs.DangerSignTName}: </label>
  //     {this.dangerSignName}
  //     </span> : ""}

  //     {this.comment ? 
  //     <span>
  //     <label>{this.strings.Observations.GeneralObservation.Comment}: </label>
  //     {this.comment}
  //     </span> : ""}
     
  //   </div>
  // }
    
  }