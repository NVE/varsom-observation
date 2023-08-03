import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';

@Component({
  tag: 'varsom-snow-profile',
  styleUrl: 'varsom-snow-profile.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowProfile {

  @Prop({mutable: true}) strings: any;
  @Prop() shortVersion: any;
  @Prop() GeoHazardName: any;
  @Prop() RegistrationName: any;
  @Prop() Photographer: any;
  @Prop() Copyright: any;
  @Prop() Aspect: any;
  @Prop() GeoHazardTID: any;
  @Prop() RegistrationTID: any;
  @Prop() Url: any;
  @Prop() Comment: any;
  @Prop() Attachments: Attachment[];

  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings(getLocaleFromDom());
  }

  render(){
    return <div class="container"> 

<varsom-label
      label={this.strings ? this.strings.Observations.SnowProfile.ObsName : "Snøprofil"}
      ></varsom-label>

<div class="content">

{this.GeoHazardName ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Hazard type" }
    _value={this.GeoHazardName}
    ></varsom-key-value>
    :""}

{this.RegistrationName ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Registration name" }
    _value={this.RegistrationName}
    ></varsom-key-value>
    :""}

{this.Photographer ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Picture.Photographer : (this.shortVersion ? null : "Fotograf") }
    _value={this.Photographer}
    ></varsom-key-value>
    :""}

{this.Copyright ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Picture.Copyright : (this.shortVersion ? null : "Opphavsrett") }
    _value={this.Copyright}
    ></varsom-key-value>
    :""}

{this.Aspect ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Picture.Aspect: (this.shortVersion ? null : "Himmelretning") }
    _value={this.Aspect}
    ></varsom-key-value>
    :""}
    

    {this.Url ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Url.Url: "URL" }
    _value={this.Url}
    ></varsom-key-value>
    :""}

<div>
{this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.SnowProfile.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
</div>

    </div>

    </div>
  }
    
  }

  
  
