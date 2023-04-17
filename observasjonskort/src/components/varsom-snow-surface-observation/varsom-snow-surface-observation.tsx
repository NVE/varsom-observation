import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


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
  @Prop() FootPenetration: any;
  @Prop() Attachments: Attachment[];
  

  render(){
    return <div class="container"> 

<varsom-label
      label={this.strings ? this.strings.Observations.SnowSurfaceObservation.ObsName : "Snødekke"}
      ></varsom-label>

<div class="content">
{this.SnowDepth ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowSurfaceObservation.SnowDepth: "Snødybde (cm)" }
    _value={this.SnowDepth * 100}
    ></varsom-key-value>
    :""}

{this.SnowDriftName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowSurfaceObservation.SnowDriftTName: "Snøfokk" }
    _value={this.SnowDriftName}
    ></varsom-key-value>
    :""}

{this.NewSnowDepth24 ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowSurfaceObservation.NewSnowDepth24: "Siste døgn (cm)" }
    _value={this.NewSnowDepth24 * 100}
    ></varsom-key-value>
    :""}

{this.SnowLine ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowSurfaceObservation.SnowLine: "Snøgrense (moh)" }
    _value={this.SnowLine}
    ></varsom-key-value>
    : ""}

{this.NewSnowLine ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowSurfaceObservation.NewSnowLine: "Nysnøgrense (moh)" }
    _value={this.NewSnowLine}
    ></varsom-key-value>
    : ""}

{this.SnowSurfaceName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowSurfaceObservation.SnowSurfaceTName: "Snøoverflate" }
    _value={this.SnowSurfaceName}
    ></varsom-key-value>
    : ""}

{this.SurfaceWaterContentName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowSurfaceObservation.SurfaceWaterContentTName: "Overflatefuktighet" }
    _value={this.SurfaceWaterContentName}
    ></varsom-key-value>
    : ""}

{this.FootPenetration ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowSurfaceObservation.FootPenetration: "Innsynkning fot" }
    _value={this.FootPenetration}
    ></varsom-key-value>
    : ""}

{this.SkiConditionsName ?
    <varsom-key-value
    _key="Ski conditions"
    _value={this.SkiConditionsName}
    ></varsom-key-value>
    : ""}

    <br></br>
{this.Comment ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowSurfaceObservation.Comment: "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    : ""}

{this.Attachments ? 
      <div>
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </div> : ""}

    
    </div>

    </div>
  }
    
  }

  
  
