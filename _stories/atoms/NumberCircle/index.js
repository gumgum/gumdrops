import React from 'react';
import { text, object, select } from '@storybook/addon-knobs';

import readme from './README.md';
import NumberCircle from '../../../components/atoms/NumberCircle';

const contextOptions = {
    '': 'default',
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
    '': 'default'
};

const component = () => (
    <NumberCircle
        text={text('Text', '1')}
        size={select('Size', sizeOptions, '')}
        context={select('Context', contextOptions, '')}
        className={text('ClassName', '')}
        style={object('Styles', {})}
    />
);

export default [readme, component];
