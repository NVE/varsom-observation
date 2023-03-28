

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/WaterMeasurement',
}

const Template = (args) => `<varsom-water-measurement
water-level-value=${args.WaterLevelValue}
dt-measurement-time=${args.DtMeasurementTime}
comment=${args.Comment}
>
</varsom-water-measurement> `

export const VarsomWaterMeasurement = Template.bind({});
VarsomWaterMeasurement.args = {

    WaterLevelValue: 8,
    DtMeasurementTime: "'2023-02-02 kl. 16:30'",
    Comment: "'Mye vann'"
    }