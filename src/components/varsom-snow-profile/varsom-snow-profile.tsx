import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-snow-profile',
  styleUrl: 'varsom-snow-profile.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowProfile {

  private strings: any
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

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
    return <div class="container"> 

<varsom-label
      label={this.strings.Observations.SnowProfile.ObsName}
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
    _key={this.strings.Observations.Picture.Photographer}
    _value={this.Photographer}
    ></varsom-key-value>
    :""}

{this.Copyright ? 
    <varsom-key-value
    _key={this.strings.Observations.Picture.Copyright}
    _value={this.Copyright}
    ></varsom-key-value>
    :""}

{this.Aspect ? 
    <varsom-key-value
    _key={this.strings.Observations.Picture.Aspect}
    _value={this.Aspect}
    ></varsom-key-value>
    :""}
    

    {this.Url ? 
    <varsom-key-value
    _key={this.strings.Observations.Url.Url}
    _value={this.Url}
    ></varsom-key-value>
    :""}

<div>
{this.Comment ? 
    <varsom-key-value
    _key={this.strings.Observations.SnowProfile.Comment}
    _value={this.Comment}
    ></varsom-key-value>
    :""}
</div>

    </div>

    </div>
  }
    
  }

  
  
