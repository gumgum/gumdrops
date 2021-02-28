import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormGroupLabel, FormGroupLabelProps } from './FormGroupLabel';
import { Button } from './Button';
import { FormGroup } from './FormGroup';

export default {
    title: 'FormGroupLabel',
    component: FormGroupLabel
} as Meta;

const Template: Story<FormGroupLabelProps> = args => (
    <FormGroup>
        <FormGroupLabel {...args} />
        <br />
        <Button id="myBtn">My Action</Button>
    </FormGroup>
);

export const Primary = Template.bind({});
Primary.args = {
    htmlFor: 'myBtn',
    text: 'Actions'
};
