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
    interface VarsomHeader {
        "regId": string;
        "region": string;
    }
    interface VarsomMetadata {
        "competenceLevelName": any;
        "dateOfLastUpdate"?: any;
        "dateOfRegistration": any;
        "geoHazardName": any;
        "moh": any;
        "nickname": any;
        "observerGroupName": any;
        "strings"?: any;
    }
    interface VarsomObservation {
        "count": number;
        "language": string;
        "number": number;
        "regid": string;
        "type": string;
    }
    interface VarsomSchema {
        "comment": string;
        "copyright": string;
        "label": string;
        "observer": string;
        "photographer": string;
        "registrationName": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLVarsomHeaderElement extends Components.VarsomHeader, HTMLStencilElement {
    }
    var HTMLVarsomHeaderElement: {
        prototype: HTMLVarsomHeaderElement;
        new (): HTMLVarsomHeaderElement;
    };
    interface HTMLVarsomMetadataElement extends Components.VarsomMetadata, HTMLStencilElement {
    }
    var HTMLVarsomMetadataElement: {
        prototype: HTMLVarsomMetadataElement;
        new (): HTMLVarsomMetadataElement;
    };
    interface HTMLVarsomObservationElement extends Components.VarsomObservation, HTMLStencilElement {
    }
    var HTMLVarsomObservationElement: {
        prototype: HTMLVarsomObservationElement;
        new (): HTMLVarsomObservationElement;
    };
    interface HTMLVarsomSchemaElement extends Components.VarsomSchema, HTMLStencilElement {
    }
    var HTMLVarsomSchemaElement: {
        prototype: HTMLVarsomSchemaElement;
        new (): HTMLVarsomSchemaElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "varsom-header": HTMLVarsomHeaderElement;
        "varsom-metadata": HTMLVarsomMetadataElement;
        "varsom-observation": HTMLVarsomObservationElement;
        "varsom-schema": HTMLVarsomSchemaElement;
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
    interface VarsomHeader {
        "regId"?: string;
        "region"?: string;
    }
    interface VarsomMetadata {
        "competenceLevelName"?: any;
        "dateOfLastUpdate"?: any;
        "dateOfRegistration"?: any;
        "geoHazardName"?: any;
        "moh"?: any;
        "nickname"?: any;
        "observerGroupName"?: any;
        "strings"?: any;
    }
    interface VarsomObservation {
        "count"?: number;
        "language"?: string;
        "number"?: number;
        "regid"?: string;
        "type"?: string;
    }
    interface VarsomSchema {
        "comment"?: string;
        "copyright"?: string;
        "label"?: string;
        "observer"?: string;
        "photographer"?: string;
        "registrationName"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "varsom-header": VarsomHeader;
        "varsom-metadata": VarsomMetadata;
        "varsom-observation": VarsomObservation;
        "varsom-schema": VarsomSchema;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "varsom-header": LocalJSX.VarsomHeader & JSXBase.HTMLAttributes<HTMLVarsomHeaderElement>;
            "varsom-metadata": LocalJSX.VarsomMetadata & JSXBase.HTMLAttributes<HTMLVarsomMetadataElement>;
            "varsom-observation": LocalJSX.VarsomObservation & JSXBase.HTMLAttributes<HTMLVarsomObservationElement>;
            "varsom-schema": LocalJSX.VarsomSchema & JSXBase.HTMLAttributes<HTMLVarsomSchemaElement>;
        }
    }
}
