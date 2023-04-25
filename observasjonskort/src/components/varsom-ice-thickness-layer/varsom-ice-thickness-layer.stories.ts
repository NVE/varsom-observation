

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/IceThicknessLayer',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""]}
          }
}

const Template = (args) => `<varsom-ice-thickness-layer
comment=${args.Comment}
ice-layer-name=${args.IceLayerName}
ice-layer-thickness=${args.IceLayerThickness}
short-version=${args.shortVersion}  
>
</varsom-ice-thickness-layer> `

export const VarsomIceThicknessLayer = Template.bind({});
VarsomIceThicknessLayer.args = {

    Comment: "'Kommentar...'",
    IceLayerName: "Sørpeis",
    IceLayerThickness: 0.26,
    


    }