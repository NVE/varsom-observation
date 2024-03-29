import { Component, Prop, h } from '@stencil/core';
import { getIconName } from '../../utils/utils';
import { formatDateString } from '../../utils/date-utils';
import { Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'varsom-metadata',
  styleUrl: 'varsom-metadata.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomMetadata {

  private strings;
  @Prop() dateOfObservation: string;
  @Prop() dateOfRegistration: string;
  @Prop() dateOfLastUpdate?: string;
  @Prop() geoHazardName: string;
  @Prop() moh: number;
  @Prop() nickname: string;
  @Prop() competenceLevelName: string;
  @Prop() observerGroupName: string;
  @Prop() shortVersion: string;

  @Element() elem: HTMLElement;

  get updateTimeFormatted(): string {
    return formatDateString(this.dateOfLastUpdate, this.elem);
  }

  get registrationTimeFormatted(): string {
    return formatDateString(this.dateOfRegistration, this.elem);
  }

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div>
        {this.dateOfObservation ? (
          <span tabIndex={0}>
            <img alt="calendar icon" class="image" src="/src/assets/icons/calendar-icon.svg"></img>
            <label>{this.strings.Reg.ObservedTime} </label>
            {this.registrationTimeFormatted}
          </span>
        ) : (
          ''
        )}

        {this.dateOfRegistration ? (
          <span tabIndex={0}>
            <label>{this.strings.Reg.RegisteredTime} </label>
            {this.registrationTimeFormatted}
          </span>
        ) : (
          ''
        )}

        {this.dateOfLastUpdate && this.registrationTimeFormatted != this.updateTimeFormatted && !this.shortVersion ? (
          <span tabIndex={0}>
            <label>{this.strings.Reg.UpdatedTime} </label>
            {this.updateTimeFormatted}
          </span>
        ) : (
          ''
        )}

        {this.geoHazardName ? (
          <span tabIndex={0}>
            <img alt="geohazard icon" class="image" src={`src/assets/icons/${getIconName(this.geoHazardName)}-icon.svg`}></img>
            {this.geoHazardName}
          </span>
        ) : (
          ''
        )}

        {this.moh ? (
          <span tabIndex={0}>
            <img alt="height icon" class="image" src="src/assets/icons/height-icon.svg"></img>
            {this.moh} {this.strings.RegistrationKeyInfo.MetersAboveSeaLevel}
          </span>
        ) : (
          ''
        )}

        {this.nickname ? (
          <span tabIndex={0}>
            <img alt="user icon" class="image" src={`src/assets/icons/user-icon.svg`}></img>
            {this.nickname}
          </span>
        ) : (
          ''
        )}

        {this.competenceLevelName === '*' ? (
          <span tabIndex={0}>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-icon.svg`}></img>
            <img alt="rating star icon" class="dark" src={`src/assets/icons/star-icon.svg`}></img>
            <img alt="rating star icon" class="dark" src={`src/assets/icons/star-icon.svg`}></img>
          </span>
        ) : (
          ''
        )}

        {this.competenceLevelName === '**' ? (
          <span tabIndex={0}>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-icon.svg`}></img>
            <img alt="rating star icon" class="dark" src={`src/assets/icons/star-icon.svg`}></img>
            <img alt="rating star icon" class="dark" src={`src/assets/icons/star-icon.svg`}></img>
          </span>
        ) : (
          ''
        )}

        {this.competenceLevelName === '***' ? (
          <span tabIndex={0}>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" class="dark" src={`src/assets/icons/star-icon.svg`}></img>
            <img alt="rating star icon" class="dark" src={`src/assets/icons/star-icon.svg`}></img>
          </span>
        ) : (
          ''
        )}

        {this.competenceLevelName === '****' ? (
          <span tabIndex={0}>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" class="dark" src={`src/assets/icons/star-icon.svg`}></img>
          </span>
        ) : (
          ''
        )}

        {this.competenceLevelName === '*****' ? (
          <span tabIndex={0}>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
            <img alt="rating star icon" src={`src/assets/icons/star-dark-icon.svg`}></img>
          </span>
        ) : (
          ''
        )}

        {this.observerGroupName && !this.shortVersion ? (
          <span tabIndex={0}>
            <img alt="user group icon" class="image" src={`src/assets/icons/user-group-icon.svg`}></img>
            {this.observerGroupName}
          </span>
        ) : (
          ''
        )}
      </div>
    );
  }
}
