import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import mdx from './Column.mdx';
import Column from '../../../components/layout/Column';
import Row from '../../../components/layout/Row';
import Card from '../../../components/molecules/Card';

export default {
    component: Column,
    title: 'Layout/Column',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
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
