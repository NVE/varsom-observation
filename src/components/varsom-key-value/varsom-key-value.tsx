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

  notGiven = ["Ikke gitt", "Not given", "Keine Angabe", "Nicht angegeben", "Ni podano", "Ej angivet", "Ikkje gitt", "Non donné", "Ikke givet"];
  valueNotGiven = this.notGiven.includes(String(this._value));
  
  render(){
    let keyValue = <span>
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
    return this.valueNotGiven ? null : keyValue
 
    
  }
    
  } 

  
  
