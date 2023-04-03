

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/WaterLevel2',
}

const Template = (args) => `<varsom-water-level2
comment=${args.Comment}
measurement-reference-name=${args.MeasurementReferenceName}
measurement-type-name=${args.MeasurementTypeName}
measuring-tool-description=${args.MeasuringToolDescription}
marking-type-name=${args.MarkingTypeName}
observation-timing-name=${args.ObservationTimingName}
water-astray-name=${args.WaterAstrayName}
>
</varsom-water-level2> `

export const VarsomWaterLevel2 = Template.bind({});
VarsomWaterLevel2.args = {

    Comment: "'mye vann'",
    MeasurementReferenceName: "ukjent",
    MeasurementTypeName: "måleinstrument",
    MeasuringToolDescription: "'Gps innmåling vst'",
    MarkingTypeName: "ukjent",
    ObservationTimingName: "ukjent",
    WaterAstrayName: "ja",
    WaterLevelStateName: "'vannstand synkende'",
    }