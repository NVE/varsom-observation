

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/IceThickness',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""],
    defaultValue: ""}
          }
}

const Template = (args) => `<varsom-ice-thickness
comment=${args.Comment}
ice-thickness-sum=${args.IceThickenssSum}
snow-depth=${args.SnowDepth}
slush-snow=${args.SlushSnow}
ice-height-before=${args.IceHeightBefore}
ice-height-after=${args.IceHeightAfter}
hard-coded-img=${args.HardCodedImg}
short-version=${args.shortVersion}
>
</varsom-ice-thickness> `

export const VarsomIceThickness = Template.bind({});
VarsomIceThickness.args = {

    Comment: "'Veldig tykk is'",
    SnowDepth: "'0.32'",
    SlushSnow: "'0.23'",
    IceHeightBefore: "'0.1'",
    IceHeightAfter: "'0.2'",
    IceThicknessSum: "'0.7'",
    HardCodedImg: 1

    }