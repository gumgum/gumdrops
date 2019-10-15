import React from 'react';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './LoadingDots.mdx';
import LoadingDots from '../../../components/atoms/LoadingDots';

const sizeOptions = {
    sm: 'sm',
    lg: 'lg',
    'No Value': ''
};

export default {
    component: LoadingDots,
    title: 'Atoms/LoadingDots',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <LoadingDots
        size={optionalSelect('Size', sizeOptions, '')}
        whiteDots={boolean('White Dots', false)}
        className={text('ClassName', '-p-a-5')}
        style={object('Styles', {})}
    />
);
