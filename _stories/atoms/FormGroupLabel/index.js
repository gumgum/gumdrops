import React from 'react';
import { text, object } from '@storybook/addon-knobs';

import readme from './README.md';
import FormGroupLabel from '../../../components/atoms/FormGroupLabel';
import TextInput from '../../../components/atoms/TextInput';
import FormGroup from '../../../components/molecules/FormGroup';

const component = () => (
    <FormGroup>
        <FormGroupLabel
            text={text('Text', 'Password')}
            className={text('Classname', '')}
            style={object('Style', {})}
        />
        <TextInput name="password" type="password" defaultValue="Passw00rd" />
    </FormGroup>
);

export default [readme, component];
