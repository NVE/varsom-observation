import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-header',
  styleUrl: 'varsom-header.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomHeader {

  @Prop() region: string;
  @Prop() regId: string;

  render(){
    return <div> 
      <div class="container">
      <span class="header" tabIndex={0}>{this.region}</span> <span class="id" tabIndex={0}>ID: {this.regId}</span>
    </div>
    </div>
  }
    
  }

  
  
