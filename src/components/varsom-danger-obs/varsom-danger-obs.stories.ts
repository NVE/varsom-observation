export default {
  //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
  title: 'Components/DangerObservation',
  argTypes: {
    shortVersion: { control: 'select', options: ['true (select blank for full version)', ''], defaultValue: '' },
  },
};

const Template = args => `<varsom-danger-obs
comment=${args.Comment}
danger-sign-name=${args.DangerSignName} 
short-version=${args.shortVersion}  
>
</varsom-danger-obs> `;

export const VarsomDangerObservation = Template.bind({});
VarsomDangerObservation.args = {
  DangerSignName: "'Fersk vindtransportert snø'",
  Comment: "'Ingen spesiell kommentar...'",
};
