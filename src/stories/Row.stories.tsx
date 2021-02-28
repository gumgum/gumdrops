import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Row, RowProps } from './Row';

export default {
    title: 'Row',
    component: Row
} as Meta;

const Template: Story<RowProps> = args => <Row {...args}>Row</Row>;

export const Primary = Template.bind({});
Primary.args = {
    className: '-color-bg-pri -color-tx-gold'
};
