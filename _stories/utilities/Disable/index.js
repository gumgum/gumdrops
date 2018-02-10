import React from 'react';
import { select } from '@storybook/addon-knobs';
import Button from '../../../components/atoms/Button';

import readme from './README.md';
import { colors } from '../constants';

const options = {
    '': 'None',
    '-disabled': '-disabled'
};

const divStyle = {
    width: '100%',
    height: '50px',
    backgroundColor: colors.primary
};

const component = () => (
    <div style={divStyle} className={select('Options', options, '-disabled')} />
);

export default [readme, component];
