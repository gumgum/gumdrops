import { storiesOf } from '@storybook/react';
import installation from './Installation/README.md';
import customization from './Customization/README.md';

const stories = storiesOf(' Getting Started', module);

stories
    .addParameters({
        info: {
            inline: true,
            source: false
        },
        options: {
            showAddonPanel: false
        }})
    .add(' Installation',
        () => {},
        { info: { text: installation } })
    .add(
        'Customization',
        () => {},
        { info: { text: customization } })
