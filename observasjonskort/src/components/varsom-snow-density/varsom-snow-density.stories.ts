

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/SnowDensity',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""]}
          }
    
}

const Template = (args) => `<varsom-snow-density
comment=${args.Comment}
cylinder-diameter=${args.CylinderDiameter}
tare-weight=${args.TareWeight}
short-version=${args.shortVersion}  
>
</varsom-snow-density> `

export const VarsomSnowDensity = Template.bind({});
VarsomSnowDensity.args = {

    Comment: "'Kommentar...'",
    CylinderDiameter: 0.26,
    TareWeight: 0.021



    }