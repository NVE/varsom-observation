import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-schema',
  styleUrl: 'varsom-schema.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSchema {

  @Prop() strings: any;
  @Prop() observer: any;
  @Prop() registrationName: any;
  @Prop() comment: any;
  @Prop() photographer: any;
  @Prop() copyright: any;
  @Prop() dtStart: any;
  @Prop() avalCauseName: any;
  @Prop() dtAvalancheTime: any;
  @Prop() waterAstrayName: any;
  @Prop() waterLevelStateName: any;
  @Prop() waterLevel: any;
  @Prop() observationTimingName: any;
  @Prop() measurementTypeName: any;
  @Prop() measurementReferenceName: any;
  @Prop() dtMeasurementTime: any;
  @Prop() waterLevelValue : any;
  @Prop() weatherPrecipitationName: any;
  @Prop() airTemperature: any;
  @Prop() avalancheExtName: any;
  @Prop() avalCauseDepthName: any;
  @Prop() avalCauseAttributeSoftName: any;
  @Prop() avalTriggerSimpleName: any;
  @Prop() destructiveSizeName: any;
  @Prop() avalPropagationName: any;
  @Prop() avalancheEvaluation: any;
  @Prop() avalancheDevelopment: any;
  @Prop() forecastComment: any;
  @Prop() dangerSignName: any;
  @Prop() snowDepth: any;
  @Prop() surfaceWaterContentName: any;
  @Prop() snowDriftName: any;
  @Prop() snowSurfaceName: any;
  @Prop() skiConditionsName: any;
  @Prop() newSnowLine: any;

  
  
  
  
  
  
  
  
  
  


  
  

  render(){
    return <div> 
       {this.observer ? 
      <span>
      <label>label mangler: </label>
      {this.observer}
      </span> : ""}
    
      {this.registrationName ? 
      <span>
      <label>label mangler: </label>
      {this.registrationName}
      </span> : ""}

      {this.comment ? 
      <span>
      <label>label mangler: </label>
      {this.comment}
      </span> : ""}

      {this.photographer ? 
      <span>
      <label>label mangler: </label>
      {this.photographer}
      </span> : ""}
    
      {this.registrationName ? 
      <span>
      <label>label mangler: </label>
      {this.registrationName}
      
      </span> : ""}
      {this.copyright ? 
      <span>
      <label>label mangler: </label>
      {this.copyright}
      </span> : ""}

      {this.dtStart ? 
      <span>
      <label>label mangler: </label>
      {this.dtStart}
      </span> : ""}

      {this.avalCauseName ? 
      <span>
      <label>label mangler: </label>
      {this.avalCauseName}
      </span> : ""}

      {this.dtAvalancheTime ? 
      <span>
      <label>label mangler: </label>
      {this.dtAvalancheTime}
      </span> : ""}

      {this.dtMeasurementTime ? 
      <span>
      <label>label mangler: </label>
      {this.dtMeasurementTime}
      </span> : ""}

      {this.waterLevelValue ? 
      <span>
      <label>label mangler: </label>
      {this.waterLevelValue}
      </span> : ""}

      {this.avalCauseName ? 
      <span class="header">
      <label>label mangler: </label>
      {this.avalCauseName}
      </span> : ""}

      {this.avalancheEvaluation ? 
      <span class="header">
      <label>label mangler: </label>
      {this.avalancheEvaluation}
      </span> : ""}

      {this.avalancheEvaluation ? 
      <span class="header">
      <label>label mangler: </label>
      {this.avalancheEvaluation}
      </span> : ""}

      {this.avalancheDevelopment ? 
      <span class="header">
      <label>label mangler: </label>
      {this.avalancheDevelopment}
      </span> : ""}

      {this.forecastComment ? 
      <span class="header">
      <label>label mangler: </label>
      {this.forecastComment}
      </span> : ""}

      {this.dangerSignName ? 
      <span class="header">
      <label>label mangler: </label>
      {this.dangerSignName}
      </span> : ""}

      {this.snowDepth ? 
      <span class="header">
      <label>label mangler: </label>
      {this.snowDepth}
      </span> : ""}

      {this.surfaceWaterContentName ? 
      <span class="header">
      <label>label mangler: </label>
      {this.surfaceWaterContentName}
      </span> : ""}

      {this.snowDriftName ? 
      <span class="header">
      <label>label mangler: </label>
      {this.snowDriftName}
      </span> : ""}

      {this.snowSurfaceName ? 
      <span class="header">
      <label>label mangler: </label>
      {this.snowSurfaceName}
      </span> : ""}

      {this.skiConditionsName ? 
      <span class="header">
      <label>label mangler: </label>
      {this.skiConditionsName}
      </span> : ""}

      {this.newSnowLine ? 
      <span class="header">
      <label>label mangler: </label>
      {this.newSnowLine}
      </span> : ""}

      

    
    </div>
  }
    
  }

  
  
