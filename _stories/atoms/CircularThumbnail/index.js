import React from 'react';
import { text, object, select } from '@storybook/addon-knobs';
import CircularThumbnail from '../../../components/atoms/CircularThumbnail';
import readme from './README.md';

const circularThumbnailSizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    xl: 'xl',
    '': 'default'
};

const circularThumbnailContexts = {
    '': 'default',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    white: 'white'
};

const component = () => (
    <CircularThumbnail
        context={select('Context', circularThumbnailContexts, '')}
        size={select('Size', circularThumbnailSizeOptions, '')}
        src={text('Image Path', 'https://ds.gumgum.com/images/ken.png')}
        alt={text('Alt Text', 'Ken Weiner')}
        className={text('ClassName', '')}
        style={object('Styles', {})}
    />
);

export default [readme, component];
