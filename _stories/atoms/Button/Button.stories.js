import React from 'react';
import { text, select, boolean, object, withKnobs } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import mdx from './Button.mdx';
import Button from '../../../components/atoms/Button';

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    'No Value': ''
};

const contextOptions = {
    default: 'default',
    outline: 'outline',
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    info: 'info',
    danger: 'danger'
};

export default {
    component: Button,
    title: 'Atoms/Button',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Button
        type={text('Type', 'button')}
        size={optionalSelect('Size', sizeOptions, '')}
        context={select('Context', contextOptions, 'default')}
        isGroup={boolean('isGroup', false)}
        isBlock={boolean('isBlock', false)}
        disabled={boolean('disabled', false)}
        onClick={action('button_clicked')}
        className={text('ClassName', '')}
        style={object('Style', {})}>
        <i className="fa fa-check -m-r-2" />
        Great Success
    </Button>
);
