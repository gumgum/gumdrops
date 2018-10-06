import React from 'react';
import { selectV2 as select, text, object } from '@storybook/addon-knobs';

import readme from './README.md';
import Trend from '../../../components/atoms/Trend';

const contextOptions = ['up', 'same', 'down'];

const component = () => (
    <Trend
        context={select('Context', contextOptions, 'up')}
        value={text('Value', '42')}
        unit={text('Unit', '%')}
        className={text('Classes', '')}
        style={object('Style', {})}
    />
);

export default [readme, component];
