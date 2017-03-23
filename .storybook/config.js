import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import './index.css';

function loadStories() {
    require('../_stories/');
}

setAddon(infoAddon);

configure(loadStories, module);
