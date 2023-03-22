

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalancheEvaluationProblem',
}

const Template = (args) => `<varsom-avalanche-eval-problem
avalanche-ext-name=${args.AvalancheExtName} 
Comment=${args.Comment} 
aval-trigger-simple-name=${args.AvalTriggerSimpleName} 
aval-probability-name=${args.AvalProbabilityName} 
destructive-size-ext-name=${args.DestructiveSizeExtName} 
aval-cause-name=${args.AvalCauseName} 
>
</varsom-avalanche-eval-problem> `

export const VarsomAvalancheEvaluationProblem = Template.bind({});
VarsomAvalancheEvaluationProblem.args = {
 
        Comment: "'Solutløste skred'",
        AvalancheExtName: "'Tørre flakskred'",
        AvalTriggerSimpleName: "'Svært vanskelig å løse ut'",
        AvalProbabilityName: "'Lite sannsynlig'",
        DestructiveSizeExtName: "'2 - middels'",
        AvalCauseName: "'Nedføyket svakt lag med nysnø'"

    }