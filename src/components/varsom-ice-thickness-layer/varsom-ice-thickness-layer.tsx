import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-ice-thickness-layer',
  styleUrl: 'varsom-ice-thickness-layer.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomIceThicknessLayer {
  @Prop() strings: any;
  @Prop() shortVersion: any;
  @Prop() Comment: any;
  @Prop() IceLayerName: any;
  @Prop() IceLayerThickness: any;

  render() {
    return (
      <div>
        {this.IceLayerThickness && this.IceLayerName ? (
          <varsom-key-value
            _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.IceSkateabilityTName : this.shortVersion ? null : 'Islag (ovenfra og ned)'}
            _value={this.IceLayerThickness + ' ' + this.IceLayerName + '. ' + (this.Comment ? this.Comment : '')}
          ></varsom-key-value>
        ) : (
          ''
        )}
      </div>
    );
  }
}
