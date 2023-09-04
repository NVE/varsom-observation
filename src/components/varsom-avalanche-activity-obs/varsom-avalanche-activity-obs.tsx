import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../../models/observation-model';

import { Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'varsom-avalanche-activity-obs',
  styleUrl: 'varsom-avalanche-activity-obs.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomAvalancheActivityObs {
  private strings: any;
  @Prop() header: string;
  @Prop() shortVersion: string;
  @Prop() AvalancheActivityObsID: number;
  @Prop() Aspect: number;
  @Prop() HeigthStartZone: number;
  @Prop() DtAvalancheTime: string;
  @Prop() DestructiveSizeTID: number;
  @Prop() DestructiveSizeName: string;
  @Prop() EstimatedNumTID: number;
  @Prop() EstimatedNumName: string;
  @Prop() AvalancheTID: number;
  @Prop() AvalancheName: string;
  @Prop() AvalancheTriggerTID: number;
  @Prop() AvalancheTriggerName: string;
  @Prop() TerrainStartZoneTID: number;
  @Prop() TerrainStartZoneName: string;
  @Prop() SnowLine: number;
  @Prop() SnowLineName: string;
  @Prop() DtOffAvalancheTime: string;
  @Prop() Comment: string;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div>
        {this.header ? <div class="header">{this.header}</div> : ''}

        <div class="content">
          {this.EstimatedNumName ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheActivityObs.HowManyAvalanches} _value={this.EstimatedNumName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.AvalancheTriggerName ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheActivityObs.AvalancheTriggerTID} _value={this.AvalancheTriggerName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.Comment ? <varsom-key-value _key={this.strings.Observations.AvalancheActivityObs.Comment} _value={this.Comment}></varsom-key-value> : ''}
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
