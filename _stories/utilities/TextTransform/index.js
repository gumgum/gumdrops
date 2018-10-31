import React from 'react';
import { select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import readme from './README.md';

const optionsNoDefault = arrToObjOptions(['-text-tr-up', '-text-tr-low', '-text-tr-cap']);

const options = { ...optionsNoDefault, None: '' };

const component = () => <div className={select('Options', options, '')}>Hello</div>;

export default [readme, component];
