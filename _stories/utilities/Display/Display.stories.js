import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import mdx from './Display.mdx';
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

export default {
    title: 'Utilities/Display',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
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
