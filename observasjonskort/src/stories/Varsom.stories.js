import { Button } from './Button';
import { Varsom } from './Varsom';



// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Example/Varsom',
  component: 'varsom-observation',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => Varsom(args) ;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  language: "English",
  count: 3,
  type: "Snow"
};
/*
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/