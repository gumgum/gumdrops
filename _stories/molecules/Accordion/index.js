import React from 'react';
import { boolean, select, text, object } from '@storybook/addon-knobs';
import readme from './README.md';

import Accordion from '../../../components/molecules/Accordion';
import AccordionItem from '../../../components/atoms/AccordionItem';
import AccordionItemContent from '../../../components/atoms/AccordionItemContent';

const sizeOptions = {
    'sm': 'sm',
    '': 'default'
};

const contextOptions = {
    dark: 'dark',
    white: 'white',
    '': 'default'
};

const component = () => (
    <div>
        <Accordion
            size={ select('Size', sizeOptions, '') }
            context={ select('Context', contextOptions, '') }
            className={ text('Class', '') }
        >
            <AccordionItem label={ text('Item Label 1', 'Item 1') }>
                <AccordionItemContent>
                    Content
                </AccordionItemContent>
            </AccordionItem>
            <AccordionItem label={ text('Item Label 2', 'Item 2') }>
                <AccordionItemContent>
                    Content
                </AccordionItemContent>
            </AccordionItem>
        </Accordion>
    </div>
);

export default [readme, component];
