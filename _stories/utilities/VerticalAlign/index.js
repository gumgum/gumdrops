import React from 'react';
import { selectV2 as select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import readme from './README.md';

const optionsNoDefault = arrToObjOptions([
    '-va-sub',
    '-va-super',
    '-va-top',
    '-va-middle',
    '-va-bottom',
    '-va-text-top',
    '-va-text-bottom'
]);

const options = { ...optionsNoDefault, '': 'None' };

const component = () => (
    <div>
        Hello, <span className={select('Options', options, '')}>friend</span>
    </div>
);

export default [readme, component];
