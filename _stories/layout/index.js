import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Column from './Column/';
import LayoutContainer from './LayoutContainer/';
import Row from './Row/';

const stories = storiesOf('Layout', module);
const storyWrapper = (story) => {
    return (
        <div style={ { margin: '35px' } }>
            { story() }
        </div>
    );
};

stories
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .addWithInfo('Column', withReadme(...Column))
    .addWithInfo('LayoutContainer', withReadme(...LayoutContainer))
    .addWithInfo('Row', withReadme(...Row))
;
