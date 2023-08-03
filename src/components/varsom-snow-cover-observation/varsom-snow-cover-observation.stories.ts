export default {
  //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
  title: 'Components/SnowCoverObservation',
  argTypes: {
    shortVersion: { control: 'select', options: ['true (select blank for full version)', ''], defaultValue: '' },
  },
};

const Template = args => `<varsom-snow-cover-observation
comment=${args.Comment}
depth-hoar-thickness=${args.DepthHoarThickness}
critical-layer-exists=${args.CriticalLayerExists}
critical-layer-location=${args.CriticalLayerLocation}
critical-layer-t-i-d=${args.CriticalLayerTID}
snow-pilot-ref=${args.SnowPilotRef}
critical-layer-name=${args.CriticalLayerName}
short-version=${args.shortVersion}  
>
</varsom-snow-cover-observation> `;

export const VarsomSnowCoverObservation = Template.bind({});
VarsomSnowCoverObservation.args = {
  Comment: "'Kommentar til snøprofil...'",
  DepthHoarThickness: 0.5,
  CriticalLayerExists: 'ja',
  CriticalLayerLocation: "'plassering...'",
  CriticalLayerTID: "'Krystaller'",
  SnowPilotRef: "'ingen info...'",
  CriticalLayerName: "'Kristisk lag...'",
};
