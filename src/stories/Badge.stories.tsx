import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Badge, BadgeProps } from './Badge';
import { Colors } from '../types';

export default {
    title: 'Badge',
    component: Badge
} as Meta;

const Template: Story<BadgeProps> = args => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: Colors.primary,
    text: 'Primary badge'
};

export const Warning = Template.bind({});
Warning.args = {
    color: Colors.warning,
    text: 'Warning Badge'
};

export const Empty = Template.bind({});
Empty.args = {
    color: Colors.info,
    empty: true
};
