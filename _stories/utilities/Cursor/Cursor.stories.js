import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import mdx from './Cursor.mdx';
import { colors } from '../constants';

const optionsNoDefault = arrToObjOptions([
    '-cursor--default',
    '-cursor--pointer',
    '-cursor--context-menu',
    '-cursor--help',
    '-cursor--progress',
    '-cursor--crosshair',
    '-cursor--text',
    '-cursor--copy',
    '-cursor--move',
    '-cursor--not-allowed',
    '-cursor--zoom-in',
    '-cursor--zoom-out',
    '-cursor--grab',
    '-cursor--grabbing'
]);

const options = { ...optionsNoDefault, None: '' };

const divStyle = {
    width: '100%',
    height: '200px',
    border: `1px solid ${colors.primary}`,
    padding: '10px'
};

export default {
    title: 'Utilities/Cursor',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div style={divStyle} className={select('Options', options, '-cursor--default')}>
        Hover inside this box to see different cursor options!
    </div>
);
