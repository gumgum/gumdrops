import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean, select, object } from '@storybook/addon-knobs';

import Row from '../../components/layout/Row';
import Column from '../../components/layout/Column';
import LayoutContainer from '../../components/layout/LayoutContainer';

const stories = storiesOf('Layout', module);
stories.addDecorator(withKnobs);

stories
    // LAYOUT CONTAINER
    .addWithInfo(
        'LayoutContainer',
        `The \`<LayoutContainer>\` component is used for centering containers and for responsive grid columns. The grid system works exactly like Twitter Bootstrap's, with columns automatically stacking at mobile widths. All page content except for the gds-page-header and gds-slide-nav components should be placed inside the <LayoutContainer />.

        \nBy default, the LayoutContainer has a max-width of 1200px. For a 100% width container, use the attribute full={ true }`,
        () => (
            <LayoutContainer
                fullWidth={ boolean('Full width', false) }
                className={ text('Extra classes') }
                id={ text('Ids') }
                onClick={ action('layout_container_clicked') }>
                <Row>
                    <Column md={ 4 }>Example</Column>
                    <Column md={ 4 }>Example</Column>
                    <Column md={ 4 }>Example</Column>
                </Row>
            </LayoutContainer>
        ),
        { inline: true, propTables: [LayoutContainer]}
    )
    // ROW
    .addWithInfo(
        'Row',
        `A \`<Row>\` component is meant to hold one or more \`<Column>\` components.
        `,
        () => (
            <Row
                className={ text('ClassName', '') }
                style={ object('style', { border: '1px dashed red' }) }>
                Example
            </Row>
        ),
        { inline: true, propTables: [Row]}
    )
    // COLUMN
    .addWithInfo(
        'Column',
        `Responsive \`<Column>\` components are constructed using the breakpoint attributes. A breakpoint can be xs, sm, md, lg or xl. Width can be any integer from 1 to 12.

        \nThe Design System uses a standard 12-column grid, so at a given breakpoint, columns ending in-3 will be 25% wide (3 of the 12 columns), columns ending in-6 will be 50% wide (6 of the 12 columns), columns ending in-9 will be 75% wide (9 of the 12 columns), and so on.`,
        () => (
            <Row>
                <Column
                    xs={ number('Extra Small') }
                    sm={ number('Small') }
                    md={ number('Medium', 6) }
                    lg={ number('Large') }
                    xl={ number('Extra large') }>
                    column a
                </Column>
                <Column
                    xs={ number('Extra Small') }
                    sm={ number('Small') }
                    md={ number('Medium', 6) }
                    lg={ number('Large') }
                    xl={ number('Extra large') }>
                    column b
                </Column>
            </Row>
        ),
        { inline: true, propTables: [Column]}
    );
