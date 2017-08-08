import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs } from '@storybook/addon-knobs';

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
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .addWithInfo('Badge', withReadme(...Badge))
    .addWithInfo('Button', withReadme(...Button))
    .addWithInfo('ButtonGroup', withReadme(...ButtonGroup))
    .addWithInfo('CircularThumbnail', withReadme(...CircularThumbnail))
    .addWithInfo('FormGroupLabel', withReadme(...FormGroupLabel))
    .addWithInfo('FormGroupTextHelp', withReadme(...FormGroupTextHelp))
    .addWithInfo('LoadingDots', withReadme(...LoadingDots))
    .addWithInfo('NumberCircle', withReadme(...NumberCircle))
    .addWithInfo('Tag', withReadme(...Tag))
    .addWithInfo('Trend', withReadme(...Trend))
    .addWithInfo('TextInput', withReadme(...TextInput))
    .addWithInfo('Tooltip', withReadme(...Tooltip))
    .addWithInfo('Select', withReadme(...Select))
;
