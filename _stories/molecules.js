import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, object, boolean, select } from '@kadira/storybook-addon-knobs';

import * as options from '../constants/options';
import AvatarMenu from '../constants/AvatarMenu';

import Avatar from '../components/molecules/Avatar';
import Card from '../components/molecules/Card';
import { cardOptions } from '../constants/molecules/card.js';
import CardBlock from '../components/molecules/CardBlock';
import { cardBlockOptions } from '../constants/molecules/cardBlock.js';
import CardImage from '../components/molecules/CardImage';
import { cardImageOptions } from '../constants/molecules/cardImage.js';
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
        'Card',
        `The \`<Card>\` is a standard container component, designed to hold groups of related information. Cards are usually arranged in a uniform grid.
        `,
        () => (
            <div>
                <Card
                    option={ select('Option', cardOptions.option, undefined) }
                    size={ select('Size', cardOptions.size, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                >
                    <CardBlock>
                        <p>Content in a plain Card.</p>
                    </CardBlock>
                </Card>
                <Card
                    option={ select('Option', cardOptions.option, undefined) }
                    size={ select('Size', cardOptions.size, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                >
                    <CardBlock>
                        <p>Content in a plain CardBlock.</p>
                    </CardBlock>
                    <CardBlock
                        option="divide-top"
                    >
                        <p>Content in a CardBlock with a top divider.</p>
                    </CardBlock>
                </Card>
                <Card
                    option={ select('Option', cardOptions.option, undefined) }
                    size={ select('Size', cardOptions.size, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                >
                    <CardImage
                        url="https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png"
                    />
                    <CardBlock
                        option="divide-top"
                    >
                        <p>Card with a CardImage and a CardBlock.</p>
                    </CardBlock>
                </Card>
            </div>
        ),
        { inline: true, propTables: [Card]}
    )
    .addWithInfo(
        'CardBlock',
        `The \`<CardBlock>\` should be nested within a \`<Card>\` to wrap the card's content into distinct chunks. Use the \`option\` prop to add a divider line on the top or bottom of the \`<CardBlock>\`, to make the separation more clear.
        `,
        () => (
            <Card>
                <CardBlock
                    option={ select('Option', cardBlockOptions.option, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                >
                    <p>Content in a CardBlock.</p>
                </CardBlock>
            </Card>
        ),
        { inline: true, propTables: [Card]}
    )
    .addWithInfo(
        'CardImage',
        `The \`<CardImage>\` is used to append images inside of a \`<Card>\`. It can add an image to the top or bottom of the card.
        `,
        () => (
            <Card>
                <CardImage
                    url={ text('Image URL', 'https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png') }
                    option={ select('Option', cardImageOptions.option, undefined) }
                    size={ select('Size', cardImageOptions.size, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                />
            </Card>
        ),
        { inline: true, propTables: [CardImage]}
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
