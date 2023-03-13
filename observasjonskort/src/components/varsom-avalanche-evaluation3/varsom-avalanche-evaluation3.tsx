import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-evaluation3',
  styleUrl: 'varsom-avalanche-evaluation3.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvaluation3 {

  @Prop() strings: any;
  @Prop() avalancheEvaluation: any;
  @Prop() avalancheDevelopment: any;
  @Prop() comment: any;



  render(){
    return <div> 

      {this.avalancheEvaluation ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvaluation3.AvalancheEvaluation}: </label>
      {this.avalancheEvaluation}
      </span> : ""}

      {this.avalancheEvaluation ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvaluation3.AvalancheDevelopment}: </label>
      {this.avalancheEvaluation}
      </span> : ""}

      {this.comment ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvaluation3.ForecastComment}: </label>
      {this.comment}
      </span> : ""}






  {/* TEGNING HER... */}    

    
    </div>
  }
    
  }

  
  
