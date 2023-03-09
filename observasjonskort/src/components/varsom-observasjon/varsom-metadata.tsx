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
      <label>label mangler: </label>
      {this.dateOfRegistration}
      </span>
      <span>
      <label>label mangler: </label>
      {this.dateOfLastUpdate}
      </span>
      <span>
      <label>label mangler: </label>
      {this.geoHazardName}
      </span>
      <span>
      <label>label mangler: </label>
      {this.moh}
      </span>
      <span>
      <label>label mangler: </label>
      {this.nickname}
      </span>
      <span>
      <span>
      <label>label mangler: </label>
      {this.competenceLevelName}
      </span>
      <label>label mangler: </label>
      {this.observerGroupName}
      </span>




    </div>
  }
    
  }

  
  
