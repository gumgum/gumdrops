import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Accordion } from 'stories/Accordion';
import { AccordionItem } from 'stories/AccordionItem';
import { AccordionItemContent } from 'stories/AccordionItemContent';

describe('Accordion', () => {
    it('renders', async () => {
        const { container } = render(
            <Accordion>
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
        screen.getByRole('list');
        screen.getByText('Locked Content');
        user.click(screen.getByText("I'm locked and open"));
        screen.getByText('Locked Content');
        const item1 = screen.getByRole('button', { name: 'Item 1' });
        const item2 = screen.getByRole('button', { name: 'Item 2' });
        const item3 = screen.getByRole('button', { name: 'Item 3' });
        expect(container.firstChild).toMatchSnapshot();
        // NOTE: these tests are commented out because of this issue:
        // https://github.com/testing-library/dom-testing-library/issues/875
        //expect(within(item1).queryByText('Content 1')).toBe(null);
        //expect(within(item2).queryByText('Content 2')).toBe(null);
        //expect(within(item3).queryByText('Content 3')).toBe(null);
        //expect(within(item3).queryByText('Nested Content')).toBe(null);
        user.click(item1);
        user.click(item2);
        user.click(item3);
        screen.getByText('Content 1');
        screen.getByText('Content 2');
        screen.getByText('Content 3');
        screen.getByText('Nested Content');
        expect(container.firstChild).toMatchSnapshot();
        user.click(item1);
        user.click(item2);
        user.click(item3);
        user.click(container);
        expect(container.firstChild).toMatchSnapshot();
        //expect(within(item1).queryByText('Content 1')).toBe(null);
        //expect(within(item2).queryByText('Content 2')).toBe(null);
        //expect(within(item3).queryByText('Content 3')).toBe(null);
        //expect(within(item3).queryByText('Nested Content')).toBe(null);
        user.tab();
        user.tab();
        expect(item2).toHaveFocus();
        user.type(item2, '{enter}');
        screen.getByText('Content 2');
        user.type(item2, '{space}');
        //expect(within(item2).queryByText('Content 2')).toBe(null);
        expect(container.firstChild).toMatchSnapshot();
    });
});
