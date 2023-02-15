/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface VarsomObservation {
        "carousel": Carousel;
        "id": string;
        "language": string;
        "number": number;
        "type": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLVarsomObservationElement extends Components.VarsomObservation, HTMLStencilElement {
    }
    var HTMLVarsomObservationElement: {
        prototype: HTMLVarsomObservationElement;
        new (): HTMLVarsomObservationElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "varsom-observation": HTMLVarsomObservationElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface VarsomObservation {
        "carousel"?: Carousel;
        "id"?: string;
        "language"?: string;
        "number"?: number;
        "type"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "varsom-observation": VarsomObservation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "varsom-observation": LocalJSX.VarsomObservation & JSXBase.HTMLAttributes<HTMLVarsomObservationElement>;
        }
    }
}
