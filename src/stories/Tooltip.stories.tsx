import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tooltip, TooltipProps } from './Tooltip';

export default {
    title: 'Tooltip',
    component: Tooltip
} as Meta;

const Template: Story<TooltipProps> = args => (
    <div className="-m-a-6">
        <Tooltip {...args}>
            <p>Content</p>
        </Tooltip>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    text: 'Default Tooltip'
};

export const CustomPosition = Template.bind({});
CustomPosition.args = {
    text: 'Custom Position',
    position: 'bottom-left'
};

export const NoAnimation = Template.bind({});
NoAnimation.args = {
    text: 'No Animation',
    variation: 'no-animate'
};

export const BounceAnimation = Template.bind({});
BounceAnimation.args = {
    text: 'Bounce Animation',
    variation: 'bounce'
};

export const AlwaysDisplay = Template.bind({});
AlwaysDisplay.args = {
    text: 'Always Display',
    variation: 'always'
};
