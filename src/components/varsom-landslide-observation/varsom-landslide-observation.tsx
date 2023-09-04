import { Component, Prop, h } from '@stencil/core';
import { Attachment, Url } from '../../models/observation-model';
import { getStartEndTimeFormatted } from '../../utils/date-utils';
import { Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'varsom-landslide-observation',
  styleUrl: 'varsom-landslide-observation.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomLandslideObservation {

  private strings;
  @Prop() shortVersion: string;
  @Prop() LandSlideName?: string;
  @Prop() LandSlideTriggerName?: string;
  @Prop() ActivityInfluencedName?: string;
  @Prop() GeoHazardName?: string;
  @Prop() ForecastAccurateName?: string;
  @Prop() Urls?: Url[];
  @Prop() DamageExtentName?: string;
  @Prop() LandSlideTID?: number;
  @Prop() LandSlideTriggerTID?: number;
  @Prop() Comment?: string;
  @Prop() LandSlideSizeName?: string;
  @Prop() GeoHazardTID?: number;
  @Prop() ActivityInfluencedTID?: number;
  @Prop() ForecastAccurateTID?: number;
  @Prop() DamageExtentTID?: number;
  @Prop() StartLat?: number;
  @Prop() StartLong?: number;
  @Prop() StopLat?: number;
  @Prop() StopLong?: number;
  @Prop() DtLandSlideTimeEnd?: string;
  @Prop() DtLandSlideTime?: string;
  @Prop() LandSlideSizeTID?: number;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

  get landslideTimeFormatted(): string {
    return getStartEndTimeFormatted(this.DtLandSlideTime, this.DtLandSlideTimeEnd, this.elem);
  }

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div class="container">
        {/**TODO : IMPLEMENT MAP */}

        <varsom-label label={this.strings ? this.strings.Observations.LandslideObs.ObsName : 'Skredhendelse'}></varsom-label>

        <div class="content">
          {this.DtLandSlideTime && this.DtLandSlideTimeEnd != this.DtLandSlideTime ? (
            <varsom-key-value _key={this.strings.Observations.LandslideObs.Time} _value={this.landslideTimeFormatted}></varsom-key-value>
          ) : (
            ''
          )}

          {this.DtLandSlideTime && this.DtLandSlideTimeEnd && this.strings ? (
            <varsom-key-value
              shortVersion={this.shortVersion ? this.shortVersion : null}
              _key={this.strings.Observations.LandslideObs.Time}
              _value={this.landslideTimeFormatted}
            ></varsom-key-value>
          ) : (
            ''
          )}

          {this.LandSlideName ? (
            <varsom-key-value shortVersion={this.shortVersion} _key={this.strings.Observations.LandslideObs.LandSlideTName} _value={this.LandSlideName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.LandSlideSizeName ? (
            <varsom-key-value _key={this.strings.Observations.LandslideObs.LandSlideSizeTName} _value={this.LandSlideSizeName} shortVersion={this.shortVersion}></varsom-key-value>
          ) : (
            ''
          )}

          {this.LandSlideTriggerName ? (
            <varsom-key-value
              _key={this.strings.Observations.LandslideObs.LandSlideTriggerTName}
              _value={this.LandSlideTriggerName}
              shortVersion={this.shortVersion}
            ></varsom-key-value>
          ) : (
            ''
          )}

          {this.DamageExtentName ? (
            <varsom-key-value _key={this.strings.Observations.LandslideObs.DamageExtentTName} _value={this.DamageExtentName} shortVersion={this.shortVersion}></varsom-key-value>
          ) : (
            ''
          )}

          {this.ForecastAccurateName ? (
            <varsom-key-value
              _key={this.strings.Observations.LandslideObs.ForecastAccurateTName}
              _value={this.ForecastAccurateName}
              shortVersion={this.shortVersion}
            ></varsom-key-value>
          ) : (
            ''
          )}

          <br></br>
          {this.Comment ? <varsom-key-value _key={this.strings.Observations.LandslideObs.Comment} _value={this.Comment} shortVersion={this.shortVersion}></varsom-key-value> : ''}

          {this.Urls ? (
            <div>
              {this.Urls.map((el: Url = {}) => {
                return <varsom-url UrlDescription={el.UrlDescription ? el.UrlDescription : null} UrlLine={el.UrlLine ? el.UrlLine : null}></varsom-url>;
              })}{' '}
            </div>
          ) : (
            ''
          )}
        </div>

        {this.Attachments && !this.shortVersion ? (
          <div class="attachments-container">
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
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
