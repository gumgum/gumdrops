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

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    '': 'default'
};

const component = () => (
    <Tag
        className={text('Classes', '')}
        context={select('Context', contextOptions, 'normal')}
        hasOption={boolean('Has Option', true)}
        onClick={action('tag_click')}
        onOptionClick={action('option_click')}
        optionIcon={text('Option Icon', 'bt-times')}
        optionLabel={text('Option Label', 'Delete Tag')}
        size={select('Size', sizeOptions, 'normal')}
        style={object('Style', {})}
        text={text('Text', 'Sample Text')}
    />
);

export default [readme, component];
