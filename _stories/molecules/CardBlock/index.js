import React from 'react';
import { select, text, object } from '@storybook/addon-knobs';

import readme from './README.md';
import Card from '../../../components/molecules/Card';
import CardBlock from '../../../components/molecules/CardBlock';

const options = {
    'divide-top': 'divide-top',
    'divide-bottom': 'divide-bottom',
    '': 'default'
};

const component = () => (
    <Card>
        <CardBlock
            option={select('Option', options, '')}
            className={text('ClassName', '')}
            style={object('Style', {})}>
            <p>Content in a CardBlock.</p>
        </CardBlock>
    </Card>
);

export default [readme, component];
