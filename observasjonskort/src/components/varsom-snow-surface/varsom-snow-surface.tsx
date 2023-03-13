import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-snow-surface',
  styleUrl: 'varsom-snow-surface.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowSurface {

  @Prop() strings: any;
  @Prop() snowDepth: any;
  @Prop() snowDriftName: any;
  @Prop() snowSurfaceName: any;
  @Prop() skiConditionsName: any;
  @Prop() newSnowLine: any;
  @Prop() surfaceWaterContentName: any;
  @Prop() comment: any;

  render(){
    return <div> 

      {this.snowDepth ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.SnowDepth}: </label>
      {this.snowDepth}
      </span> : ""}
      
      {this.snowDriftName ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.SnowDriftTName}: </label>
      {this.snowDriftName}
      </span> : ""}

      {this.snowSurfaceName ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.SnowSurfaceTName}: </label>
      {this.snowSurfaceName}
      </span> : ""}

      {this.skiConditionsName ? 
      <span>
      <label>label mangler: </label>
      {this.skiConditionsName}
      </span> : ""}

      {this.newSnowLine ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.NewSnowLine}: </label>
      {this.newSnowLine}
      </span> : ""}
      
      {this.surfaceWaterContentName ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.SurfaceWaterContentTName}</label>
      {this.surfaceWaterContentName}
      </span> : ""}

      {this.comment ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.Comment}: </label>
      {this.comment}
      </span> : ""}






  {/* TEGNING HER... */}    

    
    </div>
  }
    
  }

  
  
