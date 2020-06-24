import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import mdx from './ZIndex.mdx';
import { colors } from '../constants';

const aOptions = {
    None: '',
    '-z-1': '-z-1',
    '-z-2': '-z-2',
    '-z-3': '-z-3',
    '-z-4': '-z-4',
    '-z-5': '-z-5',
    '-z-6': '-z-6',
    '-z-7': '-z-7',
    '-z-8': '-z-8',
    '-z-9': '-z-9',
    '-z-neg': '-z-neg'
};

const bOptions = {
    None: '',
    '-z-1': '-z-1',
    '-z-2': '-z-2',
    '-z-3': '-z-3',
    '-z-4': '-z-4',
    '-z-5': '-z-5',
    '-z-6': '-z-6',
    '-z-7': '-z-7',
    '-z-8': '-z-8',
    '-z-9': '-z-9',
    '-z-neg': '-z-neg'
};

const aDivStyles = {
    backgroundColor: colors.primary,
    width: '100%',
    height: '200px'
};

const bDivStyles = {
    backgroundColor: 'white',
    width: '50px',
    height: '50px',
    position: 'absolute',
    top: '50%',
    right: '50%'
};

export default {
    title: 'Utilities/Z-Index',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div>
        <div style={aDivStyles} className={select('Div A Z-Index', aOptions, '-z-1')} />
        <div style={bDivStyles} className={select('Div B Z-Index', bOptions, '-z-2')} />
    </div>
);
