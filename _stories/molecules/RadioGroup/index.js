import React from 'react';
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import RadioGroup from '../../../components/molecules/RadioGroup';

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    'No Value': ''
};

const contextOptions = {
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    'No Value': ''
};

const component = () => (
    <RadioGroup
        size={optionalSelect('Size', sizeOptions, '')}
        onChange={action('change')}
        onBlur={action('blur')}
        context={optionalSelect('Context', contextOptions, '')}
        name="my-radio-group"
        options={[{ label: 'Foo', value: 'foo' }, { label: 'Bar', value: 'bar' }]}
        defaultValue="bar"
    />
);

export default [readme, component];
