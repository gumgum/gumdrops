import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, select, object } from '@kadira/storybook-addon-knobs';

import * as options from '../constants/options';

import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import LayoutContainer from '../components/layout/LayoutContainer';

const stories = storiesOf('Layout', module);
stories.addDecorator(withKnobs);

stories
    .addWithInfo(
        'LayoutContainer',
        `The layout component is used for centering containers and for responsive grid columns. The grid system works exactly like Twitter Bootstrap's, with columns automatically stacking at mobile widths. All page content except for the gds-page-header and gds-slide-nav components should be placed inside the <LayoutContainer />.

        \nBy default, the LayoutContainer has a max-width of 1200px. For a 100% width container, use the attribute full={ true }`,
        () => (
            <LayoutContainer
                fullWidth
                className="extra attributes are welcome"
                id="some-id"
                onClick={ options.callbackFunc }>
                Example
            </LayoutContainer>
        ),
        { inline: true, propTables: [LayoutContainer]}
    )
    .addWithInfo(
        'Row',
        '<Row> is meant to hold one or more <Column>',
        () => (
            <Row
                className="extra-classes are welcome"
                style={ { border: '1px deashed red' } }>
                Example
            </Row>
        ),
        { inline: true, propTables: [Row]}
    )
    .addWithInfo(
        'Column',
        `Responsive columns are constructed using the breakpoint attributes. A breakpoint can be xs, sm, md, lg or xl. Width can be any integer from 1 to 12.

        \nThe Design System uses a standard 12-column grid, so at a given breakpoint, columns ending in-3 will be 25% wide (3 of the 12 columns), columns ending in-6 will be 50% wide (6 of the 12 columns), columns ending in-9 will be 75% wide (9 of the 12 columns), and so on.`,
        () => (
            <Row>
                <Column md="6" xs="12">
                    column a
                </Column>
                <Column md="6" xs="12">
                    column b
                </Column>
            </Row>
        ),
        { inline: true, propTables: [Column]}
    );
