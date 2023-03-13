import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-activity-obs2',
  styleUrl: 'varsom-avalanche-activity-obs2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheActivityObs2 {

  @Prop() strings: any;
  @Prop() comment: any;
  @Prop() avalCauseName: any;
  @Prop() dtStart: any;
 
  
  render(){
    return <div> 

      {this.dtStart ? 
      <span>
      <label>{this.strings.Observations.AvalancheActivityObs.DtAvalancheTime}: </label>
      {this.dtStart}
      </span> : ""}

      {this.avalCauseName ? 
      <span>
      <label>{this.strings.Observations.AvalancheObs.AvalCauseTID} </label> {/* correct ? */ }
      {this.avalCauseName}
      </span> : ""}

      {this.comment ? 
      <span>
      <label>{this.strings.Observations.AvalancheActivityObs.Comment}: </label>
      {this.comment}
      </span> : ""}
     

      

    
    </div>
  }
    
  }

  
  
