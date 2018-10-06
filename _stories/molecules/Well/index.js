import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Well from '../../../components/molecules/Well';

const contextOptions = {
    'No Value': '',
    success: 'success',
    warning: 'warning',
    info: 'info',
    danger: 'danger'
};

const component = () => (
    <Well
        text={text('Label', 'Default Well')}
        context={optionalSelect('Context', contextOptions, '')}
        button={boolean('Button', false)}
        callback={action('well_closed')}
        className={text('ClassName', '')}
        style={object('Style', {})}
    />
);

export default [readme, component];
