import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './RadioGroup.mdx';
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

export default {
    component: RadioGroup,
    title: 'Molecules/RadioGroup',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
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
