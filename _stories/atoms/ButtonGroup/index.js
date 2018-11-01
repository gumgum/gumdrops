import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import ButtonGroup from '../../../components/atoms/ButtonGroup';
import Button from '../../../components/atoms/Button';

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    'No Value': ''
};

const component = () => (
    <ButtonGroup
        size={optionalSelect('Size', sizeOptions, '')}
        responsive={boolean('Responsive', false)}
        className={text('ClassName', '')}
        style={object('Style', {})}>
        <Button group context="default">
            Button 1
        </Button>
        <Button group context="primary">
            Button 2
        </Button>
        <Button group context="secondary">
            Button 3
        </Button>
    </ButtonGroup>
);

export default [readme, component];
