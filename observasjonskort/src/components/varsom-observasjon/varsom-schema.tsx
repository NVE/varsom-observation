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
    
      
    
    </div>
  }
    
  }

  
  
