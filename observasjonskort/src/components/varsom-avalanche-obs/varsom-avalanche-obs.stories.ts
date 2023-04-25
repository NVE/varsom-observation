

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/AvalancheObservation',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""]}
          }
}

const Template = (args) => `<varsom-avalanche-obs
avalanche-ext-name=${args.AvalancheExtName} 
dt-avalanche-time=${args.DtAvalancheTime}
destructive-size-name=${args.DestructiveSizeName} 
avalanche-trigger-name=${args.AvalancheTriggerName}
height-start-zone=${args.HeightStartZone}
height-stop-zone=${args.HeightStopZone}
avalcause-name=${args.AvalCauseName}
terrain-start-zone-name=${args.TerrainStartZoneName}
trajectory=${args.Trajectory}
dt-avalanche-time=${args.DtAvalancheTime}
valid-exposition=${args.ValidExposition}
comment=${args.Comment}
start-lat=${args.StartLat}
stop-lat=${args.StopLat}
short-version=${args.shortVersion} 
>
</varsom-avalanche-obs> `

export const VarsomAvalancheObservation = Template.bind({});
VarsomAvalancheObservation.args = {
 
        DtAvalancheTime: "'2023-03-23T10:07:10+01:00'",
        AvalancheName: "'Stort skred et sted...'",
        DestructiveSizeName: "'3'",
        AvalancheTriggerName: "'Kunstig utløst testheng'",
        HeightStartZone: "'846'",
        HeightStopZone: "'846'",
        AvalCauseName: "'Ikke gitt'",
        TerrainStartZoneName: "'Brattheng'",
        Trajectory: "'Utladøla'",
        ValidExposition: "'SØ-S-SV'",
        Comment: "'Maksimal hastighet ble målt til ca. 14,3 m/s, og skredet varte i ca. 38,2 sekunder. Skredet er automatisk detektert, og egenskaper og koordinater er estimert'",
        StartLat: 1,
        StopLat: 1

        
    }