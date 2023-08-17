import { Component, Prop, h } from '@stencil/core';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';

@Component({
  tag: 'varsom-regobs-link',
  styleUrl: 'varsom-regobs-link.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomRegobsLink {

  @Prop() regId: any;
  @Prop({mutable: true}) strings: any;

  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings();
  }

  render(){
    return <div> 

<a href={"https://www.regobs.no/registration/" + this.regId}>Se observasjon på regobs.no  

<img alt="arrow icon" src="src/assets/icons/Right-icon.svg"></img></a>
<img tabIndex={0}
 onClick={
  ()=> {
    let text = "https://www.regobs.no/registration/" + this.regId;
    navigator.clipboard.writeText(text); 
    setTimeout(() => {
      alert(this.strings ? this.strings.CopiedToClipboard : "Hyperlink to the observation copied to clipboard");  
    }, 10);
    
    
  }
} alt="share icon" class="link" src="src/assets/icons/Share-icon.svg"></img>

    </div>
  }

 
    
  }

  
  
