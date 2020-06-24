import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import mdx from './TextAlign.mdx';
import { colors } from '../constants';

const optionsNoDefault = arrToObjOptions([
    '-text-left',
    '-text-center',
    '-text-right',
    '-text-left--xs',
    '-text-left--sm',
    '-text-left--md',
    '-text-left--lg',
    '-text-left--xl',
    '-text-center--xs',
    '-text-center--sm',
    '-text-center--md',
    '-text-center--lg',
    '-text-center--xl',
    '-text-right--xs',
    '-text-right--sm',
    '-text-right--md',
    '-text-right--lg',
    '-text-right--xl'
]);

const options = { ...optionsNoDefault, None: '' };

const divStyle = {
    border: `1px solid ${colors.primary}`
};

export default {
    title: 'Utilities/Text Align',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div style={divStyle} className={select('Options', options, '-text-center')}>
        Hello
    </div>
);
