import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-schema',
  styleUrl: 'varsom-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSchema {

  @Prop() 
  @Prop() observer: string;
  @Prop() label: string;
  @Prop() registrationName: string;
  @Prop() comment: string;
  @Prop() photographer: string;
  @Prop() copyright: string;
  
  

  render(){
    return <div> 
    {this.label ? <div>NY KOMPONENT {this.label} </div> : ""}
    {this.comment ? <div>kommentar..... {this.comment} </div> : ""}
    
    
    

    
    
    </div>
  }
    
  }

  
  
