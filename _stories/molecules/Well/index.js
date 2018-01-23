import React from 'react';
import { select, boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Well from '../../../components/molecules/Well';

const contextOptions = {
    '': 'default',
    success: 'success',
    warning: 'warning',
    info: 'info',
    danger: 'danger'
};

const component = () => (
    <Well
        text={text('Label', 'Default Well')}
        context={select('Context', contextOptions, '')}
        button={boolean('Button', false)}
        callback={action('well_closed')}
        className={text('ClassName', '')}
        style={object('Style', {})}
    />
);

export default [readme, component];
