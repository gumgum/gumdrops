import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import mdx from './UserSelect.mdx';

const options = {
    None: '',
    '-user-select--none': '-user-select--none'
};

export default {
    title: 'Utilities/User Select',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <span className={select('Options', options, '-user-select--none')}>
        Text that cannot be selected if <code className="gds-text--code">-user-select-none</code>
    </span>
);
