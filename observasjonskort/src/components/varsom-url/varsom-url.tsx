import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-url',
  styleUrl: 'varsom-url.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomUrl {

  @Prop() strings: any;
  @Prop() UrlDescription: any;
  @Prop() UrlLine: any;
 

  render(){
    return <div> 

{( this.UrlLine && this.UrlDescription) ? 
    <varsom-key-value
    _key={this.UrlDescription}
    _value={this.UrlLine}
    ></varsom-key-value>
    :""}
    
    </div>
  }
    
  }

  
  
