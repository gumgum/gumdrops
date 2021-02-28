import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './Input';

export default {
    title: 'Input',
    component: Input
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Text = Template.bind({});
Text.args = { defaultValue: 'sample text' };

export const Password = Template.bind({});
Password.args = { defaultValue: 'mypwd', type: 'password' };

export const Email = Template.bind({});
Email.args = { defaultValue: 'example@gumgum.com', type: 'email' };
