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

  @Prop() geoHazardName: string;
  @Prop() damageTypeName:	string;
  @Prop() Attachments?: any[];//Attachment[],
  @Prop() geoHazardTID: number; //	integer($int32)
  @Prop() damageTypeTID: number; //	integer($int32)
  @Prop() damagePosition: any;	//LatLng,
  @Prop() comment:	string;

  render(){
     return <div> 

  
     
    

    {this.Attachments ?
      <div>
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            strings={this.strings}
            AttachmentId={el.AttachmentId ? el.AttachmentId : null}
           
           
            Comment={el.Comment ? el.Comment : null}

            >

            </varsom-attachment>

})
}
</div> : ""}
</div> }}
