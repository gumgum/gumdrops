import React from 'react';
import { select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import readme from './README.md';

const optionsNoDefault = arrToObjOptions([
    '-ellipsis',
    '-ellipsis--sm',
    '-ellipsis--md',
    '-ellipsis--lg',
    '-ellipsis--xl'
]);

const options = { ...optionsNoDefault, None: '' };

const divStyle = {
    width: '100%',
    height: '100px'
};

const component = () => (
    <div style={divStyle} className={select('Options', options, '-ellipsis')}>
        A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of
        text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
        of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A
        bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of
        text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
        of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A
        bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of
        text A bunch of text A bunch of text
    </div>
);

export default [readme, component];
