

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalancheDangerObservation',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""],
    defaultValue: ""}
          }
}

const Template = (args) => `<varsom-avalanche-danger-obs
comment=${args.Comment}
danger-sign-name=${args.DangerSignName} 
short-version=${args.shortVersion} 
>
</varsom-avalanche-danger-obs> `

export const VarsomAvalancheDangerObservation = Template.bind({});
VarsomAvalancheDangerObservation.args = {

    DangerSignName: "'Fersk vindtransportert snø'",
    Comment: "'Ingen spesiell kommentar...'"

    }