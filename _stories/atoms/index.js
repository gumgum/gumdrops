import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Badge from './Badge/';
import Button from './Button/';
import ButtonGroup from './ButtonGroup/';
import CircularThumbnail from './CircularThumbnail/';
import FormGroupLabel from './FormGroupLabel/';
import FormGroupTextHelp from './FormGroupTextHelp/';
import LoadingDots from './LoadingDots/';
import NumberCircle from './NumberCircle/';
import Tag from './Tag/';
import Trend from './Trend/';
import Tooltip from './Tooltip';
import TextInput from './TextInput';
import Select from './Select';

const stories = storiesOf('Atoms', module);
const storyWrapper = (story) => {
    return (
        <div style={ { margin: '35px' } }>
            { story() }
        </div>
    );
};

stories
    .addDecorator((story, context) => withInfo('')(story)(context))
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .add('Badge', withReadme(...Badge))
    .add('Button', withReadme(...Button))
    .add('ButtonGroup', withReadme(...ButtonGroup))
    .add('CircularThumbnail', withReadme(...CircularThumbnail))
    .add('FormGroupLabel', withReadme(...FormGroupLabel))
    .add('FormGroupTextHelp', withReadme(...FormGroupTextHelp))
    .add('LoadingDots', withReadme(...LoadingDots))
    .add('NumberCircle', withReadme(...NumberCircle))
    .add('Select', withReadme(...Select))
    .add('Tag', withReadme(...Tag))
    .add('TextInput', withReadme(...TextInput))
    .add('Tooltip', withReadme(...Tooltip))
    .add('Trend', withReadme(...Trend))
;
