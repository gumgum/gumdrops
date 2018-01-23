import React from 'react';
import { select, text, object } from '@storybook/addon-knobs';

import readme from './README.md';
import Card from '../../../components/molecules/Card';
import CardImage from '../../../components/molecules/CardImage';

const options = {
    top: 'top',
    bottom: 'bottom'
};

const sizeOptions = {
    '': 'default',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
};

const component = () => (
    <Card>
        <CardImage
            url={text(
                'Image URL',
                'https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png'
            )}
            option={select('Option', options, '')}
            size={select('Size', sizeOptions, '')}
            className={text('ClassName', '')}
            style={object('Style', {})}
        />
    </Card>
);

export default [readme, component];
