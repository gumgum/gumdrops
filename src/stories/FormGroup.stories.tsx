import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormGroupLabel } from './FormGroupLabel';
import { Button } from './Button';
import { FormGroup, FormGroupProps } from './FormGroup';

export default {
    title: 'FormGroup',
    component: FormGroup
} as Meta;

const Template: Story<FormGroupProps> = args => (
    <FormGroup {...args}>
        <FormGroupLabel text="My Label" htmlFor="myBtn" />
        <br />
        <Button id="myBtn">My Action</Button>
    </FormGroup>
);

export const Primary = Template.bind({});
Primary.args = {};
