

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/DamageObs',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""],
    defaultValue: ""}
          }
}

const Template = (args) => `<varsom-damage-obs
comment=${args.Comment}
geo-hazard-name=${args.GeoHazardName}
damage-type-name=${args.DamageTypeName}
geo-hazard-t-i-d=${args.GeoHazardTID}
damage-type-t-i-d=${args.DamageTypeTID}
short-version=${args.shortVersion}  

>
</varsom-damage-obs> `

export const VarsomDamageObs = Template.bind({});
VarsomDamageObs.args = {

    Comment: "'Kommentar til skadeobservasjon...'",
    GeoHazardName: "'Jordskred'",
    DamageTypeName: "'Skade på offentlig bygg'",
    GeoHazardTID: 1,
    DamageTypeTID: 1,
    // DamagePosition:  



    }