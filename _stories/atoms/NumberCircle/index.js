import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import NumberCircle from '../../../components/atoms/NumberCircle';

const contextOptions = {
    '': 'No Value',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    white: 'white'
};

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    xl: 'xl',
    '': 'No Value'
};

const component = () => (
    <NumberCircle
        text={text('Text', '1')}
        size={optionalSelect('Size', sizeOptions, '')}
        context={optionalSelect('Context', contextOptions, '')}
        className={text('ClassName', '')}
        style={object('Styles', {})}
    />
);

export default [readme, component];
