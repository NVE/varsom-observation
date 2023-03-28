

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/SnowProfile2',
}

const Template = (args) => `<varsom-snow-profile2
comment=${args.Comment}
>
</varsom-snow-profile2> `

export const VarsomSnowProfile2 = Template.bind({});
VarsomSnowProfile2.args = {

    Comment: "'Kommentar...'",

    }