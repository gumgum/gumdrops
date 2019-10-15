import React from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs';

import mdx from './Row.mdx';
import Row from '../../../components/layout/Row';

export default {
    component: Row,
    title: 'Layout/Row',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Row className={text('ClassName', '')} style={object('style', { border: '1px dashed red' })}>
        Example
    </Row>
);
