import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './NumberCircle.mdx';
import NumberCircle from '../../../components/atoms/NumberCircle';

const contextOptions = {
    'No Value': '',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    white: 'white'
};

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    xl: 'xl',
    'No Value': ''
};

export default {
    component: NumberCircle,
    title: 'Atoms/NumberCircle',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div style={{ minHeight: 100 }}>
        <NumberCircle
            text={text('Text', '1')}
            size={optionalSelect('Size', sizeOptions, '')}
            context={optionalSelect('Context', contextOptions, '')}
            className={text('ClassName', '')}
            style={object('Styles', {})}
        />
    </div>
);
