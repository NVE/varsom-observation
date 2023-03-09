import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-metadata',
  styleUrl: 'varsom-metadata.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomMetadata {

  @Prop() dateOfRegistration: any;
  @Prop() dateOfLastUpdate?: any;
  @Prop() strings?: any;
  @Prop() geoHazardName: any;
  @Prop() moh: any;
  @Prop() nickname: any;
  @Prop() competenceLevelName: any;
  @Prop() observerGroupName: any;

  
  render(){
    return <div> 
      <span>
      <label>{this.strings.ABONNER_BANNER.BANNER_TEXT_LINE_1}</label>
      {this.dateOfRegistration}
      
      
      </span>
    </div>
  }
    
  }

  
  
