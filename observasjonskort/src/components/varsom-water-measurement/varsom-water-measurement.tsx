import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-water-measurement',
  styleUrl: 'varsom-water-measurement.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWaterMeasurement {

  @Prop() strings: any;
  @Prop() comment: any;
  @Prop() dtMeasurementTime: any;
  @Prop() waterLevelValue: any;
  

  render(){
    return <div> 

      {this.dtMeasurementTime ? 
      <span>
      <label>Label mangler: </label>
      {this.dtMeasurementTime}
      </span> : ""}

      {this.waterLevelValue ? 
      <span>
      <label>{this.strings.Observations.WaterLevel.WaterLevelValue}: </label>
      {this.waterLevelValue}
      </span> : ""}

      {this.comment ? 
      <span>
      <label>{this.strings.Observations.AvalancheActivityObs.Comment}: </label>
      {this.comment}
      </span> : ""}
     

      

    
    </div>
  }
    
  }

  
  
