import React from 'react';
import { number } from '@storybook/addon-knobs';

import readme from './README.md';
import Column from '../../../components/layout/Column';
import Row from '../../../components/layout/Row';

const component = () => (
    <Row>
        <Column
            xs={number('Extra Small')}
            sm={number('Small')}
            md={number('Medium', 6)}
            lg={number('Large')}
            xl={number('Extra large')}>
            column a
        </Column>
        <Column
            xs={number('Extra Small')}
            sm={number('Small')}
            md={number('Medium', 6)}
            lg={number('Large')}
            xl={number('Extra large')}>
            column b
        </Column>
    </Row>
);

export default [readme, component];
