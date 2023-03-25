

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/SnowDensity',
}

const Template = (args) => `<varsom-snow-density
comment=${args.Comment}
cylinder-diameter=${args.CylinderDiameter}
tare-weight=${args.TareWeight}
>
</varsom-snow-density> `

export const VarsomSnowDensity = Template.bind({});
VarsomSnowDensity.args = {

    Comment: "'Kommentar...'",
    CylinderDiameter: 0.26,
    TareWeight: 0.021



    }