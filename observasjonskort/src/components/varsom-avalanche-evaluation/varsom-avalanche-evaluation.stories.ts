

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalacheEvaluation',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""]}
          }
}

const Template = (args) => `<varsom-avalanche-evaluation 
avalanche-evaluation-1=${args.AvalancheEvaluation1}
comment=${args.Comment} 
avalanche-danger-t-i-d=${args.AvalancheDangerTID} 
short-version=${args.shortVersion} 
>
</varsom-avalanche-evaluation> `

export const VarsomAvalancheEvaluation = Template.bind({});
VarsomAvalancheEvaluation.args = {

    AvalancheEvaluation1: "'Moderat skredfare'",
    Comment: "'På dette stedet. Beskrivelse: Overflatrim'",
    AvalancheDangerTID: 1

    }