import React from 'react';
import { object, text } from '@storybook/addon-knobs';

import readme from './README.md';
import Row from '../../../components/layout/Row';

const component = () => (
    <Row
        className={ text('ClassName', '') }
        style={ object('style', { border: '1px dashed red' }) }>
        Example
    </Row>
);

export default [readme, component];
