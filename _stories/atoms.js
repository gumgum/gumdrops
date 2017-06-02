import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, select, object } from '@kadira/storybook-addon-knobs';

import * as options from '../constants/options';

import Badge from '../components/atoms/Badge';
import Button from '../components/atoms/Button';
import ButtonGroup from '../components/atoms/ButtonGroup';
import { buttonOptions } from '../constants/atoms/button.js';
import LoadingDots from '../components/atoms/LoadingDots';
import Tag from '../components/atoms/Tag';

const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);

stories
    // BADGE
    .addWithInfo(
        'Badge',
        `The \`<Badge>\` component is a numerical indicator of associated items. For a simple colored circle without a number inside, pass in the "empty" prop. If empty, it will not display any text within the badge.
        `,
        () => (
            <Badge
                text={ text('Label', '2') }
                context={ select('Context', options.badgeContexts, '') }
                empty={ boolean('Empty', false) }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
            />
        ),
        { inline: true, propTables: [Badge]}
    )
    // BUTTON
    .addWithInfo(
        'Button',
        `The \`<Button>\` component wraps any arbitrary components or JSX markup into a clickable button.
        `,
        () => (
            <Button
                size={ select('Size', buttonOptions.size, '') }
                context={ select('Context', buttonOptions.context, 'default') }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
                callback={ action('button_clicked') }
            >
                <i className="fa fa-check -m-r-2" />
                Great Success
            </Button>
        ),
        { inline: true, propTables: [Button]}
    )
    // BUTTON GROUP
    .addWithInfo(
        'ButtonGroup',
        `The \`<ButtonGroup>\` wraps a series of \`<Button>\` components with className of 'gds-button-group__button'.
        `,
        () => (
            <ButtonGroup
                size={ select('Size', buttonOptions.size, '') }
                responsive={ boolean('Responsive', false) }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
            >
                <Button
                    className="gds-button-group__button"
                    context="default">
                    Button 1
                </Button>
                <Button
                    className="gds-button-group__button"
                    context="primary">
                    Button 2
                </Button>
                <Button
                    className="gds-button-group__button"
                    context="secondary">
                    Button 3
                </Button>
            </ButtonGroup>
        ),
        { inline: true, propTables: [ButtonGroup]}
    )
    // LOADING DOTS
    .addWithInfo(
        'Loading Dots',
        `The \`<LoadingDots>\` component is used to indicate asynchronous loading of content.
            \n`,
        () => (
            <LoadingDots
                size={ select('Size', options.loadingSizeOptions, '') }
                whiteDots={ boolean('White Dots', false) }
                className={ text('ClassName', '-p-a-5') }
                style={ object('Styles', {}) }
            />
        ),
        { inline: true, propTables: [LoadingDots]}
    )
    // TAG
    .addWithInfo(
        'Tag',
        `The \`<Tag>\` component is used to indicate active or selected items, filters or options. Refer to [this](http://design-prototypes.gumgum.com/black-tie/documentation/#icons-btl) page for icon names.
            \n`,
        () => {
            const eventHandlers = {
                click: action('tag_click'),
                mouseover: action('tag_mouseover'),
                mouseout: action('tag_mouseout')
            };

            return (
                <Tag
                    context={ select('Context', ['normal', 'primary', 'success', 'warning', 'danger'], 'normal') }
                    className={ text('Classes', '') }
                    eventHandlers={ eventHandlers }
                    hasOption={ boolean('Has Option', false) }
                    optionIcon={ text('Option Icon', 'bt-times') }
                    small={ boolean('Small', false) }
                    style={ object('Style', {}) }
                    text={ text('Text', 'Sample Text') }
                    value={ text('Value', '0') }
                />
            );
        },
        { inline: true, propTables: [Tag]}
    )
    ;
