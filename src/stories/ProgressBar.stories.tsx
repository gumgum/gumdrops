import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
    title: 'ProgressBar',
    component: ProgressBar
} as Meta;

const Template: Story<ProgressBarProps> = args => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = { value: 25 };

export const PrimaryStripped = Template.bind({});
PrimaryStripped.args = { value: 86, isStriped: true };

export const Secondary = Template.bind({});
Secondary.args = { value: 50, color: 'secondary' };

export const SecondaryStripped = Template.bind({});
SecondaryStripped.args = { value: 25, isStriped: true, color: 'secondary' };

export const ProgressColors = Template.bind({});
ProgressColors.args = { value: 90, useProgressColors: true };
