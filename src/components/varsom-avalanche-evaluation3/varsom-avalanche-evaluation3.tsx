import { Component, Prop, h } from '@stencil/core';
import { getDangerTypeSvg, valueIsNotGiven } from '../../utils/utils';
import { Attachment } from '../../models/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';
import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-avalanche-evaluation3',
  styleUrl: 'varsom-avalanche-evaluation3.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomAvalancheEvaluation3 {
  private strings: any;
  @Prop() shortVersion: any;
  @Prop() AvalancheDangerName: any;
  @Prop() ForecastCorrectName: any;
  @Prop() AvalancheDangerTID: any;
  @Prop() AvalancheEvaluation: any;
  @Prop() AvalancheDevelopment: any;
  @Prop() ForecastCorrectTID: any;
  @Prop() ForecastComment: any;
  @Prop() Attachments: Attachment[];
  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div class="container">
        <div class="content">
          {this.AvalancheEvaluation ? <varsom-key-value _key={this.strings.Observations.AvalancheEvaluation3.ObsName} _value={this.AvalancheEvaluation}></varsom-key-value> : ''}

          {this.ForecastCorrectName && !valueIsNotGiven(this.ForecastCorrectName) ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheEvaluation3.ForecastCorrectTID} _value={this.ForecastCorrectName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.AvalancheDevelopment ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheEvaluation3.AvalancheDevelopment} _value={this.AvalancheDevelopment}></varsom-key-value>
          ) : (
            ''
          )}

          {this.ForecastComment ? <varsom-key-value _key={this.strings.Observations.AvalancheEvaluation3.ForecastComment} _value={this.ForecastComment}></varsom-key-value> : ''}

          {this.AvalancheDangerTID ? (
            <div>
              <p>{this.strings.Observations.AvalancheEvaluation.AvalancheDangerTID}</p>

              <span>
                <img src={`src/assets/svg/avalanche/Icon-Avalanche-Danger-Level-${getDangerTypeSvg(this.AvalancheDangerTID)}`}></img>

                <span class="danger-size">{this.AvalancheDangerName} </span>
              </span>
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
