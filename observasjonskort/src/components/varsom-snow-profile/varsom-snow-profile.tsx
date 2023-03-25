import { Component, Prop, h } from '@stencil/core';
import { SnowDensity } from '../varsom-observasjon/observation-model';


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

{/** TODO: MISSING TRANSLATION */}
{this.GeoHazardName ? 
    <varsom-key-value
    _key="Faretype"
    _value={this.GeoHazardName}
    ></varsom-key-value>
    :""}

{this.RegistrationName ? 
    <varsom-key-value
    _key="Navn på registrering"
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
    _value={this.Copyright}
    ></varsom-key-value>
    :""}
    

    {this.Url ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Url.Url: "URL" }
    _value={this.Url}
    ></varsom-key-value>
    :""}

{this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Snowprofile.Url: "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

    
    </div>

    
  }
    
  }

  
  
