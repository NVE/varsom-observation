import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-key-value',
  styleUrl: 'varsom-key-value.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomKeyValue {

  @Prop() _key: any;
  @Prop() _value?: any;
  @Prop() shortVersion: string;
  
  render(){
    return <span>
    {this.shortVersion ?    
     <span>
     {this._value} 
   </span>
   : 
    <span>
    <b>{this._key} -  </b>
    {this._value}
    </span>
  }

    </span>
 
    
  }
    
  } 

  
  
