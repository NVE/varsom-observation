import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-metadata',
  styleUrl: 'varsom-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomMetadata {

  @Prop() date?: any;
  @Prop() date2?: any;

  
  render(){
    return <div> {this.date ? this.date: ""}
    {this.date2 ? this.date2 : ""}
    </div>
  }
    
  }

  
  
