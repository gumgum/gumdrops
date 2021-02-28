import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { LoadingDots, LoadingDotsProps } from './LoadingDots';

export default {
    title: 'LoadingDots',
    component: LoadingDots
} as Meta;

const Template: Story<LoadingDotsProps> = args => <LoadingDots {...args} />;

export const Regular = Template.bind({});
Regular.args = { style: { height: 70 } };

export const WhiteDots = Template.bind({});
WhiteDots.args = { whiteDots: true, className: '-color-bg-inf', style: { height: 70 } };
