import React from 'react';
import { selectV2 as select, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

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
    'No Value': ''
};

const component = () => (
    <Toggle
        label={text('Label', 'Default Toggle')}
        type={select('Type', options, 'checkbox')}
        size={optionalSelect('Size', sizeOptions, '')}
        className={text('ClassName', '')}
        style={object('Style', {})}
        onChange={action('toggle_checked')}
    />
);

export default [readme, component];
