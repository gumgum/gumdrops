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
        className={ text('Classes', '') }
        onClick={ action('tag_click') }
        hasOption={ boolean('Has Option', false) }
        optionIcon={ text('Option Icon', 'bt-times') }
        small={ boolean('Small', false) }
        style={ object('Style', {}) }
        text={ text('Text', 'Sample Text') }
        value={ text('Value', '0') }
    />
);

export default [readme, component];
