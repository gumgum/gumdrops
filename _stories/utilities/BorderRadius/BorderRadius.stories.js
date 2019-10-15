import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

import mdx from './BorderRadius.mdx';
import { colors } from '../constants';

const optionsNoDefault = arrToObjOptions([
    '-bor-rad-a-0',
    '-bor-rad-a-1',
    '-bor-rad-tl-0',
    '-bor-rad-tl-1',
    '-bor-rad-tr-0',
    '-bor-rad-tr-1',
    '-bor-rad-bl-0',
    '-bor-rad-bl-1',
    '-bor-rad-br-0',
    '-bor-rad-br-1',
    '-bor-rad-t-0',
    '-bor-rad-t-1',
    '-bor-rad-r-0',
    '-bor-rad-r-1',
    '-bor-rad-b-0',
    '-bor-rad-b-1',
    '-bor-rad-l-0',
    '-bor-rad-l-1'
]);

const options = { ...optionsNoDefault, None: '' };

const divStyle = {
    width: '100%',
    height: '200px',
    border: `1px solid ${colors.primary}`,
    padding: '10px'
};

export default {
    title: 'Utilities/Border Radius',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <div style={divStyle} className={select('Options', options, '-bor-rad-a-0')}>
        Note this is a really subtle change.
    </div>
);
