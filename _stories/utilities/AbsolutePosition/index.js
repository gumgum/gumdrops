import React from 'react';
import { select, object } from '@storybook/addon-knobs';

import readme from './README.md';
import { colors } from '../constants';

const options = {
    '': 'None',
    '-abs-t-r': 'Absolute Top Right: -abs-t-r',
    '-abs-t-l': 'Absolute Top Left: -abs-t-l',
    '-abs-b-r': 'Absolute Bottom Right: -abs-b-r',
    '-abs-b-l': 'Absolute Bottom Left: -abs-b-l',
    '-pos-abs': 'Position Absolute: -pos-abs',
    '-pos-rel': 'Position Relative: -pos-rel',
    '-pos-fix': 'Position Fixed: -pos-fix',
    '-pos-stc': 'Position Static: -pos-stc'
};

const outerDivStyle = {
    width: '100%',
    height: '300px',
    border: `1px solid ${colors.primary}`
};

const innerDivStyle = {
    width: '100px',
    height: '100px',
    border: `1px solid ${colors.secondary}`
};

const component = () => (
    <div style={outerDivStyle}>
        <div className={select('Options', options, '')} style={object('Style', innerDivStyle)} />
    </div>
);

export default [readme, component];
