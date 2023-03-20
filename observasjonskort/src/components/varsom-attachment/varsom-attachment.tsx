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

      {console.log(this.strings)}

      {this.Comment ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.Picture.PictureComment}: </div>
        : <div>Kommentar</div>}
        </label>
      {this.Photographer}
    </div>
      : ""} 

      {this.RegistrationName ? 
      <div>
        {this.RegistrationName}
      </div>
      : ""} 
    
    {this.Photographer ? 
      <div>
        <label>
          {this.strings ? 
          <div>{this.strings.Observations.Picture.Photographer}: </div>
          : <div>Fotograf</div>}
          </label>
        {this.Photographer}
      </div>
      : ""} 

    {this.Copyright ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.Picture.Copyright}: </div>
        : <div>Opphavsrett</div>}
        </label>
      {this.Copyright}
    </div>
      : ""} 

{this.Aspect ? 
       <div>
       <label>
         {this.strings ? 
         <div>{this.strings.Observations.Picture.Aspect}: </div>
         : <div>Himmelretning</div>}
         </label>
       {this.Copyright}
     </div>
      : ""} 
      
    </div>
  }
    
  }

  
  
