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
    return <div> {this.region} Id: {this.regId}
    </div>
  }
    
  }

  
  
