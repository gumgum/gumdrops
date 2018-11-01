import React from 'react';
import { select } from '@storybook/addon-knobs';

import readme from './README.md';
import arrToObjOptions from '../../../components/utils/arrToObjOptions';

const divStyle = {
    width: '100px',
    height: '100px'
};

const divBorderStyle = {
    width: '100px',
    height: '100px',
    border: '2px solid'
};

const component = () => (
    <div>
        <div
            style={divStyle}
            className={select('Background Options', bgOptions, '-color-bg-pri')}
        />
        <div
            style={divBorderStyle}
            className={select('Border Options', bdOptions, '-color-bd-sec')}
        />
        <div className={select('Text Options', textOptions, '-color-tx-ter')}>
            You can also attach <code className="gds-text--code">-lt-1</code> through{' '}
            <code className="gds-text--code">-lt-4</code> or{' '}
            <code className="gds-text--code">-dk-1</code> through{' '}
            <code className="gds-text--code">-dk-4</code> to any of the options. These are not shown
            in the knobs because there are too many.
        </div>
    </div>
);

const bgOptions = arrToObjOptions([
    '-color-bg-pri',
    '-color-bg-sec',
    '-color-bg-ter',
    '-color-bg-suc',
    '-color-bg-war',
    '-color-bg-dan',
    '-color-bg-inf',
    '-color-bg-gold',
    '-color-bg-blue',
    '-color-bg-red',
    '-color-bg-green',
    '-color-bg-purple',
    '-color-bg-orange',
    '-color-bg-magenta',
    '-color-bg-dkblue',
    '-color-bg-dkred',
    '-color-bg-dkgreen',
    '-color-bg-dkgold',
    '-color-bg-white'
]);

const bdOptions = arrToObjOptions([
    '-color-bd-pri',
    '-color-bd-sec',
    '-color-bd-ter',
    '-color-bd-suc',
    '-color-bd-war',
    '-color-bd-dan',
    '-color-bd-inf',
    '-color-bd-gold',
    '-color-bd-blue',
    '-color-bd-red',
    '-color-bd-green',
    '-color-bd-purple',
    '-color-bd-orange',
    '-color-bd-magenta',
    '-color-bd-dkblue',
    '-color-bd-dkred',
    '-color-bd-dkgreen',
    '-color-bd-dkgold',
    '-color-bd-white'
]);

const textOptions = arrToObjOptions([
    '-color-tx-pri',
    '-color-tx-sec',
    '-color-tx-ter',
    '-color-tx-suc',
    '-color-tx-war',
    '-color-tx-dan',
    '-color-tx-inf',
    '-color-tx-gold',
    '-color-tx-blue',
    '-color-tx-red',
    '-color-tx-green',
    '-color-tx-purple',
    '-color-tx-orange',
    '-color-tx-magenta',
    '-color-tx-dkblue',
    '-color-tx-dkred',
    '-color-tx-dkgreen',
    '-color-tx-dkgold',
    '-color-tx-white'
]);

export default [readme, component];
