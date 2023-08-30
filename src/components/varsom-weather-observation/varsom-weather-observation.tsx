import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../../models/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';
import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-weather-observation',
  styleUrl: 'varsom-weather-observation.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomWeatherObservation {
  private strings: any;
  @Prop() shortVersion: any;
  @Prop() PrecipitationName: any;
  @Prop() WindDirectionName: any;
  @Prop() PrecipitationTID: any;
  @Prop() AirTemperature: any;
  @Prop() WindDirection: any;
  @Prop() WindSpeed: any;
  @Prop() CloudCover: any;
  @Prop() Comment: any;
  @Prop() Attachments?: Attachment[];
  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }
  get WindInfo(): string {
    return this.WindSpeed + ' m/s ' + this.strings.Observations.WeatherObservation.WindDirection + ' ' + this.WindDirectionInfo;
  }

  get WindDirectionInfo(): string {
    return this.WindDirectionName + ' ' + this.WindDirectionArrow;
  }

  get WindDirectionArrow(): string {
    switch (
      this.WindDirection //unicode code for arrows
    ) {
      case 0: {
        return '\u2193'; //wind from north
      }
      case 45: {
        //from north east
        return '\u2199';
      }
      case 90: {
        return '\u27f5'; //from east
      }
      case 135: {
        return '\u2196'; //south east
      }
      case 180: {
        return '\u2191'; //south
      }
      case 225: {
        return '\u2197'; //south west
      }
      case 270: {
        return '\u27f6'; //west
      }
      case 315: {
        //north west
        return '\u2198';
      }
    }
  }

  render() {
    return (
      <div class="container">
        <varsom-label label={this.strings.Observations.WeatherObservation.ObsName}></varsom-label>

        <div class="content">
          {this.PrecipitationName ? <varsom-key-value _key={this.strings.Observations.WeatherObservation.PrecipitationTID} _value={this.PrecipitationName}></varsom-key-value> : ''}

          {this.AirTemperature ? (
            <varsom-key-value
              _key={this.strings.Observations.WeatherObservation.AirTemperature}
              _value={this.AirTemperature + ' ' + '\u00b0' + 'C'} //unicode for degrees symbol
            ></varsom-key-value>
          ) : (
            ''
          )}

          {this.WindDirection && this.WindSpeed ? <varsom-key-value _key={this.strings.Observations.WeatherObservation.Wind} _value={this.WindInfo}></varsom-key-value> : ''}

          {this.CloudCover ? (
            <varsom-key-value
              _key={this.strings.Observations.WeatherObservation.CloudCover}
              _value={this.CloudCover + '% ' + this.strings.Observations.WeatherObservation.Clouds}
            ></varsom-key-value>
          ) : (
            ''
          )}

          <br></br>
          {this.Comment ? <varsom-key-value _key={this.strings.Observations.WeatherObservation.Comment} _value={this.Comment}></varsom-key-value> : ''}
        </div>

        {this.Attachments && !this.shortVersion ? (
          <span class="attachments-container">
            {this.Attachments.map((el: Attachment = {}) => {
              return (
                <varsom-attachment
                  Photographer={el.Photographer ? el.Photographer : null}
                  Comment={el.Comment ? el.Comment : null}
                  Url={el.Url ? el.Url : null}
                  Copyright={el.Copyright ? el.Copyright : null}
                ></varsom-attachment>
              );
            })}{' '}
          </span>
        ) : (
          ''
        )}
      </div>
    );
  }
}
