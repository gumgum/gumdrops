import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import mdx from './VerticalAlign.mdx';

const optionsNoDefault = arrToObjOptions([
    '-va-sub',
    '-va-super',
    '-va-top',
    '-va-middle',
    '-va-bottom',
    '-va-text-top',
    '-va-text-bottom'
]);
const options = { ...optionsNoDefault, None: '' };

export default {
    title: 'Utilities/Vertical Align',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div>
        Hello, <span className={select('Options', options, '-va-sub')}>friend</span>
    </div>
);
