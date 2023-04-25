

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/Incident',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""]}
          }
}

const Template = (args) => `<varsom-incident
comment=${args.Comment}
incident-header=${args.IncidentHeader}
incident-ingress=${args.IncidentIngress}
damage-extent-name=${args.DamageExtentName}
activity-influenced-name=${args.ActivityInfluencedName}
local-tourist-name=${args.LocalTouristName}
local-knowledge-name=${args.LocalKnowledgeName}
safety-gear-name=${args.SafetyGearName}
rescue-name=${args.RescueName}
slope-activity-name=${args.SlopeActivityName}
material-damages=${args.MaterialDamages}
involved-num=${args.InvolvedNum}
harmed-num=${args.HarmedNum}
dead-num=${args.DeadNum}
evacuated-num=${args.EvacuatedNum}
short-version=${args.shortVersion}  
>
</varsom-incident> `

export const VarsomIncident = Template.bind({});
VarsomIncident.args = {

    Comment: "'Vi ville unngå dårlig kjøring under en klippe, og kjørte utenfor et bratt heng. en person kjørte først, og flaket løsna. Personen kom seg unna, og er i god behold'",
    IncidentHeader: "'Overskrift'",
    IncidentIngress: "'Ingress'",
    DamageExtentName: "'Stor skade'",
    ActivityInfluencedName: "'Mye aktivitet'",
    LocalTouristName: "'Lokal'",
    LocalKnowledgeName: "'Ja'",
    SafetyGearName: "'Ingen'",
    RescueName: "'En person reddet'",
    SlopeActivityName: "'Nedover'",
    TrafficObstructed: "'Ikke hindret'",
    MaterialDamages: "'Ingen'",
    InvolvedNum: "4",
    HarmedNum: "0",
    DeadNum: "0",
    EvacuatedNum: "1"






    }