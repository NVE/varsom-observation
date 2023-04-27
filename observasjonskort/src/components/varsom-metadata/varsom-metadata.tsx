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
  @Prop() shortVersion: string;

  
  render(){
    return <div> 
      {this.dateOfRegistration ? 
      <span>
        <img class="image" src={getAssetPath(`/assets/icons/calendar-icon.svg`)}></img>
      <label>{this.strings.Reg.RegisteredTime} </label>
      {new Date(this.dateOfRegistration).toLocaleString("no")}
      </span> : ""}

      {this.dateOfLastUpdate && !this.shortVersion ? 
      <span>
      <label>{this.strings.Reg.UpdatedTime} </label>
      {new Date(this.dateOfLastUpdate).toLocaleString("no")}
      </span> : ""}
      
      {this.geoHazardName ? 
      <span>
      <img class="image" src={getAssetPath(`/assets/icons/${getIconName(this.geoHazardName)}-icon.svg`)}></img>
      {this.geoHazardName}
      </span> : ""}
   
   
      {this.moh ? 
      <span>
        <img class="image" src={getAssetPath(`/assets/icons/height-icon.svg`)}></img>
      {this.moh} <span>{this.strings.RegistrationKeyInfo.MetersAboveSeaLevel} </span> 
      </span> : ""}

      {this.nickname ? 
      <span>
        <img class="image" src={getAssetPath(`/assets/icons/user-icon.svg`)}></img>
      {this.nickname}
      </span> : ""}

      {this.competenceLevelName === "*" ? 
      <span>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
        <img class="dark" src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
        <img class="dark" src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
      </span> : ""}

      {this.competenceLevelName === "**" ? 
      <span>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
        <img class="dark" src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
        <img class="dark" src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
      </span> : ""}

      {this.competenceLevelName === "***" ? 
      <span>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img class="dark" src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
        <img class="dark" src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
      </span> : ""}

      {this.competenceLevelName === "****" ? 
      <span>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img class="dark" src={getAssetPath(`/assets/icons/star-icon.svg`)}></img>
      </span> : ""}
     
      {this.competenceLevelName === "*****" ? 
      <span>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
        <img src={getAssetPath(`/assets/icons/star-icon-dark.svg`)}></img>
      </span> : ""}

      {this.observerGroupName && !this.shortVersion ? 
      <span>
      <img class="image" src={getAssetPath(`/assets/icons/user-group-icon.svg`)}></img>
      {this.observerGroupName}
      </span> : ""}
  
    </div>
  }
    
  }

  
  
