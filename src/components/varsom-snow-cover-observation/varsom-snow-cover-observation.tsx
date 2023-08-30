import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';


import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-snow-cover-observation',
  styleUrl: 'varsom-snow-cover-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowCoverObservation {

  private strings;
  @Prop() shortVersion: string;
  @Prop() DepthHoarThickness: number;
  @Prop() CriticalLayerExists: boolean;
  @Prop() CriticalLayerLocation: number ;
  @Prop() CriticalLayerTID: number;
  @Prop() SnowPilotRef: string;
  @Prop() Comment: string;
  @Prop() CriticalLayerName: string;
  @Prop() Attachments: Attachment[];
   

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
    return <div class="container"> 

<varsom-label
      label={this.strings ? this.strings.Observations.SnowCover.ObsName : "Snøprofil"}
      ></varsom-label>

<div class="content">

{this.DepthHoarThickness ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowCover.DepthHoar}
    _value={this.DepthHoarThickness}
    ></varsom-key-value>
    :""}

{this.CriticalLayerExists ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowCover.CriticalLayerFound}
    _value={this.CriticalLayerExists}
    ></varsom-key-value>
    :""}

{this.CriticalLayerLocation ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowCover.CriticalLayerLocation}
    _value={this.CriticalLayerLocation}
    ></varsom-key-value>
    :""}

{this.SnowPilotRef ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowCover.SnowPilotRefTID}
    _value={this.SnowPilotRef}
    ></varsom-key-value>
    :""}

{this.CriticalLayerName ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowCover.CriticalLayerTID}
    _value={this.CriticalLayerName}
    ></varsom-key-value>
    :""}

<br></br>
{this.Comment ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowCover.Comment}
    _value={this.Comment}
    ></varsom-key-value>
    :""}

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
    
    

</div>
    
  }
    
  }

  
  
