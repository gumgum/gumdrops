import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import LoadingDots from '../../../components/atoms/LoadingDots';

const sizeOptions = {
    sm: 'sm',
    lg: 'lg',
    '': 'No Value'
};

const component = () => (
    <LoadingDots
        size={optionalSelect('Size', sizeOptions, '')}
        whiteDots={boolean('White Dots', false)}
        className={text('ClassName', '-p-a-5')}
        style={object('Styles', {})}
    />
);

export default [readme, component];
