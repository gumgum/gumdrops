import React from 'react';
import { boolean, select, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import TextArea from '../../../components/atoms/TextArea';

const sizeOptions = {
    '': 'default',
    xs: 'xs',
    sm: 'sm',
    lg: 'lg'
};

const resizeOptions = {
    '': 'default',
    'resize-h': 'resize-h',
    'resize-v': 'resize-v',
    'no-resize': 'no-resize'
};

const component = () => (
    <TextArea
        size={select('Size', sizeOptions, '')}
        resize={select('Resize', resizeOptions, '')}
        value={text('Content', 'Content goes here')}
        placeholder={text('Placeholder', 'This is a placeholder')}
        onChange={action('TextInput changed')}
        className={text('Classname', '')}
        style={object('Style', {})}
    />
);

export default [readme, component];
