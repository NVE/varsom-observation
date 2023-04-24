// Koden i denne filen er hentet fra https://dev.to/gopherrdiggs/responsive-component-rendering-from-screen-size-3813

import { Component, Event, EventEmitter, Method, Prop } from "@stencil/core";

@Component({
  tag: 'viewport-size-publisher'
})
export class ViewportSizePublisher {

  @Event() sizeChanged: EventEmitter;

  @Prop() sizes: Object[] = [];

  private sizesList;

  componentWillLoad() {

    if (!this.sizes || this.sizes.length < 1) {

      // Default sizes, if none are provided as a Prop
      this.sizesList = [
        { name: 'xs', minWidth: '0', maxWidth: '319' },
        { name: 'sm', minWidth: '320', maxWidth: '511' },
        { name: 'md', minWidth: '512', maxWidth: '991' },
        { name: 'lg', minWidth: '992', maxWidth: '1199' },
        { name: 'xl', minWidth: '1200', maxWidth: '9999' }
      ];
    }
    else {

      this.sizesList = [...this.sizes];
    }
  }

  componentDidLoad() {

    // Add listeners for all sizes provided
    for (let i = 0; i < this.sizesList.length; i++) {

      window.matchMedia(`(min-width: ${this.sizesList[i].minWidth}px) 
                          and (max-width: ${this.sizesList[i].maxWidth}px)`)
        .addEventListener("change", this.handleMatchMediaChange.bind(this));
    }
  }

  componentDidUnload() {

    // Remove listeners for all sizes provided
    for (let i = 0; i < this.sizesList.length; i++) {

      window.matchMedia(`(min-width: ${this.sizesList[i].minWidth}px) 
                          and (max-width: ${this.sizesList[i].maxWidth}px)`)
        .removeEventListener("change", this.handleMatchMediaChange.bind(this));
    }
  }

  @Method()
  async getCurrentSize() {

    // Iterate over all given sizes and see which one matches
    for (let i = 0; i < this.sizesList.length; i++) {

      if (window.matchMedia(`(min-width: ${this.sizesList[i].minWidth}px) 
          and (max-width: ${this.sizesList[i].maxWidth}px)`).matches) {

        return this.sizesList[i].name;
      }
    }
  }

  handleMatchMediaChange(q) {

    if (q.matches) {

      // Find the name of the matching size and emit an event
      for (let i = 0; i < this.sizesList.length; i++) {

        if (q.media.indexOf(`min-width: ${this.sizesList[i].minWidth}px`) > -1) {

          this.sizeChanged.emit({ size: this.sizesList[i].name });
        }
      }
    }
  }

  render() {
    return [];
  }
}