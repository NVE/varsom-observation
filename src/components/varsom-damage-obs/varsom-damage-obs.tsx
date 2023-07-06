import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';


@Component({
  tag: 'varsom-damage-obs',
  styleUrl: 'varsom-damage-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomDamageObs {

  @Prop() strings: any;
  @Prop() GeoHazardName: string;
  @Prop() DamageTypeName:	string;
  @Prop() shortVersion: any;
  @Prop() Attachments?: Attachment[];
  @Prop() GeoHazardTID: number; //	integer($int32)
  @Prop() DamageTypeTID: number; //	integer($int32)
  @Prop() DamagePosition: any;	//LatLng,
  @Prop() Comment:	string;


  render(){
     return <div>

<varsom-label
      label={this.strings ? this.strings.Observations.DamageObs.ObsName : "Skader"}
      ></varsom-label>

    <div class="content">

    {this.DamageTypeName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.DamageObs.DamageTypeTID : (this.shortVersion ? null : "Type") }
    _value={this.DamageTypeName}
    ></varsom-key-value>
    :""}

<br></br>

{this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.DamageObs.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""} 

    </div>

    {this.Attachments ?
      <div class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            strings={this.strings}
            AttachmentId={el.AttachmentId ? el.AttachmentId : null}
            GeoHazardName={el.GeoHazardName ? el.GeoHazardName : null}
            RegistrationName={el.RegistrationName ? el.RegistrationName : null}
            Url={el.Url ? el.Url : null}
            Photographer={el.Photographer ? el.Photographer : null}
            Copyright={el.Copyright ? el.Copyright : null}
            Aspect={el.Aspect ? el.Aspect : null}
            GeoHazardTID={el.GeoHazardTID ? el.GeoHazardTID : null}
            RegistrationTID={el.RegistrationTID ? el.RegistrationTID : null}
            Comment={el.Comment ? el.Comment : null}
            AttachmentMimeType={el.AttachmentMimeType ? el.AttachmentMimeType : null}
            IsMainAttachment={el.IsMainAttachment ? el.IsMainAttachment : null}

            >

            </varsom-attachment>

})
}
</div> : ""}
</div> }}

