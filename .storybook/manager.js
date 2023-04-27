import { addons } from '@storybook/manager-api';
import gumgum from './gumgum';

addons.setConfig({
    panelPosition: 'right',
    theme: gumgum
});
