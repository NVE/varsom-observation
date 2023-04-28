import { Component, Prop, getAssetPath, h } from '@stencil/core';
import { Attachment, Url } from '../varsom-observasjon/observation-model';

@Component({
  tag: 'varsom-regobs-link',
  styleUrl: 'varsom-regobs-link.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomRegobsLink {

  @Prop() regId: any;
  
  render(){
    return <div> 

<a href={"https://www.regobs.no/registration/" + this.regId}>Se observasjon på regobs.no  
<img src={getAssetPath(`/assets/icons/Right.svg`)}></img></a>

{/* TODO IMPLEMENT SHARING??*/}
<a href=""></a><img class="link" src={getAssetPath(`/assets/icons/Share.svg`)}></img>
    </div>
  }
    
  }

  
  
