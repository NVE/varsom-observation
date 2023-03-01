export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/VarsomObservation'
}

const Template = (args) => `<varsom-observation regId=${args.regId} type="${args.type}" count=${args.count} language="${args.language}"></varsom-observation> `

export const ObservationWithRegId = Template.bind({});
    ObservationWithRegId.args = {
        language: 'English',
        type: 'Water',
        count: 1,
        regId: 999
    }