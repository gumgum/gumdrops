import React from 'react';
import { withKnobs, select, text, object } from '@storybook/addon-knobs';

import mdx from './Trend.mdx';
import Trend from '../../../components/atoms/Trend';

const contextOptions = ['up', 'same', 'down'];

export default {
    component: Trend,
    title: 'Atoms/Trend',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Trend
        context={select('Context', contextOptions, 'up')}
        value={text('Value', '42')}
        unit={text('Unit', '%')}
        className={text('Classes', '')}
        style={object('Style', {})}
    />
);
