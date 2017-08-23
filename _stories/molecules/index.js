import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs } from '@storybook/addon-knobs';

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
    .addDecorator(storyWrapper)
    .addDecorator(withKnobs)
    .addWithInfo('Avatar', withReadme(...Avatar))
    .addWithInfo('Card', withReadme(...Card))
    .addWithInfo('CardBlock', withReadme(...CardBlock))
    .addWithInfo('CardImage', withReadme(...CardImage))
    .addWithInfo('Checkbox', withReadme(...Checkbox))
    .addWithInfo('Divider', withReadme(...Divider))
    .addWithInfo('FormGroup', withReadme(...FormGroup))
    .addWithInfo('LoginForm', withReadme(...LoginForm))
    .addWithInfo('MultiSelect', withReadme(...MultiSelect))
    .addWithInfo('Modal', withReadme(...Modal))
    .addWithInfo('Pagination', Pagination[2], withReadme(...Pagination))
    .addWithInfo('SearchMultiSelect', SearchMultiSelect[2], withReadme(...SearchMultiSelect))
    .addWithInfo('Toggle', withReadme(...Toggle))
    .addWithInfo('Well', withReadme(...Well))
;

