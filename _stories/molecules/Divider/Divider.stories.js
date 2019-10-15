import React from 'react';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import mdx from './Divider.mdx';
import Divider from '../../../components/molecules/Divider';

export default {
    component: Divider,
    title: 'Molecules/Divider',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
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
