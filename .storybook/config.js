import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import './index.css';

setOptions({
    name: 'GumGum Storybook',
    url: 'https://storybook.gumgum.com',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: true,
    sortStoriesByKind: true
});

setDefaults({
    inline: true
});

function loadStories() {
    require('../_stories/');
}

setAddon(infoAddon);

configure(loadStories, module);
