import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-label-small',
  styleUrl: 'varsom-label-small.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomLabelSmall {

  @Prop() label: string;
  

  render(){
    return <div> 
    {this.label}
    </div>
  }
    
  }

  
  
