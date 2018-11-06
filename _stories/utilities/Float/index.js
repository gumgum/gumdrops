import React from 'react';
import { select, object } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import readme from './README.md';
import { colors } from '../constants';

const floatOptionsNoDefault = arrToObjOptions([
    '-float-left',
    '-float-right',
    '-float-none',
    '-float-none--xs',
    '-float-none--sm',
    '-float-none--md',
    '-float-none--lg',
    '-float-none--xl'
]);

const floatOptionsA = { ...floatOptionsNoDefault, None: '' };
const floatOptionsB = { ...floatOptionsNoDefault, None: '' };

const clearOptionsNoDefault = arrToObjOptions(['-clear-left', '-clear-right', '-clear-both']);

const clearOptionsA = { ...clearOptionsNoDefault, None: '' };
const clearOptionsB = { ...clearOptionsNoDefault, None: '' };

const divStyleA = {
    width: '100px',
    height: '100px',
    border: `1px solid ${colors.primary}`
};

const divStyleB = {
    width: '100px',
    height: '100px',
    border: `1px solid ${colors.secondary}`
};

const component = () => (
    <div>
        <div
            className={select('Float Options A', floatOptionsA, '-float-right')}
            style={object('Style A', divStyleA)}
        />
        <div className={select('Clear Options A', clearOptionsA, '-clear-both')} />
        <div
            className={select('Float Options B', floatOptionsB, '-float-left')}
            style={object('Style B', divStyleB)}
        />
        <div className={select('Clear Options B', clearOptionsB, '-clear-both')} />
    </div>
);

export default [readme, component];
