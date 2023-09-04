import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../../models/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';
import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-avalanche-danger-obs',
  styleUrl: 'varsom-avalanche-danger-obs.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomAvalancheDangerObs {

  private strings;
  @Prop() shortVersion: string;
  @Prop() DangerSignName: string;
  @Prop() AvalancheDangerObsID: number;
  @Prop() Comment: string;
  @Prop() DangerSignTID: number;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div>
        <div class="parent">
          {this.DangerSignName ? <varsom-key-value _key={this.strings.Observations.AvalancheDangerObs.DangerSignTID} _value={this.DangerSignName}></varsom-key-value> : ''}

          <div>{this.Comment ? <varsom-key-value _key={this.strings.Observations.DangerObs.Comment} _value={this.Comment}></varsom-key-value> : ''}</div>
        </div>
      </div>
    );
  }
}
