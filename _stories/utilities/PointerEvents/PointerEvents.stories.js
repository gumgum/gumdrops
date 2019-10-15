import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import mdx from './PointerEvents.mdx';
import Button from '../../../components/atoms/Button';

const options = arrToObjOptions(['-pointer-events--auto', '-pointer-events--none']);

export default {
    title: 'Utilities/Pointer Events',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div>
        <Button
            onClick={action('Clicked')}
            className={select('Options', options, '-pointer-events--auto')}>
            Click me
        </Button>
    </div>
);
