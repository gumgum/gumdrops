import React from 'react';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react';

import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './Badge.mdx';
import Badge from '../../../components/atoms/Badge';

const options = {
    'No Value': '',
    inverse: 'inverse',
    success: 'success',
    'success-inverse': 'success-inverse',
    info: 'info',
    'info-inverse': 'info-inverse',
    warning: 'warning',
    'warning-inverse': 'warning-inverse',
    danger: 'danger',
    'danger-inverse': 'danger-inverse'
};

export default {
    component: Badge,
    title: 'Atoms/Badge',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Badge
        text={text('Text', '2')}
        context={optionalSelect('Context', options, '')}
        empty={boolean('Empty', false)}
        className={text('ClassName', '')}
        style={object('Style', {})}
    />
);
