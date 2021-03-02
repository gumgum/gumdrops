import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Trend, TrendProps } from './Trend';

export default {
    title: 'Trend',
    component: Trend
} as Meta;

const Template: Story<TrendProps> = args => <Trend {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 42
};

export const CustomUnit = Template.bind({});
CustomUnit.args = {
    value: 42,
    unit: 'Stonks'
};

export const DownContext = Template.bind({});
DownContext.args = {
    value: 42,
    context: 'down'
};

export const SameContext = Template.bind({});
SameContext.args = {
    value: 42,
    context: 'same'
};
