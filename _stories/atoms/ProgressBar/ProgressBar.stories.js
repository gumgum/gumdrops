import React from 'react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './ProgressBar.mdx';
import ProgressBar from '../../../components/atoms/ProgressBar';

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    'No Value': ''
};

export default {
    component: ProgressBar,
    title: 'Atoms/ProgressBar',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <ProgressBar
        className={text('ClassName', '')}
        isSecondary={boolean('isSecondary', false)}
        isStriped={boolean('isStriped', false)}
        size={optionalSelect('Size', sizeOptions, '')}
        useProgressColors={boolean('useProgressColors', false)}
        value={number('value', 30)}
    />
);
