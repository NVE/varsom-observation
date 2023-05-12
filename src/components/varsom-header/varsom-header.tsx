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
      <span>{this.region}</span> <span>Id: {this.regId}</span>
    </div>
    </div>
  }
    
  }

  
  
