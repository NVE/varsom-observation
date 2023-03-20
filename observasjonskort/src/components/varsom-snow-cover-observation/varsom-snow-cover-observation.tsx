import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-snow-cover-observation',
  styleUrl: 'varsom-snow-cover-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowCoverObservation {

  @Prop() strings: any;
  @Prop() DepthHoarThickness: any;
  @Prop() CriticalLayerExists: any;
  @Prop() CriticalLayerLocation: any;
  @Prop() CriticalLayerTID: any;
  @Prop() SnowPilotRef: any;
  @Prop() Comment: any;
  @Prop() CriticalLayerName: any;
   
  render(){
    return <div> 


      {this.DepthHoarThickness ? 
      <span>
      <label>Label mangler: </label>
      {this.DepthHoarThickness}
      </span> : ""}

      {this.CriticalLayerExists ? 
      <span>
      <label>Label mangler: </label>
      {this.CriticalLayerExists}
      </span> : ""}
      
      {this.CriticalLayerLocation ? 
      <span>
      <label>Label mangler: </label>
      {this.CriticalLayerLocation}
      </span> : ""}

      {this.CriticalLayerTID ? 
      <span>
      <label>Label mangler: </label>
      {this.CriticalLayerTID}
      </span> : ""}

      {this.SnowPilotRef ? 
      <span>
      <label>Label mangler: </label>
      {this.SnowPilotRef}
      </span> : ""}

      {this.CriticalLayerName ? 
      <span>
      <label>Label mangler: </label>
      {this.CriticalLayerName}
      </span> : ""}

      {this.Comment ? 
      <span>
      <label>Label mangler: </label>
      {this.Comment}
      </span> : ""}

    </div>
  }
    
  }

  
  
