export default {
  //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
  title: 'Components/WeatherObservation',
  argTypes: {
    shortVersion: { control: 'select', options: ['true (select blank for full version)', ''], defaultValue: '' },
  },
};

const Template = args => `<varsom-weather-observation
comment=${args.Comment}
cloud-cover=${args.CloudCover}
wind-direction=${args.WindDirection}
wind-speed=${args.WindSpeed}
air-temperature=${args.AirTemperature}
precipitation-name=${args.PrecipitationName}
short-version=${args.shortVersion}
>
</varsom-weather-observation> `;

export const VarsomWeatherObservation = Template.bind({});
VarsomWeatherObservation.args = {
  Comment: "'mye vind'",
  CloudCover: 'mye skyer',
  WindDirection: 'østlig',
  WindSpeed: 3,
  AirTemperature: 26,
  PrecipitationName: 'vindkast',
};
