import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Tag from '../../../components/atoms/Tag';

const contextOptions = {
    normal: 'normal',
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger'
};

const component = () => (
    <Tag
        context={ select('Context', contextOptions, 'normal') }
        text={ text('Text', 'Sample Text') }
        hasOption={ boolean('Has Option', false) }
        optionIcon={ text('Option Icon', 'bt-times') }
        small={ boolean('Small', false) }
        onClick={ action('tag_click') }
        className={ text('Classes', '') }
        style={ object('Style', {}) }
    />
);

export default [readme, component];
