import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import AbsolutePosition from './AbsolutePosition';
import BorderRadius from './BorderRadius';
import Color from './Color';
import Cursor from './Cursor';
import Disable from './Disable';
import Display from './Display';
import Ellipsis from './Ellipsis';
import Float from './Float';
import Margin from './Margin';
import Overflow from './Overflow';
import Padding from './Padding';
import PointerEvents from './PointerEvents';
import TextAlign from './TextAlign';
import TextTransform from './TextTransform';
import UserSelect from './UserSelect';
import VerticalAlign from './VerticalAlign';
import ZIndex from './ZIndex';

const stories = storiesOf('Utilities', module);
const storyWrapper = story => {
    return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
    .addDecorator((story, context) => withInfo('')(story)(context))
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .add('AbsolutePosition', withReadme(...AbsolutePosition))
    .add('BorderRadius', withReadme(...BorderRadius))
    .add('Color', withReadme(...Color))
    .add('Cursor', withReadme(...Cursor))
    .add('Disable', withReadme(...Disable))
    .add('Display', withReadme(...Display))
    .add('Ellipsis', withReadme(...Ellipsis))
    .add('Float', withReadme(...Float))
    .add('Margin', withReadme(...Margin))
    .add('Overflow', withReadme(...Overflow))
    .add('Padding', withReadme(...Padding))
    .add('PointerEvents', withReadme(...PointerEvents))
    .add('TextAlign', withReadme(...TextAlign))
    .add('TextTransform', withReadme(...TextTransform))
    .add('UserSelect', withReadme(...UserSelect))
    .add('VerticalAlign', withReadme(...VerticalAlign))
    .add('ZIndex', withReadme(...ZIndex));
