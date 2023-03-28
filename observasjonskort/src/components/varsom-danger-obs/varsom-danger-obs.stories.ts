

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/DangerObservation',
}

const Template = (args) => `<varsom-danger-obs
comment=${args.Comment}
danger-sign-name=${args.DangerSignName} 
>
</varsom-danger-obs> `

export const VarsomDangerObservation = Template.bind({});
VarsomDangerObservation.args = {

    DangerSignName: "'Fersk vindtransportert snø'",
    Comment: "'Ingen spesiell kommentar...'"


    }