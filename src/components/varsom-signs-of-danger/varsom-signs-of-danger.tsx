import { Component, Prop, h } from '@stencil/core';


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

  
  
