export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/VarsomObservation',
    argTypes: {
        language: { control: "select", options: ["en", "de", "it",
    "sl", "nn", "nb", "sv"] },
    type: {control: "select", options: ["Snow", "Ice", "Dirt", "Water", ""]},
      }
     
}

const Template = (args) => `<varsom-observation regid=${args.regid} type="${args.type}" count=${args.count} language="${args.language}"></varsom-observation> `

export const VarsomObservation = Template.bind({});
    VarsomObservation.args = {
        count: 1,
        regid: "''",
        language: "nb",
        type: "Snow"
    }