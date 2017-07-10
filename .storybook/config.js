import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import './index.css';

function loadStories() {
    require('../_stories/');
}

setAddon(infoAddon);

configure(loadStories, module);
