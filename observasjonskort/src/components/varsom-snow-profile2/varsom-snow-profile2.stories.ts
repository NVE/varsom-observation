

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/SnowProfile2',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""],
    defaultValue: ""}
          }
}

const Template = (args) => `<varsom-snow-profile2
comment=${args.Comment}
image-url=${args.ImageUrl}
short-version=${args.shortVersion}  
>
</varsom-snow-profile2> `

export const VarsomSnowProfile2 = Template.bind({});
VarsomSnowProfile2.args = {

    Comment: "'Kraftig dårlig vær med kraftig snøfokk. Ikke mulig å se på kornstørrelse. Kraftig pålagring, samtidig som profil graves'",
    ImageUrl: "https://api.regobs.no/Attachments/Medium/034aeae6-df3c-41b9-a12c-805827ada2ef.jpg?lastMod=1680244083.png"

    }