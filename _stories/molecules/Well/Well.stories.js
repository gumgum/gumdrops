import React from 'react';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import mdx from './Well.mdx';
import Well from '../../../components/molecules/Well';

const contextOptions = {
    'No Value': '',
    success: 'success',
    warning: 'warning',
    info: 'info',
    danger: 'danger'
};

export default {
    component: Well,
    title: 'Molecules/Well',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Well
        text={text('Label', 'Default Well')}
        context={optionalSelect('Context', contextOptions, '')}
        button={boolean('Button', false)}
        callback={action('well_closed')}
        className={text('ClassName', '')}
        style={object('Style', {})}
    />
);
