import React from 'react';
import { text } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from './README.md';

import Accordion from '../../../components/molecules/Accordion';
import AccordionItem from '../../../components/atoms/AccordionItem';
import AccordionItemContent from '../../../components/atoms/AccordionItemContent';

const sizeOptions = {
    sm: 'sm',
    'No Value': ''
};

const contextOptions = {
    dark: 'dark',
    white: 'white',
    'No Value': ''
};

const component = () => (
    <Accordion
        size={optionalSelect('Size', sizeOptions, '')}
        context={optionalSelect('Context', contextOptions, '')}
        className={text('Class', '')}>
        <AccordionItem label={text('Item Label 1', 'Item 1')}>
            <AccordionItemContent>Content 1</AccordionItemContent>
        </AccordionItem>
        <AccordionItem label={text('Item Label 2', 'Item 2')}>
            <AccordionItemContent>Content 2</AccordionItemContent>
        </AccordionItem>
        <AccordionItem label={text('Item Label 3', 'Item 3')}>
            <AccordionItemContent>Content 3</AccordionItemContent>
            <Accordion
                size={optionalSelect('Size', sizeOptions, '')}
                context={optionalSelect('Context', contextOptions, '')}>
                <AccordionItem label={text('Nested Item Label 1', 'Nested Item 1')}>
                    <AccordionItemContent>Nested Content</AccordionItemContent>
                </AccordionItem>
            </Accordion>
        </AccordionItem>
    </Accordion>
);

export default [readme, component];
