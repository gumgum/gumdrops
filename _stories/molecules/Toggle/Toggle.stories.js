import React from 'react';
import { withKnobs, select, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import mdx from './Toggle.mdx';
import Toggle from '../../../components/molecules/Toggle';

const options = {
    checkbox: 'checkbox',
    radio: 'radio'
};

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    'No Value': ''
};

export default {
    component: Toggle,
    title: 'Molecules/Toggle',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Toggle
        label={text('Label', 'Default Toggle')}
        type={select('Type', options, 'checkbox')}
        size={optionalSelect('Size', sizeOptions, '')}
        className={text('ClassName', '')}
        style={object('Style', {})}
        onChange={action('toggle_checked')}
        onText={text('OnText', '')}
        offText={text('OffText', '')}
    />
);
