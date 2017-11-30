import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Button from '../../../components/atoms/Button';

const sizeOptions = {
    'xs': 'xs',
    'sm': 'sm',
    'lg': 'lg',
    '': 'default'
};

const contextOptions = {
    default: 'default',
    outline: 'outline',
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    info: 'info',
    danger: 'danger'
};

const component = () => (
    <Button
        type={ text('Type', 'button') }
        size={ select('Size', sizeOptions, '') }
        context={ select('Context', contextOptions, 'default') }
        group={ boolean('Group', false) }
        onClick={ action('button_clicked') }
        className={ text('ClassName', '') }
        style={ object('Style', {}) }
    >
        <i className="fa fa-check -m-r-2" />
        Great Success
    </Button>
);

export default [readme, component];
