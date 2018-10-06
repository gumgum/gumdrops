import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
// import ReadmeContainer from 'storybook-readme/components/readme-container';
// import DefaultPreview from 'storybook-readme/with-docs';

import './index.css';

setOptions({
    name: 'Gumdrops',
    url: 'https://storybook.gumgum.com',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: true
});

setDefaults({
    inline: true,
    header: false,
    source: true,
    styles: stylesheet => {
        stylesheet.infoBody = {
            infoBody: {
                padding: '10px'
            }
        };
        return stylesheet;
    },
    maxPropsIntoLine: 1
    // propTablesExclude: [ReadmeContainer, DefaultPreview]
});

function loadStories() {
    require('../_stories/');
}

setAddon(infoAddon);

configure(loadStories, module);
