import { Component, Prop, h } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-ice-thickness-layer',
  styleUrl: 'varsom-ice-thickness-layer.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomIceThicknessLayer {
  private strings: any;
  @Prop() shortVersion: any;
  @Prop() Comment: any;
  @Prop() IceLayerName: any;
  @Prop() IceLayerThickness: any;

  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div>
        {this.IceLayerThickness && this.IceLayerName ? (
          <varsom-key-value
            _key={this.strings.Observations.IceCoverObs.IceSkateabilityTName}
            _value={this.IceLayerThickness + ' ' + this.IceLayerName + '. ' + (this.Comment ? this.Comment : '')}
          ></varsom-key-value>
        ) : (
          ''
        )}
      </div>
    );
  }
}
