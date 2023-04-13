import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { getIconName } from '../../utils/utils';

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
        <img src={getAssetPath(`/assets/icons/calendar-icon.svg`)}></img>
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
      <img src={getAssetPath(`/assets/icons/${getIconName(this.geoHazardName)}-icon.svg`)}></img>
      {this.geoHazardName}
      </span> : ""}
   
   <br></br>
      {this.moh ? 
      <span>
        <img src={getAssetPath(`/assets/icons/height-icon.svg`)}></img>
      {this.moh} <span>{this.strings.RegistrationKeyInfo.MetersAboveSeaLevel} </span> 
      </span> : ""}

      {this.nickname ? 
      <span>
        <img src={getAssetPath(`/assets/icons/user-icon.svg`)}></img>
      {this.nickname}
      </span> : ""}

      {this.competenceLevelName ? 
      <span>
        {this.competenceLevelName}
      </span> : ""}
     
      {this.observerGroupName ? 
      <span>
      <img src={getAssetPath(`/assets/icons/user-group-icon.svg`)}></img>
      {this.observerGroupName}
      </span> : ""}
  
    </div>
  }
    
  }

  
  
