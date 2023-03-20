

export default {   //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
    title: 'Components/Attachment',
}
/*async function fetchStrings(): Promise<any> {
  
    return new Promise((resolve, reject): void => {
      fetch(`${getAssetPath(`/i18n/en.json`)}`)
      .then((result) => {
        if (result.ok) resolve(result.json());
        else reject();
      }, () => reject());
    });
  }
*/
const Template = (args) => `<varsom-attachment 
GeoHazardName=${args.GeoHazardName} 
RegistrationName="${args.RegistrationName}" 
Url=${args.Url} 
Photographer=${args.Photographer} 
Copyright=${args.Copyright} 
Comment=${args.Comment} 

</varsom-attachment> `

export const VarsomAttachment = Template.bind({});
    VarsomAttachment.args = {
        GeoHazardName: "Jord",
        RegistrationName: "Vedlegg1",
        Url: "https://api.regobs.no/Attachments/Original/50b72d96-8311-4838-abf7-b3ddd5598474.jpg",
        Photographer: "Elrapp",
        Copyright: "vegdrift@rogaland",
        Aspect: "null",
        Comment: "Elrapp",   
        

    }