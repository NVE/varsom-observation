import { Component, Prop, h } from '@stencil/core';

 
 
@Component({
  tag: 'varsom-key-value',
  styleUrl: 'varsom-key-value.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomKeyValue {

  @Prop() label: any;
  @Prop() _value: any;
  
  
  render(){
    return <div> 

    <h1>{this.label}</h1>
    {this._value}
   
    </div>
  }



  }
    


  

  
  
