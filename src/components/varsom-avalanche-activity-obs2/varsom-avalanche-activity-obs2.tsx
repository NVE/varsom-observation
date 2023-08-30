import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../../models/observation-model';
import { valueIsNotGiven } from '../../utils/utils';
import { getStartEndTimeFormatted } from '../../utils/date-utils';
import { Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'varsom-avalanche-activity-obs2',
  styleUrl: 'varsom-avalanche-activity-obs2.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomAvalancheActivityObs2 {
  private strings: any;
  @Prop() Comment: any;
  @Prop() shortVersion: any;
  @Prop() AvalCauseName: any;
  @Prop() DtStart: any;
  @Prop() EstimatedNumName: any;
  @Prop() ExposedHeightComboName: any;
  @Prop() AvalancheExtName: any;
  @Prop() AvalTriggerSimpleName: any;
  @Prop() DestructiveSizeName: any;
  @Prop() AvalPropagationName: any;
  @Prop() EstimatedNumTID: any;
  @Prop() DtEnd: any;
  @Prop() ValidExposition: any;
  @Prop() ExposedHeight1: any;
  @Prop() ExposedHeight2: any;
  @Prop() ExposedHeightComboTID: any;
  @Prop() AvalancheExtTID: any;
  @Prop() AvalCauseTID: any;
  @Prop() AvalTriggerSimpleTID: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() AvalPropagationTID: any;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

  get avalancheTimeFormatted(): string {
    return getStartEndTimeFormatted(this.DtStart, this.DtEnd, this.elem);
  }

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div>
        <div class="parent">
          {this.AvalCauseName ? <varsom-label-small label={this.AvalancheExtName}></varsom-label-small> : ''}

          {this.DtStart && this.DtEnd ? (
            <span>
              <label>
                <span>{this.strings.Observations.AvalancheActivityObs2.DtAvalancheTime}: </span>
              </label>
              {this.avalancheTimeFormatted}
            </span>
          ) : (
            ''
          )}

          {this.EstimatedNumTID ? (
            <varsom-key-value
              _key={this.strings.Observations.AvalancheActivityObs2.NumberAndSizeAndTrigger}
              _value={
                (this.EstimatedNumName && !valueIsNotGiven(this.EstimatedNumName) ? this.EstimatedNumName + '. ' : '') +
                (this.DestructiveSizeName && !valueIsNotGiven(this.DestructiveSizeName) ? this.DestructiveSizeName + '. ' : '') +
                (this.AvalTriggerSimpleName && !valueIsNotGiven(this.AvalTriggerSimpleName) ? this.AvalTriggerSimpleName : '')
              }
              shortVersion={this.shortVersion}
            ></varsom-key-value>
          ) : (
            ''
          )}

          {this.AvalPropagationTID ? (
            <varsom-key-value
              _key={this.strings.Observations.AvalancheActivityObs2.Prevalence}
              _value={this.AvalPropagationName}
              shortVersion={this.shortVersion}
            ></varsom-key-value>
          ) : (
            ''
          )}

          <varsom-exposed-height
            ValidExposition={this.ValidExposition ?? null}
            ExposedHeight1={this.ExposedHeight1 ?? null}
            ExposedHeight2={this.ExposedHeight2 ?? null}
          ></varsom-exposed-height>

          {this.Comment ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheActivityObs.Comment} _value={this.Comment} shortVersion={this.shortVersion}></varsom-key-value>
          ) : (
            ''
          )}

          {this.Attachments && !this.shortVersion ? (
            <div class="attachments-container">
              {this.Attachments.map((el: Attachment = {}) => {
                return (
                  <varsom-attachment
                    Photographer={el.Photographer ? el.Photographer : null}
                    Comment={el.Comment ? el.Comment : null}
                    Url={el.Url ? el.Url : null}
                    Copyright={el.Copyright ? el.Copyright : null}
                    CropImage
                  ></varsom-attachment>
                );
              })}{' '}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
