import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { RadioButton, RadioButtonProps } from './RadioButton';

export default {
    title: 'RadioButton',
    component: RadioButton
} as Meta;

const Template: Story<RadioButtonProps> = args => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Radio Button'
};
