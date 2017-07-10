import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Avatar from '../../../components/molecules/Avatar';

const options = [
    { name: 'Change Password', path: '/account/change-password' },
    { name: 'Change Brand', path: '/account/change-brand' },
    { name: 'Login to Twitter', path: '/account/twitter-login' },
    { name: 'Switch to Annotator', path: '/account/instagram-login' },
    { name: 'Logout', path: '/account/logout' }
];

const component = () => (
    <Avatar
        open={ boolean('Open', false) }
        callback={ action('avatar_menu_toggled') }
        username={ text('Username', 'Michele') }
        img={ text('Image url', '') }
        menuOptions={ options }
        className={ text('ClassName', '') }
        style={ object('Style', {}) }
    />
);

export default [readme, component];
