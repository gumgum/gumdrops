import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import mdx from './Ellipsis.mdx';

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

export default {
    title: 'Utilities/Ellipsis',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
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
