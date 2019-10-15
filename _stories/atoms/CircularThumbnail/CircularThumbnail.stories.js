import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './CircularThumbnail.mdx';
import CircularThumbnail from '../../../components/atoms/CircularThumbnail';

const circularThumbnailSizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    xl: 'xl',
    'No Value': ''
};

const circularThumbnailContexts = {
    'No Value': '',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    white: 'white'
};

export default {
    component: CircularThumbnail,
    title: 'Atoms/CircularThumbnail',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <CircularThumbnail
        context={optionalSelect('Context', circularThumbnailContexts, '')}
        size={optionalSelect('Size', circularThumbnailSizeOptions, '')}
        src={text('Image Path', 'https://ds.gumgum.com/images/ken.png')}
        alt={text('Alt Text', 'Ken Weiner')}
        className={text('ClassName', '')}
        style={object('Styles', {})}
    />
);
