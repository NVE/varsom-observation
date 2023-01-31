import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'varsom-observation',
  styleUrl: 'varsom-observation.css',
  shadow: true,
})
export class VarsomObservation {
  /**
   * The first name
   */
  @Prop() id: string;

  /**
   * The middle name
   */
  @Prop() type: string;

  /**
   * The last name
   */
  @Prop() number: string;

 
    private getText(): string {
      return <div>id : {this.id}, type: {this.type}, number: {this.number} </div>;
    }
  
    render() {
      return <div>This is a varsom-observasjon-component {this.getText()}</div>;
    }
}
