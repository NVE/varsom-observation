import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-attachment',
  styleUrl: 'varsom-attachment.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAttachment {

  @Prop() RegistrationName: any;
  @Prop() Comment: any;
  @Prop() Url: any;
  @Prop() Photographer: any;
  @Prop() Copyright: any;
  @Prop() strings?: any;
  @Prop() AttachmentId?: any;
  @Prop() GeoHazardName?: any;
  @Prop() GeoHazardTID?: any;
  @Prop() Aspect?: any;
  @Prop() RegistrationTID?: any;
  @Prop() AttachmentMimeType?: any;
  @Prop() IsMainAttachment?: any;
  
 

  render(){
    return <div class="container">

      {this.Url ? 
        <div>
        <img src={this.Url} />
      </div>
      : ""} 

    {this.RegistrationName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Incident.RegistrationTID : "Bilde av" }
    _value={this.RegistrationName}
    ></varsom-key-value>
    :""}

    {this.GeoHazardName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Incident.geoHazardName : "Faretype" }
    _value={this.GeoHazardName}
    ></varsom-key-value>
    :""}

    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.PictureComment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

    {this.Photographer ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.Photographer : "Fotograf" }
    _value={this.Photographer}
    ></varsom-key-value>
    :""}

    {this.Copyright ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.Copyright : "Opphavsrett" }
    _value={this.Copyright}
    ></varsom-key-value>
    :""}

    {this.Aspect ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.Aspect : "Himmelretning" }
    _value={this.Aspect}
    ></varsom-key-value>
    :""}
      
    </div>
  }
    
  }

  
  
