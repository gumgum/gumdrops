import React from 'react';
import { select, text, object } from '@storybook/addon-knobs';

import readme from './README.md';
import Toggle from '../../../components/molecules/Toggle';

const options = {
    checkbox: 'checkbox',
    radio: 'radio'
};

const component = () => (
    <Toggle
        label={ text('Label', 'Default Toggle') }
        type={ select('Type', options, 'checkbox') }
        className={ text('ClassName', '') }
        style={ object('Style', {}) }
    />
);

export default [readme, component];
