import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-snow-profile',
  styleUrl: 'varsom-snow-profile.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowProfile {

  @Prop() strings: any;
  @Prop() GeoHazardName: any;
  @Prop() RegistrationName: any;
  @Prop() Photographer: any;
  @Prop() Copyright: any;
  @Prop() Aspect: any;
  @Prop() GeoHazardTID: any;
  @Prop() RegistrationTID: any;
  @Prop() Url: any;
  @Prop() Comment: any;

  render(){
    return <div> 

<varsom-label
      label={this.strings ? this.strings.Observations.SnowProfile.ObsName : "Snøprofil"}
      ></varsom-label>

<div class="content">

{this.GeoHazardName ? 
    <varsom-key-value
    _key="Hazard type"
    _value={this.GeoHazardName}
    ></varsom-key-value>
    :""}

{this.RegistrationName ? 
    <varsom-key-value
    _key="Registration name"
    _value={this.RegistrationName}
    ></varsom-key-value>
    :""}

{this.Photographer ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.Photographer: "Fotograf" }
    _value={this.Photographer}
    ></varsom-key-value>
    :""}

{this.Copyright ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.Copyright: "Opphavsrett" }
    _value={this.Copyright}
    ></varsom-key-value>
    :""}

{this.Aspect ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.Aspect: "Himmelretning" }
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
    _key={this.strings ? this.strings.Observations.Snowprofile.Url: "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
</div>

    </div>

    </div>
  }
    
  }

  
  
