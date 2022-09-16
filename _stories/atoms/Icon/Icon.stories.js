import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './Icon.mdx';
import Icon from '../../../components/atoms/Icon';

const contextOptions = {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    'No Value': ''
};

export default {
    component: Icon,
    title: 'Atoms/Icon',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Icon
        icon={text('Icon', 'info-circle')}
        fontSize={number('Font Size', 40)}
        className={text('ClassName', '')}
        prefix={select('Prefix', ['fas', 'far', 'fal', 'fab'], 'fas')}
        context={optionalSelect('Context', contextOptions, '')}
    />
);
