import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-damage-obs',
  styleUrl: 'varsom-damage-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomDamageObs {

  @Prop() strings: any;
  // @Prop() comment: any;
  // @Prop() dangerSignName: any;
  // @Prop() registrationName: any;
  // @Prop() imageUrl: any;
  // @Prop() photographer: any;
  // @Prop() copyright: any;

  @Prop() GeoHazardName: string;
  @Prop() DamageTypeName:	string;
  @Prop() Attachments?: Attachment[];
  @Prop() GeoHazardTID: number; //	integer($int32)
  @Prop() DamageTypeTID: number; //	integer($int32)
  @Prop() DamagePosition: any;	//LatLng,
  @Prop() Comment:	string;


  render(){
     return <div>

       {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.DangerObs.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""} 

    <br></br>

    {this.GeoHazardName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.DangerObs.GeoHazardName : "Faretype" }
    _value={this.GeoHazardName}
    ></varsom-key-value> 
    :""}

    <br></br>

    {this.DamageTypeName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.DangerObs.DamageTypeName : "Type skade" }
    _value={this.DamageTypeName}
    ></varsom-key-value>
    :""}

    

       {/* {this.comment ? 
      <span>
       <label>{this.strings.Observations.GeneralObservation.Comment}: </label>
      {this.comment}
      </span> : ""} */}
     
    

    {this.Attachments ?
      <div>
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

//     {this.attachments.map((el: Attachment = {}) =>{
//       return <varsom-attachment
//       strings={this.strings}
//       AttachmentId={el.AttachmentId ? el.AttachmentId : null}>

//       </varsom-attachment>

// })
// }}}