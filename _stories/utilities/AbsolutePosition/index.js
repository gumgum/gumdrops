import React from 'react';
import { object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import { colors } from '../constants';

const options = {
    None: '',
    'Absolute Top Right: -abs-t-r': '-abs-t-r',
    'Absolute Top Left: -abs-t-l': '-abs-t-l',
    'Absolute Bottom Right: -abs-b-r': '-abs-b-r',
    'Absolute Bottom Left: -abs-b-l': '-abs-b-l',
    'Position Absolute: -pos-abs': '-pos-abs',
    'Position Relative: -pos-rel': '-pos-rel',
    'Position Fixed: -pos-fix': '-pos-fix',
    'Position Static: -pos-stc': '-pos-stc'
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
        <div
            className={optionalSelect('Options', options, '')}
            style={object('Style', innerDivStyle)}
        />
    </div>
);

export default [readme, component];
