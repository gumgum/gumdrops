import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, select, object } from '@kadira/storybook-addon-knobs';

import * as options from '../constants/options';

import Badge from '../components/atoms/Badge';
import Button from '../components/atoms/Button';
import { buttonOptions } from '../constants/atoms/button.js';
import LoadingDots from '../components/atoms/LoadingDots';

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
        `The button component, prefixed by gds-button, is used to style <button> tags.
            \n
            size: xs, sm, lg
            option: default, primary, secondary, success, warning, info, danger`,
        () => (
            <Button
                text={ text('Label', 'Default Button') }
                size={ select('Size', buttonOptions.size, '') }
                option={ select('Option', buttonOptions.option, 'default') }
                block={ boolean('Block', false) }
                callback={ options.callbackFunc }
            />
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
    ;
