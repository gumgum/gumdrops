import React from 'react';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import mdx from './Accordion.mdx';
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

export default {
    component: Accordion,
    title: 'Molecules/Accordion',
    decorators: [withKnobs],
    parameters: {
        component: Accordion,
        subcomponents: { AccordionItem, AccordionItemContent },
        docs: { page: mdx }
    }
};

export const Default = () => (
    <Accordion
        size={optionalSelect('Size', sizeOptions, '')}
        context={optionalSelect('Context', contextOptions, '')}
        className={text('Class', '')}>
        <AccordionItem label="I'm locked open" isLocked isOpen>
            <AccordionItemContent>Locked Content</AccordionItemContent>
        </AccordionItem>
        <AccordionItem label={text('Item Label 1', 'Item 1')}>
            <AccordionItemContent>Content 1</AccordionItemContent>
        </AccordionItem>
        <AccordionItem label={text('Item Label 2', 'Item 2')}>
            <AccordionItemContent>Content 2</AccordionItemContent>
        </AccordionItem>
        <AccordionItem label={text('Item Label 3', 'Item 3')}>
            <AccordionItemContent>Content 3</AccordionItemContent>
            <Accordion>
                <AccordionItem label="Nested Item">
                    <AccordionItemContent>Nested Content</AccordionItemContent>
                </AccordionItem>
            </Accordion>
        </AccordionItem>
    </Accordion>
);
