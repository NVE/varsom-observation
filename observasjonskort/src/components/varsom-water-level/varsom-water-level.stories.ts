

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/WaterLevel',
}

const Template = (args) => `<varsom-water-level
water-level-ref-t-i-d=${args.WaterLevelRefTID}
water-level-described=${args.WaterLevelDescribed}
water-level-value=${args.WaterLevelValue}
>
</varsom-water-level> `

export const VarsomWaterLevel = Template.bind({});
VarsomWaterLevel.args = {

    WaterLevelRefTID: 8,
    WaterLevelDescribed: 4,
    WaterLevelValue: "'Mye vann'"
    }