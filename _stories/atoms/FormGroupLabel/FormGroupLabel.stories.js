import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import mdx from './FormGroupLabel.mdx';
import FormGroupLabel from '../../../components/atoms/FormGroupLabel';
import TextInput from '../../../components/atoms/TextInput';
import FormGroup from '../../../components/molecules/FormGroup';

export default {
    component: FormGroupLabel,
    title: 'Atoms/FormGroupLabel',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <FormGroup>
        <FormGroupLabel
            text={text('Text', 'Password')}
            className={text('Classname', '')}
            style={object('Style', {})}
        />
        <TextInput name="password" type="password" defaultValue="Passw00rd" />
    </FormGroup>
);
