import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Column, ColumnProps } from './Column';

export default {
    title: 'Column',
    component: Column
} as Meta;

const Template: Story = args => (
    <>
        <Column {...args.col1}>Column 1</Column>
        <Column {...args.col2}>Column 2</Column>
    </>
);

export const Primary = Template.bind({});
Primary.args = {
    col1: {
        md: 8
    },
    col2: {
        md: 4
    }
};
