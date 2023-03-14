import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-danger-obs',
  styleUrl: 'varsom-danger-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomDangerObs {

  @Prop() strings: any;
  @Prop() comment: any;
  @Prop() dangerSignName: any;

  render(){
    return <div> 

      {this.dangerSignName ? 
      <span>
      <label>{this.strings.Observations.DamageObs.DangerSignTName}: </label>
      {this.dangerSignName}
      </span> : ""}

      {this.comment ? 
      <span>
      <label>{this.strings.Observations.GeneralObservation.Comment}: </label>
      {this.comment}
      </span> : ""}
     
    </div>
  }
    
  }

  
  
