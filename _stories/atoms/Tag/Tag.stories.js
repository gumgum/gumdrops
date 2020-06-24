import React from 'react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import mdx from './Tag.mdx';
import Tag from '../../../components/atoms/Tag';

const contextOptions = {
    normal: 'normal',
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    'No Value': ''
};

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    'No Value': ''
};

export default {
    component: Tag,
    title: 'Atoms/Tag',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Tag
        context={optionalSelect('Context', contextOptions, 'primary')}
        className={text('Classes', '')}
        hasOption={boolean('Has Option', true)}
        onClick={action('tag_click')}
        onOptionClick={action('option_click')}
        optionIcon={text('Option Icon', 'bt-times')}
        optionLabel={text('Option Label', 'Delete Tag')}
        style={object('Style', {})}
        text={text('Text', 'Sample Text')}
        size={optionalSelect('Size', sizeOptions, '')}
    />
);
