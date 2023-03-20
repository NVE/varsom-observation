import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-snow-surface-observation',
  styleUrl: 'varsom-snow-surface-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowSurfaceObservation {

  @Prop() strings: any;
  @Prop() SnowDepth: any;
  @Prop() SnowDriftName: any;
  @Prop() SnowSurfaceName: any;
  @Prop() SkiConditionsName: any;
  @Prop() NewSnowLine: any;
  @Prop() SurfaceWaterContentName: any;
  @Prop() SkiConditionsTID: any;
  @Prop() SurfaceRoughnessName: any;
  @Prop() NewSnowDepth24: any;
  @Prop() SurfaceWaterContentTID: any;
  @Prop() SnowDriftTID: any;
  @Prop() SnowSurfaceTID: any;
  @Prop() Comment: any;
  @Prop() HeightLimitLayeredSnow: any;
  @Prop() SnowLine: any;

  render(){
    return <div> 

not implemented...

      {this.SnowDepth ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.SnowDepth}: </label>
      {this.SnowDepth}
      </span> : ""}
      
      {this.SnowDriftName ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.SnowDriftTName}: </label>
      {this.SnowDriftName}
      </span> : ""}

      {this.SnowSurfaceName ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.SnowSurfaceTName}: </label>
      {this.SnowSurfaceName}
      </span> : ""}

      {this.SkiConditionsName ? 
      <span>
      <label>label mangler: </label>
      {this.SkiConditionsName}
      </span> : ""}

      {this.NewSnowLine ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.NewSnowLine}: </label>
      {this.NewSnowLine}
      </span> : ""}
      
      {this.SurfaceWaterContentName ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.SurfaceWaterContentTName}</label>
      {this.SurfaceWaterContentName}
      </span> : ""}

      {this.Comment ? 
      <span>
      <label>{this.strings.Observations.SnowSurfaceObservation.Comment}: </label>
      {this.Comment}
      </span> : ""}






  {/* TEGNING HER... */}    

    
    </div>
  }
    
  }

  
  
