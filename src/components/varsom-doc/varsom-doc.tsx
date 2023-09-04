import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-doc',
  styleUrl: 'varsom-doc.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomDoc {
  @Prop() Text: any;

  render() {
    return <div>{this.Text}</div>;
  }
}
