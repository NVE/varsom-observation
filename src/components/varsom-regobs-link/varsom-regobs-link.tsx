import { Component, Prop, getAssetPath, h } from '@stencil/core';

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
<img alt="arrow icon" src={getAssetPath(`/assets/icons/Right.svg`)}></img></a>

{/* TODO IMPLEMENT SHARING??*/}
<a href=""></a><img alt="share icon" class="link" src={getAssetPath(`/assets/icons/Share.svg`)}></img>
    </div>
  }
    
  }

  
  
