import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';
import Badge from '../../../components/atoms/Badge';

const options = {
    '': 'No Value',
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

const component = () => (
    <Badge
        text={text('Text', '2')}
        context={optionalSelect('Context', options, '')}
        empty={boolean('Empty', false)}
        className={text('ClassName', '')}
        style={object('Style', {})}
    />
);

export default [readme, component];
