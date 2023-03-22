

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalacheActivityObservation2',
}

const Template = (args) => `<varsom-avalanche-activity-obs2 
dt-start=${args.DtStart} 
dt-end=${args.DtEnd} 
estimated-num-t-i-d=${args.EstimatedNumTID} 
estimated-num-name=${args.EstimatedNumName} 
destructive-size-name=${args.DestructiveSizeName} 
aval-trigger-simple-name=${args.AvalTriggerSimpleName} 
aval-propagation-tID=${args.AvalPropagationTID} 
Comment=${args.Comment} 
>
</varsom-avalanche-activity-obs2> `

export const VarsomAvalancheActivityObservation2 = Template.bind({});
VarsomAvalancheActivityObservation2.args = {
        DtStart: "'2023-03-20T00:00:00+01:00'",
        DtEnd: "'2023-03-22T00:00:00+05:00'",
        EstimatedNumTID: "3",
        EstimatedNumName: "'Noen (2-5)'",
        DestructiveSizeName: "'2 - Middels'",
        AvalTriggerSimpleName: "'Naturlig utløst'",
        AvalPropagationTID: "2",
        Comment: "'ingen fersk skredaktivitet på strekningen Sørreisa-Bardufoss i dag'"

    }