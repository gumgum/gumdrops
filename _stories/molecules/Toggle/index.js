import React from 'react';
import { select, text, object, boolean } from '@storybook/addon-knobs';

import readme from './README.md';
import Toggle from '../../../components/molecules/Toggle';
import { action } from '@storybook/addon-actions';

const options = {
    checkbox: 'checkbox',
    radio: 'radio'
};

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    '': 'default'
};

const component = () => (
    <Toggle
        label={text('Label', 'Default Toggle')}
        type={select('Type', options, 'checkbox')}
        size={select('Size', sizeOptions, '')}
        className={text('ClassName', '')}
        style={object('Style', {})}
        onChange={action('toggle_checked')}
    />
);

export default [readme, component];
