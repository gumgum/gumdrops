import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Divider, DividerProps } from './Divider';

export default {
    title: 'Divider',
    component: Divider
} as Meta;

const Template: Story<DividerProps> = args => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'This is a Divider',
    collapsible: false,
    centered: false,
    open: false
};
