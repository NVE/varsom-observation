import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-attachment',
  styleUrl: 'varsom-attachment.css',
  shadow: false,
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
  @Prop() CropImage?: boolean;

  modal: HTMLElement;
  closeBtn: HTMLElement;
  
 

  render(){
    return <span class="container">

      {this.Url ? 
        <span>
        <img alt={this.Comment ? this.Comment : "observation image"} class={this.CropImage ? "smallImage" : "normalImage"} src={this.Url} 
          onClick={()=> this.modal.style.display="block"}/>
      </span>
      : ""} 
 
 <span class="att-cont">
 
<span class={this.CropImage ? "smallImageInfo" : "imageInfo"}>
  
    
    <br></br>
    {this.Copyright ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.Copyright : "Opphavsrett" }
    _value={this.Copyright}
    ></varsom-key-value>
    : null}

<br></br>
    {this.Photographer ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.Photographer : "Fotograf" }
    _value={this.Photographer}
    ></varsom-key-value>
    : null}

    <br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.Picture.PictureComment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    : null}




</span>



</span>

{/* OPEN IMAGE IN MODAL: SOURCE: https://www.w3schools.com/howto/howto_css_modals.asp */ }


<div ref={(mod) => this.modal = mod as HTMLElement}
 class="modal">


  <div class="modal-content">
    
    <span class="close" ref={(close) => this.closeBtn = close as HTMLElement}
     onClick={() => this.modal.style.display = "none"}
     >&times;
    </span>
  
    <img alt={this.Comment ? this.Comment : "observation image"} class="modal-img" src={this.Url} />
  </div>

</div>

    </span>
  }
    
  }

  
  
