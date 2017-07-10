import React from 'react';
import { boolean, select, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import TextInput from '../../../components/atoms/TextInput';

const component = () => (
    <TextInput
        readOnly={ boolean('readonly', false) }
        className={ text('Classname', '') }
        style={ object('Style', {}) }
        type={ select('Type', ['text', 'password'], 'text') }
        size={ select('Size', ['sm', 'md', 'lg'], 'md') }
        name={ text('Name', 'username') }
        onChange={ action('TextInput changed') }
        value={ text('Value', null) }
        placeholder={ text('Placeholder', 'This is a placeholder') }
    />
);

export default [readme, component];
