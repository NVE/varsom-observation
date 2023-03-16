import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-evalproblem-test',
  styleUrl: 'varsom-evalproblem.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomCompressionTest {

  @Prop() strings: any;
  @Prop() Comment: any;
  


  render(){
    return <div> 

     
      {this.Comment ? 
      <span>
      <label>{this.strings.Observations.CompressionTest.Comment}: </label>
      {this.Comment}
      </span> : ""}

     
    
    
    </div>
  }
    
  }

  
  
