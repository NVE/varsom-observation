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
      <label>{this.strings.Reg.RegisteredTime} </label>
      {this.dateOfRegistration}
      </span> : ""}

      {this.dateOfLastUpdate ? 
      <span>
      <label>{this.strings.Reg.UpdatedTime} </label>
      {this.dateOfLastUpdate}
      </span> : ""}

      {this.geoHazardName ? 
      <span>
      <label>Ikon mangler... </label>
      {this.geoHazardName}
      </span> : ""}
   
      {this.moh ? 
      <span>
      <label>{this.strings.RegistrationKeyInfo.MetersAboveSeaLevel} </label>
      {this.moh}
      </span> : ""}

      {this.nickname ? 
      <span>
      <label>{this.strings.Reg.ObserverNickName} </label>
      {this.nickname}
      </span> : ""}

      {this.competenceLevelName ? 
      <span>
      <label>{this.strings.Search.Observers.CompetenceFilter}</label>
      {this.competenceLevelName}
      </span> : ""}
     
      {this.observerGroupName ? 
      <span>
      <label>Ikon mangler... </label>
      {this.observerGroupName}
      </span> : ""}
  
    </div>
  }
    
  }

  
  
