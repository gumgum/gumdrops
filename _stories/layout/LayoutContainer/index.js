import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Column from '../../../components/layout/Column';
import LayoutContainer from '../../../components/layout/LayoutContainer';
import Row from '../../../components/layout/Row';

const component = () => (
    <LayoutContainer
        fullWidth={ boolean('Full width', false) }
        className={ text('Extra classes') }
        id={ text('Ids') }
        onClick={ action('layout_container_clicked') }>
        <Row>
            <Column md={ 4 }>Example</Column>
            <Column md={ 4 }>Example</Column>
            <Column md={ 4 }>Example</Column>
        </Row>
    </LayoutContainer>
);

export default [readme, component];
