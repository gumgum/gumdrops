import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card } from './Card';
import { CardBlock, CardBlockProps } from './CardBlock';

export default {
    title: 'CardBlock',
    component: CardBlock
} as Meta;

const Template: Story<CardBlockProps> = args => (
    <Card>
        <CardBlock option={args.option}>
            <p>Content in a CardBlock.</p>
        </CardBlock>
    </Card>
);

export const Primary = Template.bind({});
Primary.args = {
    option: ''
};
