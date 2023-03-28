

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/SnowTempObservation',
}

const Template = (args) => `<varsom-snow-temp-obs
depth=${args.Depth}
snow-temp=${args.SnowTemp}

>
</varsom-snow-temp-obs> `

export const VarsomSnowTempObs = Template.bind({});
VarsomSnowTempObs.args = {

    Depth: 0.24,
    SnowTemp: 4,

    }