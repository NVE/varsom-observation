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

  render(){
    return <div> 

    <b>{this._key}: </b>
    {this._value}
    </div>
  }
    
  }

  
  
