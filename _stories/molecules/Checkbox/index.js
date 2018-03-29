import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import FormGroup from '../../../components/molecules/FormGroup';
import Checkbox from '../../../components/molecules/Checkbox';

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    '': 'No Value',
};

const component = () => (
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

export default [readme, component];
