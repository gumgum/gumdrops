import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Accordion from './Accordion';
import Avatar from './Avatar/';
import Card from './Card/';
import CardBlock from './CardBlock/';
import CardImage from './CardImage/';
import Checkbox from './Checkbox/';
import Divider from './Divider/';
import FormGroup from './FormGroup/';
import LoginForm from './LoginForm/';
import MultiSelect from './MultiSelect/';
import Modal from './Modal/';
import Pagination from './Pagination/';
import SearchMultiSelect from './SearchMultiSelect/';
import Toggle from './Toggle/';
import Well from './Well/';

const stories = storiesOf('Molecules', module);
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
    .add('Accordion', withReadme(...Accordion))
    .add('Avatar', withReadme(...Avatar))
    .add('Card', withReadme(...Card))
    .add('CardBlock', withReadme(...CardBlock))
    .add('CardImage', withReadme(...CardImage))
    .add('Checkbox', withReadme(...Checkbox))
    .add('Divider', withReadme(...Divider))
    .add('FormGroup', withReadme(...FormGroup))
    .add('LoginForm', withReadme(...LoginForm))
    .add('Modal', withReadme(...Modal))
    .add('MultiSelect', withReadme(...MultiSelect))
    .add('Pagination', withReadme(...Pagination))
    .add('SearchMultiSelect', withReadme(...SearchMultiSelect))
    .add('Toggle', withReadme(...Toggle))
    .add('Well', withReadme(...Well))
;
