import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-url',
  styleUrl: 'varsom-url.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomUrl {

  @Prop() UrlDescription: string;
  @Prop() UrlLine: string; 

  render(){
    return <host> 

  {(this.UrlLine && this.UrlDescription) ? 
      <ul>
    <li>{this.UrlDescription} {this.UrlLine}</li>  
    </ul>
    :""}
    </host>
  }
    
  }

  
  
