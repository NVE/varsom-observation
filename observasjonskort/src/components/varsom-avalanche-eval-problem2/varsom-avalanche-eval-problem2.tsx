import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-eval-problem2',
  styleUrl: 'varsom-avalanche-eval-problem2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvalProblem2 {

  @Prop() strings: any;
  @Prop() avalCauseName: any;
  @Prop() avalancheExtName: any;
  @Prop() avalCauseDepthName: any;
  @Prop() avalCauseAttributeSoftName: any;
  @Prop() avalTriggerSimpleName: any;
  @Prop() destructiveSizeName: any;
  @Prop() avalPropagationName: any;
  

  render(){
    return <div> 

      {this.avalCauseName ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalCauseTID}: </label>
      {this.avalCauseName}
      </span> : ""}

      {this.avalancheExtName ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalancheExtTID}: </label>
      {this.avalancheExtName}
      </span> : ""}

      {this.avalCauseDepthName ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalCauseDepthTID}: </label>
      {this.avalCauseDepthName}
      </span> : ""}

      {this.avalCauseAttributeSoftName ? 
      <span>
      <label>Label mangler: </label>
      {this.avalCauseAttributeSoftName}
      </span> : ""}

      {this.avalTriggerSimpleName ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalTriggerSimpleTID}: </label>
      {this.avalTriggerSimpleName}
      </span> : ""}

      {this.destructiveSizeName ? 
      <span>
      <label>Label mangler: </label>
      {this.destructiveSizeName}
      </span> : ""}

      {this.avalPropagationName ? 
      <span>
      <label>Label mangler: </label>
      {this.avalPropagationName}
      </span> : ""}


  {/* TEGNING HER... */}    

    
    </div>
  }
    
  }

  
  
