

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalacheEvaluation',
}

const Template = (args) => `<varsom-avalanche-evaluation 
avalanche-evaluation-1=${args.AvalancheEvaluation1}
Comment=${args.Comment} 
>
</varsom-avalanche-evaluation> `

export const VarsomAvalancheEvaluation = Template.bind({});
VarsomAvalancheEvaluation.args = {

    AvalancheEvaluation1: "'Moderat skredfare'",
    Comment: "'På dette stedet. Beskrivelse: Overflatrim'"

    }