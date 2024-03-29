import { Component, Prop, h } from '@stencil/core';
import { valueIsNotGiven } from '../../utils/utils';

@Component({
  tag: 'varsom-key-value',
  styleUrl: 'varsom-key-value.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomKeyValue {

  @Prop() _key: string;
  @Prop() _value?: string | number | boolean;
  @Prop() shortVersion: string;

  render() {
    let keyValue = (
      <span tabIndex={0}>
        {this.shortVersion ? (
          <span>
            {this.renderColon()}
            {this._value}
          </span>
        ) : (
          <span>
            <span class="label">
              {this._key}
              {this.renderColon()}{' '}
            </span>
            {this._value}
          </span>
        )}
      </span>
    );
    return valueIsNotGiven(this._value) ? null : keyValue;
  }
  renderColon() {
    if (this.shortVersion) {
      return '\u25CF '; //Bullet point
    } else {
      return ': ';
    }
  }
}
