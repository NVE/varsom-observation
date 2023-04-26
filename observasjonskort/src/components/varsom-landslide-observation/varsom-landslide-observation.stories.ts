

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/LandslideObservation',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""],
    defaultValue: ""}
          }
}

const Template = (args) => `<varsom-landslide-observation
comment=${args.Comment}
forecast-accurate-name=${args.ForecastAccurateName}
damage-extent-name=${args.DamageExtentName}
land-slide-trigger-name=${args.LandSlideTriggerName}
land-slide-size-name=${args.LandSlideSizeName}
land-slide-name=${args.LandSlideName}
dt-land-slide-time=${args.DtLandSlideTime}
dt-land-slide-time-end=${args.DtLandSlideTimeEnd}
short-version=${args.shortVersion}
>
</varsom-landslide-observation> `

export const VarsomLandslideObservation = Template.bind({});
VarsomLandslideObservation.args = {

    Comment: "'Stein på FV63 løsnet fra vegskjæring 5-20m. Anslått skredvolum på veg: <1m^3.Blokkert veglengde: <10m.'",
    ForecastAccurateName: "'det stemte bra'",
    DamageExtentName: "'ikke spesifisert'",
    LandSlideTriggerName: "'Ikke gitt'",
    LandSlideSizeName: "'ikke gitt'",
    LandSlideName: "Steinsprang",
    DtLandSlideTime: "'2023-03-17T21:54:00+01:00'",
    DtLandSlideTimeEnd: "'2023-03-17T21:54:00+01:00'",
    
    }