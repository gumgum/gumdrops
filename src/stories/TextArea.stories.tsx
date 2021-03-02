import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextArea, TextAreaProps } from './TextArea';

export default {
    title: 'TextArea',
    component: TextArea
} as Meta;

const Template: Story<TextAreaProps> = args => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'An optional placeholder'
};

export const VerticalResizeSmall = Template.bind({});
VerticalResizeSmall.args = {
    placeholder: 'An optional placeholder',
    size: 'sm',
    resize: 'resize-v'
};

export const NoResizeMedium = Template.bind({});
NoResizeMedium.args = {
    placeholder: 'An optional placeholder',
    resize: 'no-resize'
};

export const HorizontalResizeLarge = Template.bind({});
HorizontalResizeLarge.args = {
    placeholder: 'An optional placeholder',
    size: 'lg',
    resize: 'resize-h'
};
