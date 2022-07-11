import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

import mdx from './Tabs.mdx';
import Tabs from '../../../components/molecules/Tabs';
import { action } from '@storybook/addon-actions';

export default {
    component: Tabs,
    title: 'Molecules/Tabs',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

const tabOptions = [
    { name: 'Tab 1', path: '/tab1'},
    { name: 'Tab 2', path: '/tab2'},
    { name: 'Tab 3', path: '/tab3'},
];

export const Default = () => (
    <Tabs
        location={text('Location', "/top-path/123/sub-path/tab1")}
        options={tabOptions}
        onClick={path => action(path)}
    />
);
