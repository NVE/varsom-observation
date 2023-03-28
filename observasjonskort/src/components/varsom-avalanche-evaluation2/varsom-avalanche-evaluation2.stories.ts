

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalacheEvaluation2',
}

const Template = (args) => `<varsom-avalanche-evaluation2 
avalanche-evaluation=${args.AvalancheEvaluation}
avalanche-development=${args.AvalancheDevelopment}
Comment=${args.Comment} 
>
</varsom-avalanche-evaluation2> `

export const VarsomAvalancheEvaluation2 = Template.bind({});
VarsomAvalancheEvaluation2.args = {

    AvalancheEvaluation: "'Moderat skredfare'",
    Comment: "'På dette stedet. Beskrivelse: Overflatrim'",
    AvalancheDevelopment: "'Fortsatt lave kvelds og nattetemperaturer gjør at utvikling av kantkorn vil kunne fortsette. Fortsatt løs snø tilgjengelig for transport i høyden, så ved vind endring vil det kunne dannes nye myke flak i lesider. Sola begynner også å påvirke snøoverflaten nå, så i bratte solhellinger kan bindinger svekkes, og det kan gå naturlig utløste løssnøskred'"

    }