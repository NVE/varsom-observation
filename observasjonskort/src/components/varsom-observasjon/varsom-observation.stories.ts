export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/VarsomObservation',
    argTypes: {
        language: { control: "select", options: ["English", "German", "Italian",
    "Slovenian", "Nynorsk", "Norwegian", "Swedish"] },
    type: {control: "select", options: ["Snow", "Ice", "Dirt", "Water"]}
      },
}

const Template = (args) => `<varsom-observation regId=${args.regid} type="${args.type}" count=${args.count} language="${args.language}"></varsom-observation> `

export const VarsomObservation = Template.bind({});
    VarsomObservation.args = {
        count: 1,
        regid: 0
    }