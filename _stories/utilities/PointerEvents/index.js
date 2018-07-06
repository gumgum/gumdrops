import React from 'react';
import { selectV2 as select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import Button from '../../../components/atoms/Button';
import readme from './README.md';

const options = arrToObjOptions(['-pointer-events--auto', '-pointer-events--none']);

const component = () => (
    <div>
        <Button
            onClick={action('Clicked')}
            className={select('Options', options, '-pointer-events--auto')}>
            Click me
        </Button>
    </div>
);

export default [readme, component];
