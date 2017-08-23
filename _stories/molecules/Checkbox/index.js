import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import FormGroup from '../../../components/molecules/FormGroup';
import Checkbox from '../../../components/molecules/Checkbox';

const contextOptions = {
    up: 'up',
    same: 'same',
    down: 'down'
};

const component = () => (
    <FormGroup>
        <Checkbox
            label={ text('Label', 'party parrots') }
            onChange={ action('checkbox_checked') }
        />
    </FormGroup>
);

export default [readme, component];
