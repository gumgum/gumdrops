import React from 'react';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import mdx from './Avatar.mdx';
import Avatar from '../../../components/molecules/Avatar';

const options = [
    { name: 'Change Password', path: '/account/change-password' },
    { name: 'Change Brand', path: '/account/change-brand' },
    { name: 'Login to Twitter', path: '/account/twitter-login' },
    { name: 'Switch to Annotator', path: '/account/instagram-login' },
    { name: 'Logout', path: 'logout' }
];

export default {
    component: Avatar,
    title: 'Molecules/Avatar',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div style={{ minHeight: 100 }}>
        <Avatar
            open={boolean('Open', false)}
            menuCallback={action('avatar_menu_toggled')}
            optionCallback={action('avatar_menu_option_clicked')}
            username={text('Username', 'Michele')}
            img={text('Image url', '')}
            menuOptions={options}
            className={text('ClassName', '-float-right')}
            style={object('Style', {})}
        />
    </div>
);
