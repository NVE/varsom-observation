

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/GeneralObservation',
}

const Template = (args) => `<varsom-general-observation
obs-comment=${args.ObsComment}
obs-header=${args.ObsHeader} 
>
</varsom-general-observation> `

export const VarsomGeneralObservation = Template.bind({});
VarsomGeneralObservation.args = {

    ObsHeader: "'Overskrift...'",
    ObsComment: "'Ingen spesiell kommentar...'"


    }