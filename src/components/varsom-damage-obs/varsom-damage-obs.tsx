import { Component, Prop, h } from '@stencil/core';
import { Attachment, LatLng } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';


import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-damage-obs',
  styleUrl: 'varsom-damage-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomDamageObs {

  private strings;
  @Prop() GeoHazardName: string;
  @Prop() DamageTypeName:	string;
  @Prop() shortVersion: string;
  @Prop() Attachments?: Attachment[];
  @Prop() GeoHazardTID: number; //	integer($int32)
  @Prop() DamageTypeTID: number; //	integer($int32)
  @Prop() DamagePosition: LatLng;	//LatLng,
  @Prop() Comment:	string;

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
     return <div>

<varsom-label
      label={this.strings.Observations.DamageObs.ObsName}
      ></varsom-label>

    <div class="content">

    {this.DamageTypeName ? 
    <varsom-key-value
    _key={this.strings.Observations.DamageObs.DamageTypeTID}
    _value={this.DamageTypeName}
    ></varsom-key-value>
    :""}

<br></br>

{this.Comment ? 
    <varsom-key-value
    _key={this.strings.Observations.DamageObs.Comment}
    _value={this.Comment}
    ></varsom-key-value>
    :""} 

    </div>

    {this.Attachments ?
      <div class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            
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

