import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Divider from '../../../components/molecules/Divider';

const component = () => (
    <Divider
        label={text('Label', 'Default Divider')}
        centered={boolean('Centered', false)}
        collapsible={boolean('Collapsible', false)}
        open={boolean('Open', false)}
        className={text('ClassName', '')}
        style={object('Style', {})}
        callback={action('divider_toggled')}
    />
);

export default [readme, component];
