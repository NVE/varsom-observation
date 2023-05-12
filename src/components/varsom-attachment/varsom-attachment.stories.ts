

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/Attachment',
    argTypes: {
        shortVersion: {control: "select", options: ["true (select blank for full version)", ""],
    defaultValue: ""}
          }
}

const Template = (args) => `<varsom-attachment 
geo-hazard-name=${args.GeoHazardName} 
registration-name="${args.RegistrationName}" 
Url=${args.Url} 
Photographer=${args.Photographer} 
Copyright=${args.Copyright} 
Comment=${args.Comment} 
short-version=${args.shortVersion}
>
</varsom-attachment> `

export const VarsomAttachment = Template.bind({});
    VarsomAttachment.args = {
        GeoHazardName: "Jord",
        RegistrationName: "Vedlegg1",
        Url: "https://api.regobs.no/Attachments/Original/50b72d96-8311-4838-abf7-b3ddd5598474.jpg",
        Photographer: "Ola Normann",
        Copyright: "vegdrift@rogaland",
        Aspect: "null",
        Comment: "Elrapp",   
        

    }