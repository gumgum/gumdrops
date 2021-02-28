import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CircularThumbnail, CircularThumbnailProps } from './CircularThumbnail';
import { Colors, Sizes } from '../types';

export default {
    title: 'CircularThumbnail',
    component: CircularThumbnail
} as Meta;

const Template: Story<CircularThumbnailProps> = args => <CircularThumbnail {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://ds.gumgum.com/images/ken.png',
    alt: 'Ken Weiner'
};
