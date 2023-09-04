import { Component, Prop, h } from '@stencil/core';
import { getDangerTypeSvg } from '../../utils/utils';

import { Attachment, AvalancheEvalProblem } from '../../models/observation-model';

import { Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'varsom-avalanche-evaluation2',
  styleUrl: 'varsom-avalanche-evaluation2.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomAvalancheEvaluation2 {

  private strings;
  @Prop() shortVersion: string;
  @Prop() AvalancheDangerName: string;
  @Prop() ValidExposition: string;
  @Prop() AvalancheEvaluation: string;
  @Prop() AvalancheDevelopment: string;
  @Prop() ExposedHeight1: number;
  @Prop() ExposedHeight2: number;
  @Prop() ExposedHeightComboTID: number;
  @Prop() ExposedHeightComboName: string;
  @Prop() ExposedClimateTID: number;
  @Prop() ExposedClimateName: string;
  @Prop() AvalancheDangerTID: number;
  @Prop() Comment: string;
  @Prop() AvalancheEvalProblems: AvalancheEvalProblem[];
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div class="container">
        <div class="content">
          {this.AvalancheEvaluation ? <varsom-key-value _key={this.strings.Observations.AvalancheEvaluation2.ObsName} _value={this.AvalancheEvaluation}></varsom-key-value> : ''}

          {this.AvalancheDevelopment ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheEvaluation2.AvalancheDevelopment} _value={this.AvalancheDevelopment}></varsom-key-value>
          ) : (
            ''
          )}

          {this.AvalancheDangerTID ? (
            <div>
              <p>{this.strings ? this.strings.Observations.AvalancheEvaluation.AvalancheDangerTID : 'Faregrad'}</p>

              <span>
                <img src={`src/assets/svg/avalanche/Icon-Avalanche-Danger-Level-${getDangerTypeSvg(this.AvalancheDangerTID)}`}></img>

                <span class="danger-size">{this.AvalancheDangerName} </span>
              </span>
            </div>
          ) : (
            ''
          )}

          <div>{this.Comment ? <varsom-key-value _key={this.strings.Observations.AvalancheEvaluation3.ForecastComment} _value={this.Comment}></varsom-key-value> : ''}</div>

          {this.AvalancheEvalProblems ? (
            <div>
              {this.AvalancheEvalProblems.map((el: AvalancheEvalProblem = {}) => {
                return (
                  <varsom-avalanche-eval-problem
                    shortVersion={this.shortVersion ? this.shortVersion : null}
                    AvalancheEvalProblemID={el.AvalancheEvalProblemID ? el.AvalancheEvalProblemID : null}
                    AvalProbabilityTID={el.AvalProbabilityTID ? el.AvalProbabilityTID : null}
                    AvalProbabilityName={el.AvalProbabilityName ? el.AvalProbabilityName : null}
                    AvalTriggerSimpleTID={el.AvalTriggerSimpleTID ? el.AvalTriggerSimpleTID : null}
                    AvalTriggerSimpleName={el.AvalTriggerSimpleName ? el.AvalTriggerSimpleName : null}
                    DestructiveSizeExtTID={el.DestructiveSizeExtTID ? el.DestructiveSizeExtTID : null}
                    DestructiveSizeExtName={el.DestructiveSizeExtName ? el.DestructiveSizeExtName : null}
                    AvalancheExtTID={el.AvalancheExtTID ? el.AvalancheExtTID : null}
                    AvalancheExtName={el.AvalancheExtName ? el.AvalancheExtName : null}
                    AvalCauseTID={el.AvalCauseTID ? el.AvalCauseTID : null}
                    AvalCauseExtTID={el.AvalCauseExtTID ? el.AvalCauseExtTID : null}
                    AvalCauseName={el.AvalCauseName ? el.AvalCauseName : null}
                    AvalCauseExtName={el.AvalCauseExtName ? el.AvalCauseExtName : null}
                    AvalReleaseHeightTID={el.AvalReleaseHeightTID ? el.AvalReleaseHeightTID : null}
                    AvalReleaseHeightName={el.AvalReleaseHeightName ? el.AvalReleaseHeightName : null}
                    AvalancheProbabilityAutoText={el.AvalancheProbabilityAutoText ? el.AvalancheProbabilityAutoText : null}
                    AvalancheProblemAutoText={el.AvalancheProblemAutoText ? el.AvalancheProblemAutoText : null}
                    Comment={el.Comment ? el.Comment : null}
                  ></varsom-avalanche-eval-problem>
                );
              })}
            </div>
          ) : (
            ''
          )}
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
