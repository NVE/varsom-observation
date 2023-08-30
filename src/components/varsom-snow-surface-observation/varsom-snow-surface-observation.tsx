import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';


import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-snow-surface-observation',
  styleUrl: 'varsom-snow-surface-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowSurfaceObservation {

  private strings: any
  @Prop() shortVersion: any;
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
  
  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
    return <div> 

<varsom-label
      label={this.strings.Observations.SnowSurfaceObservation.ObsName}
      ></varsom-label>

<div class="content">
{this.SnowDepth ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowSurfaceObservation.SnowDepth}
    _value={this.SnowDepth * 100}
    ></varsom-key-value>
    :""}

{this.SnowDriftName ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowSurfaceObservation.SnowDriftTName}
    _value={this.SnowDriftName}
    ></varsom-key-value>
    :""}

{this.NewSnowDepth24 ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowSurfaceObservation.NewSnowDepth24}
    _value={this.NewSnowDepth24 * 100}
    ></varsom-key-value>
    :""}

{this.SnowLine ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowSurfaceObservation.SnowLine}
    _value={this.SnowLine}
    ></varsom-key-value>
    : ""}

{this.NewSnowLine ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowSurfaceObservation.NewSnowLine}
    _value={this.NewSnowLine}
    ></varsom-key-value>
    : ""}

{this.SnowSurfaceName ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowSurfaceObservation.SnowSurfaceTName}
    _value={this.SnowSurfaceName}
    ></varsom-key-value>
    : ""}

{this.SurfaceWaterContentName ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowSurfaceObservation.SurfaceWaterContentTName}
    _value={this.SurfaceWaterContentName}
    ></varsom-key-value>
    : ""}

{this.FootPenetration ?
    <varsom-key-value
    _key={this.strings.Observations.SnowSurfaceObservation.FootPenetration}
    _value={this.FootPenetration}
    ></varsom-key-value>
    : ""}

{this.SkiConditionsName ?
    <varsom-key-value
    _key={this.shortVersion ? null : "Innsynkning fot" }
    _value={this.SkiConditionsName}
    ></varsom-key-value>
    : ""}

    <br></br>
{this.Comment ?
    <varsom-key-value
    _key={this.strings.Observations.SnowSurfaceObservation.Comment}
    _value={this.Comment}
    ></varsom-key-value>
    : ""}
</div>
{(this.Attachments && !this.shortVersion) ? 
      <span class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </span> : ""}


    <div class="border"></div>
    

    </div>
  }
    
  }

  
  
