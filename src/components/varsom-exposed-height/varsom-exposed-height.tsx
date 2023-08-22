import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-exposed-height',
  styleUrl: 'varsom-exposed-height.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomExposedHeight {

    @Prop() ValidExposition: any;
    @Prop() ExposedHeight1: any;
    @Prop() ExposedHeight2: any;

   
  render(){
    return <span class="icons-container">
    {this.ValidExposition ? 
      <span><img src={(`src/assets/svg/ext/${this.ValidExposition}.svg`)}></img></span>
    : ""}  


{(this.ExposedHeight1 && !this.ExposedHeight2) ? 
<span class="avalanche-height-container">
  <img src={(`src/assets/svg/avalanche/Icon-Avalanche-height.svg`)}></img><span>{this.ExposedHeight1 + "m"}</span></span>
:""}

{this.ExposedHeight1 && this.ExposedHeight2 ? 
<span class="avalanche-height2-container">
  <img src={(`src/assets/svg/avalanche/Icon-Avalanche-height2.svg`)}></img><span class="avalanche-height-number-container">
    <span class="height-number">{this.ExposedHeight1 + "m"}</span>    
    <span class="height-number">{this.ExposedHeight2 + "m"}</span> 
    </span>
    </span>
:""}

    

</span>
    
  }
    
  }

  
  
