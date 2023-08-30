import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../../models/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';
import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-avalanche-eval-problem2',
  styleUrl: 'varsom-avalanche-eval-problem2.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomAvalancheEvalProblem2 {
  private strings: any;
  @Prop() shortVersion: any;
  @Prop() AvalProbabilityTID: any;
  @Prop() AvalProbabilityName: any;
  @Prop() AvalCauseDepthTID: any;
  @Prop() AvalTriggerSimpleName: any;
  @Prop() AvalCauseDepthName: any;
  @Prop() ValidExposition: any;
  @Prop() ExposedHeight1: any;
  @Prop() ExposedHeight2: any;
  @Prop() ExposedHeightComboTID: any;
  @Prop() ExposedHeightComboName: any;
  @Prop() AvalancheExtTID: any;
  @Prop() AvalancheExtName: any;
  @Prop() AvalCauseTID: any;
  @Prop() AvalCauseName: any;
  @Prop() AvalCauseAttributeLightTID: any;
  @Prop() AvalCauseAttributeLightName: any;
  @Prop() AvalCauseAttributeThinTID: any;
  @Prop() AvalCauseAttributeThinName: any;
  @Prop() AvalCauseAttributeSoftTID: any;
  @Prop() AvalCauseAttributeSoftName: any;
  @Prop() AvalCauseAttributeCrystalTID: any;
  @Prop() AvalCauseAttributeCrystalName: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() AvalTriggerSimpleTID: any;
  @Prop() DestructiveSizeName: any;
  @Prop() AvalPropagationTID: any;
  @Prop() AvalPropagationName: any;
  @Prop() Comment: any;
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

          {this.AvalPropagationName ? <varsom-key-value _key={this.strings.Observations.AvalancheProblem.Propagation} _value={this.AvalPropagationName}></varsom-key-value> : ''}

          {this.AvalCauseDepthName ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheEvalProblem2.AvalCauseDepthTID} _value={this.AvalCauseDepthName}></varsom-key-value>
          ) : (
            ''
          )}

          <varsom-key-value
            _key={this.strings.Observations.AvalancheEvalProblem2.AvalCauseAttributeLightTID}
            _value={
              this.AvalCauseAttributeLightName
                ? this.AvalCauseAttributeLightName
                : '' + this.AvalCauseAttributeThinName
                ? this.AvalCauseAttributeThinName
                : '' + this.AvalCauseAttributeSoftName
                ? this.AvalCauseAttributeSoftName
                : '' + this.AvalCauseAttributeCrystalName
                ? this.AvalCauseAttributeCrystalName
                : ''
            }
          ></varsom-key-value>

          {this.AvalProbabilityName ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheEvalProblem2.AvalProbabilityTID} _value={this.AvalProbabilityName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.AvalTriggerSimpleName ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheEvalProblem2.AvalTriggerSimpleTID} _value={this.AvalTriggerSimpleName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.DestructiveSizeName ? (
            <varsom-key-value _key={this.strings.Observations.AvalancheEvalProblem2.DestructiveSizeTID} _value={this.DestructiveSizeName}></varsom-key-value>
          ) : (
            ''
          )}

          <varsom-exposed-height
            ValidExposition={this.ValidExposition ?? null}
            ExposedHeight1={this.ExposedHeight1 ?? null}
            ExposedHeight2={this.ExposedHeight2 ?? null}
          ></varsom-exposed-height>

          <div>{this.Comment ? <varsom-key-value _key={this.strings.Observations.AvalancheEvalProblem2.Comment} _value={this.Comment}></varsom-key-value> : ''}</div>

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
