export default {
  //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
  title: 'Components/SnowProfile',
  argTypes: {
    shortVersion: { control: 'select', options: ['true (select blank for full version)', ''], defaultValue: '' },
  },
};

const Template = args => `<varsom-snow-profile
comment=${args.Comment}
geo-hazard-name=${args.GeoHazardName}
registration-name=${args.RegistrationName}
photographer=${args.Photographer}
copyright=${args.Copyright}
aspect=${args.Aspect}
url=${args.Comment}
short-version=${args.shortVersion}  
>
</varsom-snow-profile> `;

export const VarsomSnowProfile = Template.bind({});
VarsomSnowProfile.args = {
  Comment: "'Kommentar...'",
  GeoHazardName: "'Snø...'",
  RegistrationName: "'Snøprofil på fjellet...'",
  Photographer: "'Per'",
  Copyright: 'Per',
  Aspect: 'Liggende',
  Url: 'www.test.test.no',
};
