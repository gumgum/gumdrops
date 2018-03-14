import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Card from '../../../components/molecules/Card';
import CardImage from '../../../components/molecules/CardImage';
import CardBlock from '../../../components/molecules/CardBlock';

const cardOptions = {
    white: 'white',
    underlined: 'underlined',
    'underlined-secondary': 'underlined-secondary',
    '': 'No Value',
};

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '': 'No Value',
};

const component = () => (
    <div>
        <Card
            option={optionalSelect('Option', cardOptions, '')}
            size={optionalSelect('Size', sizeOptions, '')}
            className={text('ClassName', '')}
            style={object('Style', {})}>
            <CardBlock>
                <p>Content in a plain Card.</p>
            </CardBlock>
        </Card>
        <Card
            option={optionalSelect('Option', cardOptions, '')}
            size={optionalSelect('Size', sizeOptions, '')}
            className={text('ClassName', '')}
            style={object('Style', {})}>
            <CardBlock>
                <p>Content in a plain CardBlock.</p>
            </CardBlock>
            <CardBlock option="divide-top">
                <p>Content in a CardBlock with a top divider.</p>
            </CardBlock>
        </Card>
        <Card
            option={optionalSelect('Option', cardOptions, '')}
            size={optionalSelect('Size', sizeOptions, '')}
            className={text('ClassName', '')}
            style={object('Style', {})}>
            <CardImage url="https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png" />
            <CardBlock option="divide-top">
                <p>Card with a CardImage and a CardBlock.</p>
            </CardBlock>
        </Card>
    </div>
);

export default [readme, component];
