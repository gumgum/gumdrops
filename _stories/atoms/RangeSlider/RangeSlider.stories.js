import React from 'react';
import { withKnobs, text, object, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import mdx from './RangeSlider.mdx';
import RangeSlider from '../../../components/atoms/RangeSlider';


export default {
    component: RangeSlider,
    title: 'Atoms/RangeSlider',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <RangeSlider
        value={number('Value', '')}
        onChange={action('change')}
        className={text('Classname', '')}
        style={object('Style', {})}
    />
);
