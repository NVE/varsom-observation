import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../../models/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-water-level',
  styleUrl: 'varsom-water-level.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomWaterLevel {
  private strings: any;
  @Prop() shortVersion: any;
  @Prop() WaterLevelDescribed: any;
  @Prop() WaterLevelValue: any;
  @Prop() WaterLevelRefTID: any;
  @Prop() WaterLevelRefName: any;
  @Prop() MeasuredDischarge: any;
  @Prop() IsRiver: any;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div class="parent">
        <varsom-label-small label={this.strings.Observations.WaterLevel.ObsName}></varsom-label-small>

        {this.WaterLevelRefTID ? <varsom-key-value _key={this.strings.Observations.WaterLevel.WaterLevelRefTName} _value={this.WaterLevelRefName}></varsom-key-value> : ''}

        {this.WaterLevelDescribed ? <varsom-key-value _key={this.strings.Observations.WaterLevel.WaterLevelDescribed} _value={this.WaterLevelDescribed}></varsom-key-value> : ''}

        {this.WaterLevelValue ? <varsom-key-value _key={this.strings.Observations.WaterLevel.WaterLevelValue} _value={this.WaterLevelValue}></varsom-key-value> : ''}

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
