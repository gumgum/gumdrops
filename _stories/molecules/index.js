import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Accordion from './Accordion';
import Avatar from './Avatar/';
import Breadcrumbs from './Breadcrumbs/';
import BreadcrumbsWrapper from './BreadcrumbsWrapper/';
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
import Snackbar from './Snackbar/';
import Table from './Table/';
import Toggle from './Toggle/';
import Well from './Well/';

const stories = storiesOf('Molecules', module);

stories
    .addDecorator(withKnobs)
    .add('Accordion', withReadme(...Accordion))
    .add('Avatar', withReadme(...Avatar))
    .add('Breadcrumbs', withReadme(...Breadcrumbs))
    .add('BreadcrumbsWrapper', withReadme(...BreadcrumbsWrapper))
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
    .add('Snackbar', withReadme(...Snackbar))
    .add('Table', withReadme(...Table))
    .add('Toggle', withReadme(...Toggle))
    .add('Well', withReadme(...Well));
