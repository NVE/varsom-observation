import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../../models/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-avalanche-eval-problem',
  styleUrl: 'varsom-avalanche-eval-problem.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomAvalancheEvalProblem {

  private strings;
  @Prop() shortVersion: string;
  @Prop() AvalancheEvalProblemID: number;
  @Prop() AvalProbabilityTID: number;
  @Prop() AvalProbabilityName: string;
  @Prop() AvalTriggerSimpleTID: number;
  @Prop() AvalTriggerSimpleName: string;
  @Prop() DestructiveSizeExtTID: number;
  @Prop() DestructiveSizeExtName: string;
  @Prop() AvalancheExtTID: number;
  @Prop() AvalancheExtName: string;
  @Prop() AvalCauseTID: number;
  @Prop() AvalCauseExtTID: number;
  @Prop() AvalCauseName: string;
  @Prop() AvalCauseExtName: string;
  @Prop() AvalReleaseHeightTID: number;
  @Prop() AvalReleaseHeightName: string;
  @Prop() AvalancheProbabilityAutoText: string;
  @Prop() AvalancheProblemAutoText: string;
  @Prop() Comment: string;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div>
        <div class="parent">
          {this.AvalCauseName ? <varsom-label-small label={this.AvalCauseName}></varsom-label-small> : ''}

          {this.AvalancheExtName ? <varsom-key-value _key={this.strings.Observations.AvalancheProblem.AvalancheType} _value={this.AvalancheExtName}></varsom-key-value> : ''}

          {this.AvalTriggerSimpleName ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheProblem.AvalTriggerSimpleTID} _value={this.AvalTriggerSimpleName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.AvalProbabilityName ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheProblem.AvalProbabilityTID} _value={this.AvalProbabilityName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.DestructiveSizeExtName ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheProblem.DestructiveSizeTID} _value={this.DestructiveSizeExtName}></varsom-key-value>
          ) : (
            ''
          )}

          <div>{this.Comment ? <varsom-key-value _key={this.strings.Observations.AvalancheProblem.Comment} _value={this.Comment}></varsom-key-value> : ''}</div>

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
      </div>
    );
  }
}
