import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-water-level2',
  styleUrl: 'varsom-water-level2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWaterLevel2 {

  @Prop() strings: any;
  @Prop() comment: any;
  @Prop() waterAstrayName: any;
  @Prop() observationTimingName: any;
  @Prop() measurementReferenceName: any;
  @Prop() measurementTypeName: any;
   
  render(){
    return <div> 

      {this.waterAstrayName ? 
      <span>
      <label>{this.strings.Observations.WaterLevel2.WaterAstrayTName}: </label>
      {this.waterAstrayName}
      </span> : ""}

      {this.observationTimingName ? 
      <span>
      <label>{this.strings.Observations.WaterLevel2.ObservationTimingTName}: </label>
      {this.observationTimingName}
      </span> : ""}

      {this.measurementReferenceName ? 
      <span>
      <label>{this.strings.Observations.WaterLevel2.MeasurementReferenceTName}: </label>
      {this.measurementReferenceName}
      </span> : ""}

      {this.measurementTypeName ? 
      <span>
      <label>{this.strings.Observations.WaterLevel2.MeasurementTypeTName}: </label>
      {this.measurementTypeName}
      </span> : ""}

      {this.comment ? 
      <span>
      <label>{this.strings.Observations.AvalancheActivityObs.Comment}: </label>
      {this.comment}
      </span> : ""}
     

      

    
    </div>
  }
    
  }

  
  
