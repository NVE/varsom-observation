

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalacheActivityObservation',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""]}
          },
}

const Template = (args) => `<varsom-avalanche-activity-obs 
estimated-num-name=${args.EstimatedNumName} 
destructive-size-name=${args.DestructiveSizeName} 
avalanche-trigger-name=${args.AvalancheTriggerName} 
Comment=${args.Comment}
header=${args.Header}
short-version=${args.shortVersion}
>
</varsom-avalanche-activity-obs> `

export const VarsomAvalancheActivityObservation = Template.bind({});
VarsomAvalancheActivityObservation.args = {
        EstimatedNumName: "'Noen (2-5)'",
        Comment: "'Vanskelig å se om skredene er flakskred. På det nærmeste skredet var eventuell bruddkant nedføyket'",
        DestructiveSizeName: "'2 - Middels'",
        AvalancheTriggerName: "'Naturlig utløst'",
        Header: "'Tørre flakskred'"
        
    }