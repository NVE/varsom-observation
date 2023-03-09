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
      {this.dateOfRegistration ? 
      <span>
      <label>label mangler: </label>
      {this.dateOfRegistration}
      </span> : ""}

      {this.dateOfLastUpdate ? 
      <span>
      <label>label mangler: </label>
      {this.dateOfLastUpdate}
      </span> : ""}

      {this.geoHazardName ? 
      <span>
      <label>label mangler: </label>
      {this.geoHazardName}
      </span> : ""}
   
      {this.moh ? 
      <span>
      <label>label mangler: </label>
      {this.moh}
      </span> : ""}

      {this.nickname ? 
      <span>
      <label>label mangler: </label>
      {this.nickname}
      </span> : ""}

      {this.competenceLevelName ? 
      <span>
      <label>label mangler: </label>
      {this.competenceLevelName}
      </span> : ""}
     
      {this.observerGroupName ? 
      <span>
      <label>label mangler: </label>
      {this.observerGroupName}
      </span> : ""}
  
    </div>
  }
    
  }

  
  
