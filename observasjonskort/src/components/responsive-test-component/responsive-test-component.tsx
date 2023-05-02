/*import { Component, Prop, State, Listen } from "@stencil/core";
import { ViewportSize} from "../viewport-size-publisher/viewport-size-publisher";
@Component({
  tag: 'group-home-page'
})
export class GroupHomePage {
  
  @State() viewportSize: ViewportSize;

  async componentWillLoad() {
    
    // Get current viewport size, set this.viewportSize accordingly.
    let viewportSizePubElem = document.querySelector('viewport-size-publisher');
    this.viewportSize = await viewportSizePubElem.getCurrentSize();
  }

  @Listen('document:sizeChanged')
  handleViewportSizeChange(event: any) {
    ...
    this.viewportSize = event.detail.size;
  }

  renderForSmallerSizes() {
    return [
        <div><p>Small screen size</p></div>
     
    ];
  }

  renderForLargerSizes() {
    return [
      ...
      //<ion-list> components with surrounding <ion-card>
      ...
    ];
  }

  renderBasedOnSize() {

    switch (this.viewportSize) {
      case ViewportSize.ExtraSmall:
      case ViewportSize.Small:
      case ViewportSize.Medium: {
        return this.renderForSmallerSizes();
      }
      case ViewportSize.Large:
      case ViewportSize.ExtraLarge: {
        return this.renderForLargerSizes();
      }
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='secondary'>
          <ion-buttons slot='start'>
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{ this.group ? this.group.name : '...' }</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>

        {this.renderBasedOnSize()}

      </ion-content>
    ];
  }
}
*/