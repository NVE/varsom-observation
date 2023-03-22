

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/IceCoverObservation',
}

const Template = (args) => `<varsom-ice-cover-observation 
ice-cover-name=${args.IceCoverName}
ice-capacity-name=${args.IceCapacityName}
ice-skateability-name=${args.IceSkateabilityName} 
comment=${args.Comment} 
 
>
</varsom-ice-cover-observation> `

export const VarsomIceCoverObservation = Template.bind({});
VarsomIceCoverObservation.args = {

    IceCoverName: "'Hele sjøen islagt'",
    IceCapacityName: "'Liten fare for å gå igjennom'",
    IceSkateabilityName: "'Ikke skøytbart'",
    Comment: "'Tykt sørpelag under snøen. Bærer en mann men usikker på skuter'",

    }