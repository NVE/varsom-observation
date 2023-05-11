

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/SnowDensityLayer',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""],
    defaultValue: ""}
          }
}

const Template = (args) => `<varsom-snow-density-layer
depth=${args.Depth}
thickness=${args.Thickness}
weight=${args.Weight}
water-equivalent=${args.WaterEquivalent}
short-version=${args.shortVersion}  
>
</varsom-snow-density-layer> `

export const VarsomSnowDensityLayer = Template.bind({});
VarsomSnowDensityLayer.args = {

    Depth: "4",
    Thickness: "2",
    Weight: "2",
    WaterEquivalent: "4",

    }