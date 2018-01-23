import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Column from './Column/';
import LayoutContainer from './LayoutContainer/';
import Row from './Row/';

const stories = storiesOf('Layout', module);
const storyWrapper = story => {
    return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
    .addDecorator((story, context) => withInfo('')(story)(context))
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .add('Column', withReadme(...Column))
    .add('LayoutContainer', withReadme(...LayoutContainer))
    .add('Row', withReadme(...Row));
