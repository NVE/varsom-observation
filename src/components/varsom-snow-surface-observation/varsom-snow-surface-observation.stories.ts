export default {
  //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
  title: 'Components/SnowSurfaceObservation',
  argTypes: {
    shortVersion: { control: 'select', options: ['true (select blank for full version)', ''], defaultValue: '' },
  },
};

const Template = args => `<varsom-snow-surface-observation
comment=${args.Comment}
snow-depth=${args.SnowDepth}
snow-drift-name=${args.SnowDriftName}
new-snow-depth24=${args.NewSnowDepth24}
snow-line=${args.SnowLine}
new-snow-line=${args.NewSnowLine}
snow-surface-name=${args.SnowSurfaceName}
surface-water-content-name=${args.SurfaceWaterContentName}
foot-penetration=${args.FootPenetration}
ski-conditions-name=${args.SkiConditionsName}
short-version=${args.shortVersion}  
>
</varsom-snow-surface-observation> `;

export const VarsomSnowProfile = Template.bind({});
VarsomSnowProfile.args = {
  Comment: "'Kommentar...'",
  SnowDepth: '0.260',
  SnowDriftName: "'Ikke snøfokk'",
  NewSnowDepth24: 0.2,
  SnowLine: 0.24,
  NewSnowLine: 0.1,
  SnowSurfaceName: "'vindpakket myk'",
  SurfaceWaterContentName: 'Tørr',
  FootPenetration: 'ingen',
  SkiConditionsName: 'bra',
};
