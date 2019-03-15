import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';

import './index.scss';

function loadStories() {
    require('../_stories/');
}

const storyWrapper = story => <div style={{ margin: 35 }}>{story()}</div>;

addDecorator(
    withInfo({
        inline: true,
        header: false,
        source: true,
        maxPropsIntoLine: 1
    })
);

addDecorator(
    withOptions({
        name: 'Gumdrops',
        url: 'https://storybook.gumgum.com',
        goFullScreen: false,
        showStoriesPanel: true,
        showAddonPanel: true,
        showSearchBox: false,
        addonPanelInRight: true,
        sortStoriesByKind: true
    })
);

addDecorator(storyWrapper);

configure(loadStories, module);
