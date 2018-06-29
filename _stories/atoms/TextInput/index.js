import React from 'react';
import { boolean, selectV2 as select, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import TextInput from '../../../components/atoms/TextInput';

const sizeOptions = {
    'No Value': '',
    xs: 'xs',
    sm: 'sm',
    lg: 'lg'
};

const component = () => (
    <TextInput
        readOnly={boolean('readonly', false)}
        type={select('Type', ['text', 'password'], 'text')}
        size={optionalSelect('Size', sizeOptions, 'md')}
        name={text('Name', 'username')}
        value={text('Value', '')}
        placeholder={text('Placeholder', 'This is a placeholder')}
        onChange={action('TextInput changed')}
        className={text('Classname', '')}
        style={object('Style', {})}
    />
);

export default [readme, component];
