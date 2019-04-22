import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Badge from './Badge/';
import Button from './Button/';
import ButtonGroup from './ButtonGroup/';
import CircularThumbnail from './CircularThumbnail/';
import FormGroupLabel from './FormGroupLabel/';
import FormGroupTextHelp from './FormGroupTextHelp/';
import LoadingDots from './LoadingDots/';
import NumberCircle from './NumberCircle/';
import RadioButton from './RadioButton/';
import Tag from './Tag/';
import Trend from './Trend/';
import Tooltip from './Tooltip';
import TextArea from './TextArea';
import TextInput from './TextInput';
import Select from './Select';
import ProgressBar from './ProgressBar';

const stories = storiesOf('Atoms', module);
stories
    .addDecorator(withKnobs)
    .add('Badge', withReadme(...Badge))
    .add('Button', withReadme(...Button))
    .add('ButtonGroup', withReadme(...ButtonGroup))
    .add('CircularThumbnail', withReadme(...CircularThumbnail))
    .add('FormGroupLabel', withReadme(...FormGroupLabel))
    .add('FormGroupTextHelp', withReadme(...FormGroupTextHelp))
    .add('LoadingDots', withReadme(...LoadingDots))
    .add('NumberCircle', withReadme(...NumberCircle))
    .add('ProgressBar', withReadme(...ProgressBar))
    .add('RadioButton', withReadme(...RadioButton))
    .add('Select', withReadme(...Select))
    .add('Tag', withReadme(...Tag))
    .add('TextArea', withReadme(...TextArea))
    .add('TextInput', withReadme(...TextInput))
    .add('Tooltip', withReadme(...Tooltip))
    .add('Trend', withReadme(...Trend));
