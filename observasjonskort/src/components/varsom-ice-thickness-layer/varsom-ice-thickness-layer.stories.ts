

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/IceThicknessLayer',
}

const Template = (args) => `<varsom-ice-thickness-layer
comment=${args.Comment}
ice-layer-name=${args.IceLayerName}
ice-layer-thickness=${args.IceLayerThickness}
>
</varsom-ice-thickness-layer> `

export const VarsomIceThicknessLayer = Template.bind({});
VarsomIceThicknessLayer.args = {

    Comment: "'Kommentar...'",
    IceLayerName: "Sørpeis",
    IceLayerThickness: 0.26,
    


    }