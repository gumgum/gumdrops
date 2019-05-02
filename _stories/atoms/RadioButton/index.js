import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import RadioButton from '../../../components/atoms/RadioButton';

const contextOptions = {
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    'No Value': ''
};

const component = () => (
    <RadioButton
        className={text('Class Name', 'custom-class')}
        label={text('Label', 'Yes')}
        value={text('Value', 'yes')}
        onChange={action('change')}
        onBlur={action('blur')}
        context={optionalSelect('Context', contextOptions, '')}
        name="my-radio-group"
    />
);

export default [readme, component];
