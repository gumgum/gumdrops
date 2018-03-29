import React from 'react';
import { text } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import MultiSelect from '../../../components/molecules/MultiSelect';

const options = [
    {
        name: 'Option 1',
        value: 'option_1',
        selected: false
    },
    {
        name: 'Option 2',
        value: 'option_2',
        selected: true
    },
    {
        name: 'Option 3',
        value: 'option_3',
        selected: true
    }
];

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    '': 'No Value',
};

const component = () => (
    <MultiSelect
        placeholder={text('Placeholder', 'Select an option')}
        size={optionalSelect('Size', sizeOptions, '')}
        callback={action('multi_select_changed')}
        options={options}
        className={text('className', '')}
    />
);

export default [readme, component];
