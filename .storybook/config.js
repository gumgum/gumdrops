import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { create } from '@storybook/theming';

import './index.scss';

addParameters({
    options: {
        isFullScreen: false,
        showNav: true,
        showPanel: true,
        panelPosition: 'right',
        sortStoriesByKind: true,
        hierarchySeparator: /\/|\./,
        hierarchyRootSeparator: /\|/,
        sidebarAnimations: false,
        enableShortcuts: true,
        isToolshown: true,
        theme: create({
            base: 'light',
            brandTitle: 'Gumdrops',
            brandUrl: 'https://storybook.gumgum.com'
        })
    }
});

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

addDecorator(storyWrapper);

configure(loadStories, module);
