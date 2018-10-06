import React from 'react';
import { selectV2 as select } from '@storybook/addon-knobs';

import readme from './README.md';

const options = {
    None: '',
    '-user-select--none': '-user-select--none'
};

const component = () => (
    <span className={select('Options', options, '-user-select--none')}>
        Text that cannot be selected if <code className="gds-text--code">-user-select-none</code>
    </span>
);

export default [readme, component];
