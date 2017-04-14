import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, select, object } from '@kadira/storybook-addon-knobs';

import * as options from '../constants/options';

import Badge from '../components/atoms/Badge';
import Button from '../components/atoms/Button';
import { buttonOptions } from '../constants/atoms/button.js';
import LoadingDots from '../components/atoms/LoadingDots';
import Tag from '../components/atoms/Tag';

const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);

stories
    .addWithInfo(
        'Badge',
        `The badge component, prefixed by gds-badge, is a numerical indicator of associated items. For a simple colored circle without a number inside, pass in the "empty" prop. If empty, it will not display any text within the badge.
            \n
            option: inverse, success, success-inverse, info, info-inverse, warning, warning-inverse, danger, danger-inverse`,
        () => (
            <Badge
                text={ text('Label', '2') }
                option={ select('Option', options.badgeOptions, '') }
                empty={ boolean('Empty', false) }
            />
        ),
        { inline: true, propTables: [Badge]}
    )
    .addWithInfo(
        'Button',
        `The \`<Button>\` can wrap any arbitrary components or JSX markup into a clickable button.
        `,
        () => (
            <Button
                size={ select('Size', buttonOptions.size, '') }
                option={ select('Option', buttonOptions.option, 'default') }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
                callback={ options.callbackFunc }
            >
                <i className="fa fa-check -m-r-2" />
                Great Success
            </Button>
        ),
        { inline: true, propTables: [Button]}
    )
    .addWithInfo(
        'Loading Dots',
        `The loading component, prefixed by gds-loading, is used to indicate asynchronous loading of content. This example is using a style object so it looks nice on the page.
            \n`,
        () => (
            <LoadingDots
                size={ select('Size', options.loadingSizeOptions, '') }
                whiteDots={ boolean('White Dots', false) }
                style={ object('Styles', { padding: '3rem' }) }
            />
        ),
        { inline: true, propTables: [LoadingDots]}
    )
    .addWithInfo(
        'Tags',
        `The tag component is used to indicate active or selected items, filters or options.  
            \n`,
        () => {
            const eventHandlers = {
                click: action('tag-click'),
                mouseover: action('tag-mouseover'),
                mouseout: action('tag-mouseout')
            };

            return (
                <Tag
                    context={ select('Context', ['normal', 'primary', 'success', 'warning', 'danger'], 'normal') }
                    className={ text('Classes', '') }
                    eventHandlers={ eventHandlers }
                    hasButton={ boolean('Close Button', false) }
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
