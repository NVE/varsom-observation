

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalancheDangerObservation',
}

const Template = (args) => `<varsom-avalanche-danger-obs
comment=${args.Comment}
danger-sign-name=${args.DangerSignName} 
>
</varsom-avalanche-danger-obs> `

export const VarsomAvalancheDangerObservation = Template.bind({});
VarsomAvalancheDangerObservation.args = {

    DangerSignName: "'Fersk vindtransportert snø'",
    Comment: "'Ingen spesiell kommentar...'"

    }