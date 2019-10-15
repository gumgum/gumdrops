import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import mdx from './FormGroupTextHelp.mdx';
import FormGroupTextHelp from '../../../components/atoms/FormGroupTextHelp';
import TextInput from '../../../components/atoms/TextInput';
import FormGroup from '../../../components/molecules/FormGroup';

export default {
    component: FormGroupTextHelp,
    title: 'Atoms/FormGroupTextHelp',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <FormGroup context="danger">
        <TextInput name="password" type="password" defaultValue="badpassword" />
        <FormGroupTextHelp
            text={text('Text', 'Your password is incorrect')}
            className={text('Classname', '')}
            style={object('Style', {})}
        />
    </FormGroup>
);
