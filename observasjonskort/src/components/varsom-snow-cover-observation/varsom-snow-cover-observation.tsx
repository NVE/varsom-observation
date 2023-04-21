import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


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
  @Prop() Attachments: Attachment[];
   
  render(){
    return <div class="container"> 

<varsom-label
      label={this.strings ? this.strings.Observations.SnowCover.ObsName : "Snøprofil"}
      ></varsom-label>

<div class="content">

{this.DepthHoarThickness ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowCover.DepthHoar: "Begerkrystaller tykkelse" }
    _value={this.DepthHoarThickness}
    ></varsom-key-value>
    :""}

{this.CriticalLayerExists ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowCover.CriticalLayerFound: "Svakt lag finnes" }
    _value={this.CriticalLayerExists}
    ></varsom-key-value>
    :""}

{this.CriticalLayerLocation ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowCover.CriticalLayerLocation: "Plassering" }
    _value={this.CriticalLayerLocation}
    ></varsom-key-value>
    :""}

{this.CriticalLayerTID ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowCover.CriticalLayerLocation: "Type" }
    _value={this.CriticalLayerTID}
    ></varsom-key-value>
    :""}

{this.SnowPilotRef ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowCover.SnowPilotRefTID: "Snøprofil" }
    _value={this.SnowPilotRef}
    ></varsom-key-value>
    :""}

{this.CriticalLayerName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowCover.CriticalLayerTID: "Snøprofil" }
    _value={this.CriticalLayerName}
    ></varsom-key-value>
    :""}

<br></br>
{this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowCover.Comment: "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

</div>

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
    
  }
    
  }

  
  
