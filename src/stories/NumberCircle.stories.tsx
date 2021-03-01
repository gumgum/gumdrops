import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { NumberCircle, NumberCircleProps } from './NumberCircle';

export default {
    title: 'NumberCircle',
    component: NumberCircle
} as Meta;

const Template: Story<NumberCircleProps> = args => (
    <NumberCircle {...args}>NumberCircle</NumberCircle>
);

export const Primary = Template.bind({});
Primary.args = { text: 123 };
