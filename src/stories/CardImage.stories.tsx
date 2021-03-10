import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card } from './Card';
import { CardImage, CardImageProps } from './CardImage';

export default {
    title: 'CardImage',
    component: CardImage
} as Meta;

const Template: Story<CardImageProps> = args => (
    <Card>
        <CardImage url={args.url} option={args.option} size={args.size} />
    </Card>
);

export const Primary = Template.bind({});
Primary.args = {
    option: '',
    url:
        'https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png',
    size: ''
};
