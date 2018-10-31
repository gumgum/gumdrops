import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Column from './Column/';
import LayoutContainer from './LayoutContainer/';
import Row from './Row/';

const stories = storiesOf('Layout', module);

stories
    .addDecorator(withKnobs)
    .add('Column', withReadme(...Column))
    .add('LayoutContainer', withReadme(...LayoutContainer))
    .add('Row', withReadme(...Row));
