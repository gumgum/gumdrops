import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Accordion, AccordionProps } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { AccordionItemContent } from './AccordionItemContent';

export default {
    title: 'Accordion',
    component: Accordion
} as Meta;

const Template: Story<AccordionProps> = args => (
    <Accordion {...args}>
        <AccordionItem label="I'm locked and open" isLocked isOpen>
            <AccordionItemContent>Locked Content</AccordionItemContent>
        </AccordionItem>
        <AccordionItem label="Item 1">
            <AccordionItemContent>Content 1</AccordionItemContent>
        </AccordionItem>
        <AccordionItem label="Item 2">
            <AccordionItemContent>Content 2</AccordionItemContent>
        </AccordionItem>
        <AccordionItem label="Item 3">
            <AccordionItemContent>Content 3</AccordionItemContent>
            <Accordion>
                <AccordionItem label="Nested Item">
                    <AccordionItemContent>Nested Content</AccordionItemContent>
                </AccordionItem>
            </Accordion>
        </AccordionItem>
    </Accordion>
);

export const Primary = Template.bind({});
Primary.args = {};
