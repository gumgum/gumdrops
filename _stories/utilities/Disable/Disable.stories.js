import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import mdx from './Disable.mdx';
import { colors } from '../constants';

const options = {
    None: '',
    '-disabled': '-disabled'
};

const divStyle = {
    width: '100%',
    height: '50px',
    backgroundColor: colors.primary
};

export default {
    title: 'Utilities/Disable',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div style={divStyle} className={select('Options', options, '-disabled')} />
);
