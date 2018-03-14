import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import TextArea from '../../../components/atoms/TextArea';

const sizeOptions = {
    '': 'No Value',
    xs: 'xs',
    sm: 'sm',
    lg: 'lg'
};

const resizeOptions = {
    '': 'No Value',
    'resize-h': 'resize-h',
    'resize-v': 'resize-v',
    'no-resize': 'no-resize'
};

const component = () => (
    <TextArea
        size={optionalSelect('Size', sizeOptions, '')}
        resize={optionalSelect('Resize', resizeOptions, '')}
        value={text('Content', 'Content goes here')}
        placeholder={text('Placeholder', 'This is a placeholder')}
        onChange={action('TextInput changed')}
        className={text('Classname', '')}
        style={object('Style', {})}
    />
);

export default [readme, component];
