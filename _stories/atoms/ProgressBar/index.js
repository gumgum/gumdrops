import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import ProgressBar from '../../../components/atoms/ProgressBar';

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    'No Value': ''
};

const component = () => (
    <ProgressBar
        className={text('ClassName', '')}
        isSecondary={boolean('isSecondary', false)}
        isStriped={boolean('isStriped', false)}
        size={optionalSelect('Size', sizeOptions, '')}
        useProgressColors={boolean('useProgressColors', false)}
        value={number('value', 30)}
    />
);

export default [readme, component];
