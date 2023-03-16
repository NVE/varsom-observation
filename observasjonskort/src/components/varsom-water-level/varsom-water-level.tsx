import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-water-level',
  styleUrl: 'varsom-water-level.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWaterLevel {

  @Prop() strings: any;
  @Prop() WaterLevelDescribed: any;
  @Prop() WaterLevelValue: any;
  @Prop() WaterLevelRefTID: any;
  @Prop() WaterLevelRefName: any;
  @Prop() MeasuredDischarge: any;
  @Prop() IsRiver: any;

   
  render(){
    return <div> 

      {this.WaterLevelDescribed ? 
      <span>
      <label>Label mangler: </label>
      {this.WaterLevelDescribed}
      </span> : ""}

      {this.WaterLevelValue ? 
      <span>
      <label>Label mangler: </label>
      {this.WaterLevelValue}
      </span> : ""}

      {this.WaterLevelRefTID ? 
      <span>
      <label>Label mangler: </label>
      {this.WaterLevelRefTID}
      </span> : ""}

      {this.WaterLevelRefName ? 
      <span>
      <label>Label mangler: </label>
      {this.WaterLevelRefName}
      </span> : ""}

      {this.MeasuredDischarge ? 
      <span>
      <label>Label mangler: </label>
      {this.MeasuredDischarge}
      </span> : ""}

      {this.IsRiver ? 
      <span>
      <label>Label mangler: </label>
      {this.IsRiver}
      </span> : ""}

    
    </div>
  }
    
  }

  
  
