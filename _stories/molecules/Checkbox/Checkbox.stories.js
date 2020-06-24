import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import mdx from './Checkbox.mdx';
import FormGroup from '../../../components/molecules/FormGroup';
import Checkbox from '../../../components/molecules/Checkbox';

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    'No Value': ''
};

export default {
    component: Checkbox,
    title: 'Molecules/Checkbox',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <FormGroup>
        <Checkbox
            label={text('Label', 'party parrots')}
            size={optionalSelect('Size', sizeOptions, '')}
            className={text('ClassName', '')}
            style={object('Style', {})}
            onChange={action('checkbox_checked')}
        />
    </FormGroup>
);
