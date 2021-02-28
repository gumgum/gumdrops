import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input } from './Input';
import { FormGroupHelpText, FormGroupHelpTextProps } from './FormGroupHelpText';
import { FormGroup } from './FormGroup';

export default {
    title: 'FormGroupHelpText',
    component: FormGroupHelpText
} as Meta;

const Template: Story<FormGroupHelpTextProps> = args => (
    <FormGroup color="danger">
        <Input name="password" type="password" defaultValue="badpassword" />
        <FormGroupHelpText {...args} />
    </FormGroup>
);

export const Primary = Template.bind({});
Primary.args = {
    text: 'Your password is incorrect'
};
