import React from 'react';
import { text, object } from '@storybook/addon-knobs';

import readme from './README.md';
import FormGroupTextHelp from '../../../components/atoms/FormGroupTextHelp';
import TextInput from '../../../components/atoms/TextInput';
import FormGroup from '../../../components/molecules/FormGroup';

const component = () => (
    <FormGroup context="danger">
        <TextInput name="password" type="password" defaultValue="badpassword" />
        <FormGroupTextHelp
            text={text('Text', 'Your password is incorrect')}
            className={text('Classname', '')}
            style={object('Style', {})}
        />
    </FormGroup>
);

export default [readme, component];
