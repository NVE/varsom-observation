

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/GeneralObservation',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""]}
          }
}

const Template = (args) => `<varsom-general-observation
obs-comment=${args.ObsComment}
obs-header=${args.ObsHeader} 
short-version=${args.shortVersion}  
>
</varsom-general-observation> `

export const VarsomGeneralObservation = Template.bind({});
VarsomGeneralObservation.args = {

    ObsHeader: "'Overskrift...'",
    ObsComment: "'Ingen spesiell kommentar...'"


    }