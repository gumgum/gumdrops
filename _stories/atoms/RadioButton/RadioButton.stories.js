import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './RadioButton.mdx';
import RadioButton from '../../../components/atoms/RadioButton';

const contextOptions = {
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    'No Value': ''
};

export default {
    component: RadioButton,
    title: 'Atoms/RadioButton',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
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
