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
  valueNotGiven(value: any){
    return this.notGiven.includes(value) ? true : false;

  }  
  


  
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
    return this.valueNotGiven(this._value) ? null : keyValue
 
    
  }
    
  } 

  
  
