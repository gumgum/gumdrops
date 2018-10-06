import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import readme from './README.md';

import Checkbox from '../../../components/molecules/Checkbox';
import LoginForm from '../../../components/molecules/LoginForm';
import FormGroup from '../../../components/molecules/FormGroup';
import FormGroupLabel from '../../../components/atoms/FormGroupLabel';
import Button from '../../../components/atoms/Button';
import TextInput from '../../../components/atoms/TextInput';

const component = () => (
    <LoginForm
        capText={text('Cap Text', 'Welcome')}
        logoText={text('Logo Text', 'Storybook')}
        hideLogo={boolean('Hide Logo', false)}
        onSubmit={action('Form Submit')}
        recoveryFn={action('Recovery Action')}
        recoveryText={text('Recovery Text', 'Forgot Password?')}>
        <FormGroup className="-m-b-1">
            <FormGroupLabel text="username" />
            <TextInput name="username" type="text" placeholder="username" />
        </FormGroup>
        <FormGroup className="-m-b-2">
            <FormGroupLabel text="Password" />
            <TextInput name="password" type="password" placeholder="password123" />
        </FormGroup>
        <FormGroup className="-m-b-2">
            <Checkbox name="staySignedIn" label="Stay signed in" />
        </FormGroup>
        <Button type="submit" className="gds-button--block" context="primary">
            Login
        </Button>
    </LoginForm>
);

export default [readme, component];
