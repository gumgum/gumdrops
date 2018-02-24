import React from 'react';
import { select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import readme from './README.md';
import { colors } from '../constants';

const aStyle = {
    backgroundColor: colors.primary,
    width: '100px',
    height: '100px'
};
const bStyle = {
    backgroundColor: colors.secondary,
    width: '100px',
    height: '100px'
};

const component = () => (
    <div>
        <div style={aStyle} className={select('Blue Box', aOptions, '-inline-block')} />
        <div
            style={bStyle}
            className={select(
                'Green Box (Breakpoint Specific Options)',
                bOptions,
                '-inline-block--xl'
            )}
        />
    </div>
);

const aOptions = arrToObjOptions([
    '-block',
    '-inline-block',
    '-none',
    '-vis-hidden',
    '-sr-only',
    '-flex'
]);

const bOptions = arrToObjOptions([
    '-block--xs',
    '-block--sm',
    '-block--md',
    '-block--lg',
    '-block--xl',
    '-inline-block--xs',
    '-inline-block--sm',
    '-inline-block--md',
    '-inline-block--lg',
    '-inline-block--xl',
    '-none--xs',
    '-none--sm',
    '-none--md',
    '-none--lg',
    '-none--xl',
    '-flex--xs',
    '-flex--sm',
    '-flex--md',
    '-flex--lg',
    '-flex--xl'
]);

export default [readme, component];
