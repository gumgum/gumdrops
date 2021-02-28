import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { LayoutContainer, LayoutContainerProps } from './LayoutContainer';

export default {
    title: 'LayoutContainer',
    component: LayoutContainer
} as Meta;

const Template: Story<LayoutContainerProps> = args => <LayoutContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: <div>Container</div> };

export const FullWidth = Template.bind({});
FullWidth.args = { children: <div>Container</div>, fullWidth: true };
