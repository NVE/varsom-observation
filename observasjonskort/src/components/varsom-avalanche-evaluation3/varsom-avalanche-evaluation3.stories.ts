

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalacheEvaluation3',
}

const Template = (args) => `<varsom-avalanche-evaluation3 
avalanche-evaluation=${args.AvalancheEvaluation}
avalanche-development=${args.AvalancheDevelopment}
forecast-comment=${args.ForecastComment} 
forecast-correct-name=${args.ForecastCorrectName} 
 
>
</varsom-avalanche-evaluation3> `

export const VarsomAvalancheEvaluation3 = Template.bind({});
VarsomAvalancheEvaluation3.args = {

    AvalancheEvaluation: "'Moderat skredfare'",
    ForecastComment: "'Fg og skredproblem nedfokket nysnø stemmer bra med dagens obs'",
    AvalancheDevelopment: "'Fortsatt lave kvelds og nattetemperaturer gjør at utvikling av kantkorn vil kunne fortsette. Fortsatt løs snø tilgjengelig for transport i høyden, så ved vind endring vil det kunne dannes nye myke flak i lesider. Sola begynner også å påvirke snøoverflaten nå, så i bratte solhellinger kan bindinger svekkes, og det kan gå naturlig utløste løssnøskred'",
    ForecastCorrectName: "'Varslet faregrad er riktig'",

    }