import { Component, Prop, h } from '@stencil/core';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';


@Component({
  tag: 'varsom-signs-of-danger',
  styleUrl: 'varsom-signs-of-danger.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSignsOfDanger {
  
  @Prop() Comment?: any;
  @Prop() Type?: any;
  @Prop() strings?: any;
  
  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings();
  }

  render(){
    return <div> 

      {this.Type ? 
      <span>
      <label>Label mangler: </label>
      {this.Type}
      </span> : ""}

      {this.Comment ? 
      <span>
      <label>{this.strings.Observations.CompressionTest.Comment}: </label>
      {this.Comment}
      </span> : ""}

      
    
    </div>
  }
    
  }

  
  
