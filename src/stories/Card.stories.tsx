import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './Card';
import { CardBlock } from './CardBlock';
import { CardImage } from './CardImage';

export default {
    title: 'Card',
    component: Card
} as Meta;

const Template: Story<CardProps> = args => (
    <div>
        <Card option={args.option} size={args.size}>
            <CardBlock>
                <p>Content in a plain Card.</p>
            </CardBlock>
        </Card>
        <Card option={args.option} size={args.size}>
            <CardBlock>
                <p>Content in a plain CardBlock.</p>
            </CardBlock>
            <CardBlock option="divide-top">
                <p>Content in a CardBlock with a top divider.</p>
            </CardBlock>
        </Card>
        <Card option={args.option} size={args.size}>
            <CardImage url="https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png" />
            <CardBlock option="divide-top">
                <p>Card with a CardImage and a CardBlock.</p>
            </CardBlock>
        </Card>
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    option: 'white',
    size: ''
};
