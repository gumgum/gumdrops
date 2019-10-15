import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import mdx from './TextTransform.mdx';

const optionsNoDefault = arrToObjOptions(['-text-tr-up', '-text-tr-low', '-text-tr-cap']);

const options = { ...optionsNoDefault, None: '' };

export default {
    title: 'Utilities/Text Transform',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div className={select('Options', options, '-text-tr-cap')}>Hello</div>
);
