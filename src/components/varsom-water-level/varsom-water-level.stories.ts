

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/WaterLevel',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""],
    defaultValue: ""}
          }
}

const Template = (args) => `<varsom-water-level
water-level-ref-t-i-d=${args.WaterLevelRefTID}
water-level-described=${args.WaterLevelDescribed}
water-level-value=${args.WaterLevelValue}
short-version=${args.shortVersion}  
>
</varsom-water-level> `

export const VarsomWaterLevel = Template.bind({});
VarsomWaterLevel.args = {

    WaterLevelRefTID: 8,
    WaterLevelDescribed: 4,
    WaterLevelValue: "'Mye vann'"
    }