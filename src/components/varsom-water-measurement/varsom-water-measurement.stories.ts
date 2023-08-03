export default {
  //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
  title: 'Components/WaterMeasurement',
  argTypes: {
    shortVersion: { control: 'select', options: ['true (select blank for full version)', ''], defaultValue: '' },
  },
};

const Template = args => `<varsom-water-measurement
water-level-value=${args.WaterLevelValue}
dt-measurement-time=${args.DtMeasurementTime}
comment=${args.Comment}
short-version=${args.shortVersion}  
>
</varsom-water-measurement> `;

export const VarsomWaterMeasurement = Template.bind({});
VarsomWaterMeasurement.args = {
  WaterLevelValue: 8,
  DtMeasurementTime: "'2023-02-02 kl. 16:30'",
  Comment: "'Mye vann'",
};
