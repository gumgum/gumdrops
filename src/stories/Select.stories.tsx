import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps } from './Select';
import { Colors } from '../types';

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' }
    }
} as Meta;

const Template: Story<SelectProps> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    options: [{ name: 'first', value: 1 }, { name: 'second', value: 'Second' }, 3]
};

export const CustomValue = Template.bind({});
CustomValue.args = {
    color: 'primary',
    customValue: 'foo',
    options: [
        { name: 'first', value: 1, foo: 'foo1' },
        { name: 'second', value: 'Second', foo: 'foo2' },
        3
    ]
};

export const CustomName = Template.bind({});
CustomName.args = {
    color: 'primary',
    customName: 'foo',
    options: [
        { name: 'first', value: 1, foo: 'foo1' },
        { name: 'second', value: 'Second', foo: 'foo2' },
        3
    ]
};
