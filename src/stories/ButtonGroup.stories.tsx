import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './Button';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

export default {
    title: 'ButtonGroup',
    component: ButtonGroup
} as Meta;

const Template: Story<ButtonGroupProps> = args => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: (
        <>
            <Button color="primary" isGroup>
                First Button
            </Button>
            <Button color="secondary" isGroup>
                Second Button
            </Button>
        </>
    )
};
