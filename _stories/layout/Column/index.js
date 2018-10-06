import React from 'react';
import { number } from '@storybook/addon-knobs';

import readme from './README.md';
import Column from '../../../components/layout/Column';
import Row from '../../../components/layout/Row';
import Card from '../../../components/molecules/Card';

const component = () => (
    <Row>
        <Column
            xs={number('Extra Small')}
            sm={number('Small')}
            md={number('Medium', 6)}
            lg={number('Large')}
            xl={number('Extra large')}>
            <Card option="underlined" className="-p-a-2">
                column a
            </Card>
        </Column>
        <Column
            xs={number('Extra Small')}
            sm={number('Small')}
            md={number('Medium', 6)}
            lg={number('Large')}
            xl={number('Extra large')}>
            <Card option="underlined" className="-p-a-2">
                column b
            </Card>
        </Column>
    </Row>
);

export default [readme, component];
