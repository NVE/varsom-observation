import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-eval-problem2',
  styleUrl: 'varsom-avalanche-eval-problem2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvalProblem2 {

  @Prop() strings: any;
  @Prop() AvalProbabilityTID: any;
  @Prop() AvalProbabilityName: any;
  @Prop() AvalCauseDepthTID: any;
  @Prop() AvalTriggerSimpleName: any;
  @Prop() AvalCauseDepthName: any;
  @Prop() ValidExposition: any;
  @Prop() ExposedHeight1: any;
  @Prop() ExposedHeight2: any;
  @Prop() ExposedHeightComboTID: any;
  @Prop() ExposedHeightComboName: any;
  @Prop() AvalancheExtTID: any;
  @Prop() AvalancheExtName: any;
  @Prop() AvalCauseTID: any;
  @Prop() AvalCauseName: any;
  @Prop() AvalCauseAttributeLightTID: any;
  @Prop() AvalCauseAttributeLightName: any;
  @Prop() AvalCauseAttributeThinTID: any;
  @Prop() AvalCauseAttributeThinName: any;
  @Prop() AvalCauseAttributeSoftTID: any;
  @Prop() AvalCauseAttributeSoftName: any;
  @Prop() AvalCauseAttributeCrystalTID  : any;
  @Prop() AvalCauseAttributeCrystalName: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() AvalTriggerSimpleTID: any;
  @Prop() DestructiveSizeName: any;
  @Prop() AvalPropagationTID: any;
  @Prop() AvalPropagationName: any;
  @Prop() Comment: any;
  

  render(){
    return <div> 

      {this.AvalProbabilityTID ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalProbabilityTID}: </label>
      {this.AvalProbabilityTID}
      </span> : ""}

      {this.AvalProbabilityName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalProbabilityName}
      </span> : ""}

      {this.AvalTriggerSimpleTID ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalTriggerSimpleTID}: </label>
      {this.AvalTriggerSimpleTID}
      </span> : ""}

      {this.AvalCauseDepthTID ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalCauseDepthTID}: </label>
      {this.AvalCauseDepthTID}
      </span> : ""}

      {this.ValidExposition ? 
      <span>
      <label>Label mangler: </label>
      {this.ValidExposition}
      </span> : ""}

      {this.ExposedHeight1 ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedHeight1}
      </span> : ""}

      {this.ExposedHeight2 ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedHeight2}
      </span> : ""}

      {this.ExposedHeightComboTID ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedHeightComboTID}
      </span> : ""}

      {this.ExposedHeightComboName ? 
      <span>
      <label>Label mangler: </label>
      {this.ExposedHeightComboName}
      </span> : ""}

      {this.AvalancheExtName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheExtName}
      </span> : ""}

      {this.AvalancheExtTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheExtTID}
      </span> : ""}

      {this.AvalCauseTID ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalCauseTID}: </label>
      {this.AvalCauseTID}
      </span> : ""}

      {this.AvalCauseDepthName ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalCauseDepthTID}: </label>
      {this.AvalCauseDepthName}
      </span> : ""}

      {this.AvalCauseAttributeLightTID ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalCauseAttributeLightTID}: </label>
      {this.AvalCauseAttributeLightTID}
      </span> : ""}

      {this.AvalCauseAttributeLightName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseAttributeLightName}
      </span> : ""}
      
      {this.AvalCauseAttributeSoftName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseAttributeSoftName}
      </span> : ""}

      {this.AvalCauseAttributeThinTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseAttributeThinTID}
      </span> : ""}

      {this.AvalCauseAttributeThinName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseAttributeThinName}
      </span> : ""}

      {this.AvalCauseAttributeSoftTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseAttributeSoftTID}
      </span> : ""}

      {this.AvalCauseAttributeCrystalTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseAttributeCrystalTID}
      </span> : ""}

      {this.AvalCauseAttributeCrystalName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalCauseAttributeCrystalName}
      </span> : ""}
      
      {this.DestructiveSizeTID ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.DestructiveSizeTID}: </label>
      {this.DestructiveSizeTID}
      </span> : ""}

      {this.AvalPropagationTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalPropagationTID}
      </span> : ""} 

      {this.AvalTriggerSimpleName ? 
      <span>
      <label>{this.strings.Observations.AvalancheEvalProblem2.AvalTriggerSimpleTID}: </label>
      {this.AvalTriggerSimpleName}
      </span> : ""}

      {this.DestructiveSizeName ? 
      <span>
      <label>Label mangler: </label>
      {this.DestructiveSizeName}
      </span> : ""}

      {this.AvalPropagationName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalPropagationName}
      </span> : ""}


  {/* TEGNING HER... */}    

    
    </div>
  }
    
  }

  
  
