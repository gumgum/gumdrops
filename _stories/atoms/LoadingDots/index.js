import React from 'react';
import { boolean, select, text, object } from '@storybook/addon-knobs';

import readme from './README.md';
import LoadingDots from '../../../components/atoms/LoadingDots';

const sizeOptions = {
    sm: 'sm',
    lg: 'lg',
    '': 'default'
};

const component = () => (
    <LoadingDots
        size={select('Size', sizeOptions, '')}
        whiteDots={boolean('White Dots', false)}
        className={text('ClassName', '-p-a-5')}
        style={object('Styles', {})}
    />
);

export default [readme, component];
