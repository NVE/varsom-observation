

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/CompressionTest',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""]}
          }
}

const Template = (args) => `<varsom-compression-test
comment=${args.Comment}
stability-eval-name=${args.StabilityEvalName}
propagation-name=${args.PropagationName}
short-version=${args.shortVersion}  


>
</varsom-compression-test> `

export const VarsomCompressionTest = Template.bind({});
VarsomCompressionTest.args = {
 
        Comment: "'Såvidt forplantning, mykt flak. Resten av snøpakka henger godt sammen tross mye kantkorn'",
        StabilityEvalName: "'dårlig'",
        PropagationName: "'ECTP1@28cm(Q2)'"
        
    }