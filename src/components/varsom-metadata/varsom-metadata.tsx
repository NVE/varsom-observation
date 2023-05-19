import { Component, Prop, h} from '@stencil/core';
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
        <img alt='calendar icon' class="image" src="/src/assets/icons/calendar-icon.svg"></img>
      <label>{this.strings.Reg.RegisteredTime} </label>
      {new Date(this.dateOfRegistration).toLocaleString("no", {
        dateStyle: "short"
      })}
      </span> : ""}

      {this.dateOfLastUpdate && !this.shortVersion ? 
      <span>
      <label>{this.strings.Reg.UpdatedTime} </label>
      {new Date(this.dateOfLastUpdate).toLocaleString("no", 
      {
        dateStyle: "short"
      })}
      </span> : ""}
      
      {this.geoHazardName ? 
      <span>
      <img alt='geohazard icon'class="image" src={(`src/assets/icons/${getIconName(this.geoHazardName)}-icon.svg`)}></img>
      {this.geoHazardName}
      </span> : ""}
   <br></br>
      {this.moh ? 
      <span>

        <img alt='height icon' class="image" src="src/assets/icons/height-icon.svg"></img>
      {this.moh} {this.strings.RegistrationKeyInfo.MetersAboveSeaLevel}

      </span> : ""}

      {this.nickname ? 
      <span>
        <img alt='user icon' class="image" src={(`src/assets/icons/user-icon.svg`)}></img>
      {this.nickname}
      </span> : ""}

      {this.competenceLevelName === "*" ? 
      <span>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-icon.svg`)}></img>
        <img alt='rating star icon' class="dark" src={(`src/assets/icons/star-icon.svg`)}></img>
        <img alt='rating star icon' class="dark" src={(`src/assets/icons/star-icon.svg`)}></img>
      </span> : ""}

      {this.competenceLevelName === "**" ? 
      <span>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-icon.svg`)}></img>
        <img alt='rating star icon' class="dark" src={(`src/assets/icons/star-icon.svg`)}></img>
        <img alt='rating star icon' class="dark" src={(`src/assets/icons/star-icon.svg`)}></img>
      </span> : ""}

      {this.competenceLevelName === "***" ? 
      <span>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' class="dark" src={(`src/assets/icons/star-icon.svg`)}></img>
        <img alt='rating star icon' class="dark" src={(`src/assets/icons/star-icon.svg`)}></img>
      </span> : ""}

      {this.competenceLevelName === "****" ? 
      <span>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' class="dark" src={(`src/assets/icons/star-icon.svg`)}></img>
      </span> : ""}
     
      {this.competenceLevelName === "*****" ? 
      <span>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
        <img alt='rating star icon' src={(`src/assets/icons/star-dark-icon.svg`)}></img>
      </span> : ""}

      {this.observerGroupName && !this.shortVersion ? 
      <span>
      <img alt='user group icon' class="image" src={(`src/assets/icons/user-group-icon.svg`)}></img>
      {this.observerGroupName}
      </span> : ""}
  
    </div>
  }
    
  }

  
  
