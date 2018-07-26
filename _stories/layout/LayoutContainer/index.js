import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Column from '../../../components/layout/Column';
import Card from '../../../components/molecules/Card';
import LayoutContainer from '../../../components/layout/LayoutContainer';
import Row from '../../../components/layout/Row';

const component = () => (
    <LayoutContainer
        fullWidth={boolean('Full width', false)}
        id={text('Ids')}
        onClick={action('layout_container_clicked')}
        className={text('Extra classes')}>
        <Row>
            <Column md={4}>
                <Card option="underlined" className="-p-a-2">
                    Example
                </Card>
            </Column>

            <Column md={4}>
                <Card option="underlined" className="-p-a-2">
                    Example
                </Card>
            </Column>
            <Column md={4}>
                <Card option="underlined" className="-p-a-2">
                    Example
                </Card>
            </Column>
        </Row>
    </LayoutContainer>
);

export default [readme, component];
