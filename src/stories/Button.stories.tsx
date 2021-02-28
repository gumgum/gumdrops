import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' }
    }
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
    color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button',
    color: 'secondary'
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
    size: 'xs',
    children: 'Button'
};

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
    children: 'Button'
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'md',
    children: 'Button'
};

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
    children: 'Button'
};
