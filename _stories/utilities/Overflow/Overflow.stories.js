import React from 'react';
import { withKnobs, select, object } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import mdx from './Overflow.mdx';
import { colors } from '../constants';

const optionsNoDefault = arrToObjOptions([
    '-overflow-hidden',
    '-overflow-visible',
    '-overflow-x-hidden',
    '-overflow-y-hidden',
    '-overflow-x-scroll',
    '-overflow-y-scroll'
]);

const options = { ...optionsNoDefault, None: '' };

const outerDivStyle = {
    width: '400px',
    height: '300px',
    border: `1px solid ${colors.primary}`
};

const innerDivStyle = {
    width: '300px',
    height: '200px',
    border: `1px solid ${colors.secondary}`
};

export default {
    title: 'Utilities/Overflow',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div style={outerDivStyle}>
        <div
            className={select('Options', options, '-overflow-hidden')}
            style={object('Style', innerDivStyle)}>
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
            of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
            of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
            of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
            of text A bunch of text A bunch of text A bunch of text
        </div>
    </div>
);
