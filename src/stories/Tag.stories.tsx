import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tag, TagProps } from './Tag';

export default {
    title: 'Tag',
    component: Tag
} as Meta;

const Template: Story<TagProps> = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Default Tag'
};

export const PrimaryWithOption = Template.bind({});
PrimaryWithOption.args = {
    color: 'primary',
    text: 'With Option Tag',
    hasOption: true
};

export const ExtraSmallWithOption = Template.bind({});
ExtraSmallWithOption.args = {
    text: 'XS Option Tag',
    color: 'green',
    hasOption: true,
    size: 'xs'
};
