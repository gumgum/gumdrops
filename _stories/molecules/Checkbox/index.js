import React from 'react';
import { text, boolean, select, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import FormGroup from '../../../components/molecules/FormGroup';
import Checkbox from '../../../components/molecules/Checkbox';

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    '': 'default'
};

const component = () => (
    <FormGroup>
        <Checkbox
            label={ text('Label', 'party parrots') }
            size={ select('Size', sizeOptions, '') }
            className={ text('ClassName', '') }
            style={ object('Style', {}) }
            onChange={ action('checkbox_checked') }
        />
    </FormGroup>
);

export default [readme, component];
