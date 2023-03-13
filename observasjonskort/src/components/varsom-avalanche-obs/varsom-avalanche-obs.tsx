import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-obs2',
  styleUrl: 'varsom-avalanche-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheObs {

  @Prop() strings: any;
  @Prop() dtAvalancheTime: any;
  @Prop() avalCauseName: any;
  @Prop() comment: any;
 

  render(){
    return <div> 

      {this.dtAvalancheTime ? 
      <span>
      <label>{this.strings.Observations.AvalancheActivityObs.DtAvalancheTime}: </label>
      {this.dtAvalancheTime}
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

  
  
