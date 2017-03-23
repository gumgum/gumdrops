import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';

import * as options from '../constants/options';
import AvatarMenu from '../constants/AvatarMenu';

import Avatar from '../components/molecules/Avatar';
import Divider from '../components/molecules/Divider';
import Toggle from '../components/molecules/Toggle';
import Well from '../components/molecules/Well';

const stories = storiesOf('Molecules', module);
stories.addDecorator(withKnobs);

stories
    .addWithInfo(
        'Avatar',
        `The avatar component can display a user's photo, a brand's logo, or a flag icon for internationalization. The avatar can include a dropdown menu, which is meant to be shown when the avatar is clicked on.
        If the avatar is expandable, pass in a callback function that sets the state, and include the state in your component. You must also pass in an array of objects of names and paths for the menu. (see ../constants/AvatarMenu.js)
        \n
        Example:
        ...
        state {
            avatarOpen: false
        }
        const toggleAvatar = () => {
            this.setState({ open: !this.state.toggleAvatar });
        };
        return(
            <Avatar
                open={ this.state.avatarOpen }
                callback={ this.toggleAvatar }
                menuOptions={ AvatarMenu }
            />
        )
        ...
        `,
        () => (
            <Avatar
                open={ boolean('Open', false) }
                callback={ options.callbackFunc }
                username={ text('Username', 'Michele') }
                img={ text('Image url', '') }
                menuOptions={ AvatarMenu }
            />
        ),
        { inline: true, propTables: [Avatar]}
    )
    .addWithInfo(
        'Divider',
        `The standard divider component is used to separate distinct segments of content.
        If the divider is collapsible, pass in a callback function that sets the state, and include the state in your component.
        \n
        Example:
        ...
        state {
            open: false
        }
        const toggle = () => {
            this.setState({ open: !this.state.open });
        };
        return(
            <div>
                <Divider
                    label="Collapsible Label"
                    collapsible
                    open={ this.state.open }
                    callback= { this.toggle }
                />
                this.state.open && <div>Content to show when toggled open</div>
            </div>
        )
        ...
        `,
        () => (
            <Divider
                label={ text('Label', 'Default Divider') }
                centered={ boolean('Centered', false) }
                collapsible={ boolean('Collapsible', false) }
                open={ boolean('Open', false) }
                callback={ options.callbackFunc }
            />
        ),
        { inline: true, propTables: [Divider]}
    )
    .addWithInfo(
        'Toggle',
        `Toggle switches come in two flavors: radio and checkbox. Each one behaves in the same manner as their respective standard input type.
            \n
            type: checkbox, radio`,
        () => (
            <Toggle
                label={ text('Label', 'Default Toggle') }
                type={ select('Type', { checkbox: 'checkbox', radio: 'radio' }, 'checkbox') }
            />
        ),
        { inline: true, propTables: [Toggle]}
    )
    .addWithInfo(
        'Well',
        `The well component can be used for alert messages or other user notifications. If you pass in a button=true and a callback function, the component will call that function when a user clicks on the x.
            \n
            option: success, warning, info, danger`,
        () => (
            <Well
                text={ text('Label', 'Default Well') }
                option={ select('Type', options.wellOptions, undefined) }
                button={ boolean('Button', false) }
                callback={ options.callbackFunc }
            />
        ),
        { inline: true, propTables: [Well]}
    )
    ;
