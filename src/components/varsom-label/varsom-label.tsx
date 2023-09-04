import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-label',
  styleUrl: 'varsom-label.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomLabel {

  @Prop() label: string;
  

  render() {
    return <div tabIndex={0}>{this.label}</div>;
  }
}
