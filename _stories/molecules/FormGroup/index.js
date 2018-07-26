import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
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
    'No Value': ''
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
    <FormGroup
        isInline={boolean('isInline', false)}
        isDisabled={boolean('isDisabled', false)}
        context={optionalSelect('Context', contextOptions, 'success')}
        className={text('Classname', '')}
        style={object('Style', {})}>
        <FormGroupLabel text={text('Input Label', 'Cool Label')} />
        <TextInput name="username" placeholder="Bruce Lee" />
        <FormGroupTextHelp text="You got a cool username right there" />

        <FormGroupLabel text={text('Select label', 'My select label')} />
        <Select options={selectOptions} />
    </FormGroup>
);

export default [readme, component];
