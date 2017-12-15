import React from 'react';
import { select, text, object } from '@storybook/addon-knobs';

import readme from './README.md';
import Trend from '../../../components/atoms/Trend';

const contextOptions = {
    up: 'up',
    same: 'same',
    down: 'down'
};

const component = () => (
    <Trend
        context={ select('Context', contextOptions, 'up') }
        value={ text('Value', '42') }
        unit={ text('Unit', '%') }
        className={ text('Classes', '') }
        style={ object('Style', {}) }
    />
);

export default [readme, component];
