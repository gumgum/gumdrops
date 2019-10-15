import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import mdx from './LayoutContainer.mdx';
import Column from '../../../components/layout/Column';
import Card from '../../../components/molecules/Card';
import LayoutContainer from '../../../components/layout/LayoutContainer';
import Row from '../../../components/layout/Row';

export default {
    component: LayoutContainer,
    title: 'Layout/LayoutContainer',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <LayoutContainer
        fullWidth={boolean('Full width', false)}
        onClick={action('layout_container_clicked')}
        className={text('classname')}>
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
