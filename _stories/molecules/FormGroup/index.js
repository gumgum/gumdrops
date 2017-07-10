import React from 'react';
import { boolean, select, text, object } from '@storybook/addon-knobs';
import readme from './README.md';

import FormGroupLabel from '../../../components/atoms/FormGroupLabel';
import FormGroupTextHelp from '../../../components/atoms/FormGroupTextHelp';
import TextInput from '../../../components/atoms/TextInput';
import Select from '../../../components/atoms/Select';
import FormGroup from '../../../components/molecules/FormGroup';

const contextOptions = {
    danger: 'danger',
    warning: 'warning',
    success: 'success',
    '': 'default'
};

const selectOptions = [
    {
        name: 'bananas',
        value: 1
    },
    {
        name: 'apples',
        value: 2
    },
    {
        name: 'strawberries',
        value: 3
    },
    {
        name: 'limes',
        value: 4
    }
];

const component = () => (
    <div>
        <FormGroup
            isInline={ boolean('isInline', false) }
            isDisabled={ boolean('isDisabled', false) }
            context={ select('Context', contextOptions, 'success') }
            className={ text('Classname', '') }
            style={ object('Style', {}) }
        >
            <FormGroupLabel text={ text('Input Label', 'Cool Label') } />
            <TextInput name="username" placeholder="Bruce Lee" />
            <FormGroupTextHelp text="You got a cool username right there" />

            <FormGroupLabel text={ text('Select label', 'My select label') } />
            <Select options={ selectOptions } />
        </FormGroup>
    </div>
);

export default [readme, component];
