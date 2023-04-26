

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/StratProfileLayer',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""],
    defaultValue: ""}
          }
}

const Template = (args) => `<varsom-strat-profile-layer
thickness=${args.Thickness}
hardness-t-i-d=${args.HardnessTID}
hardness-t-name=${args.HardnessTName}
hardness-bottom-t-i-d=${args.HardnessBottomTID}
grain-form-primary-t-i-d=${args.GrainFormPrimaryTID}
grain-form-primary-t-name=${args.GrainFormPrimaryTName}
grain-form-secondary-t-i-d=${args.GrainFormSecondaryTID}
grain-size-avg=${args.GrainSizeAvg}
grain-size-avg-max=${args.GrainSizeAvgMax}
wetness-t-i-d=${args.WetnessTID}
wetness-t-name=${args.WetnessTName}
critical-layer-t-i-d=${args.CriticalLayerTID}
critical-layer-t-name=${args.CriticalLayerTName}
comment=${args.comment}
short-version=${args.shortVersion}  
>
</varsom-strat-profile-layer> `

export const VarsomStratProfileLayer = Template.bind({});
VarsomStratProfileLayer.args = {

    Thickness: 0.05,
    HardnessTID: 14,
    HardnessTName: "P",
    HardnessBottomTID: 12,
    GrainFormPrimaryTID: 0.6,
    GrainFormPrimaryTName: "P",
    GrainFormSecondaryTID: 10,
    GrainSizeAvg: 3,
    GrainSizeAvgMax: 0.6,
    WetnessTID: 0.6,
    WetnessTName: "P",
    CriticalLayerTID: 23,
    CriticalLayerTName: "P",
    Comment: "'Kommentar til lagdeling...'"


    }