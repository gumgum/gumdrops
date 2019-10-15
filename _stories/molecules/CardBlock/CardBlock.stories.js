import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './CardBlock.mdx';
import Card from '../../../components/molecules/Card';
import CardBlock from '../../../components/molecules/CardBlock';

const options = {
    'divide-top': 'divide-top',
    'divide-bottom': 'divide-bottom',
    'No Value': ''
};

export default {
    component: CardBlock,
    title: 'Molecules/CardBlock',
    decorators: [withKnobs],
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Card>
        <CardBlock
            option={optionalSelect('Option', options, '')}
            className={text('ClassName', '')}
            style={object('Style', {})}>
            <p>Content in a CardBlock.</p>
        </CardBlock>
    </Card>
);
