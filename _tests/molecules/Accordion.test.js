/* globals mount, shallow */
import React from 'react';
import Accordion from '../../components/molecules/Accordion';
import AccordionItem from '../../components/atoms/AccordionItem';

describe('Expect <Accordion>', () => {
    it('to render', () => {
        const props = {
            context: 'primary',
            size: 'sm',
            className: 'cool-stuff'
        };
        const wrapper = mount(
            <Accordion {...props}>
                <AccordionItem label="Accordion Item 1" />
                <AccordionItem label="Accordion Item 2" />
                <AccordionItem label="Accordion Item 3" />
            </Accordion>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('to render expanded', () => {
        const props = {
            initialAllOpen: true
        };
        const wrapper = mount(
            <Accordion {...props}>
                <AccordionItem label="Accordion Item 1" />
                <AccordionItem label="Accordion Item 2" />
                <AccordionItem label="Accordion Item 3" />
            </Accordion>
        );
        wrapper.find('AccordionItem li').forEach(item => {
            expect(item.hasClass('gds-accordion__item--active')).toBe(true);
        });
    });

    it('to render locked', () => {
        const wrapper = mount(
            <Accordion>
                <AccordionItem label="Accordion Item 1" isLocked />
                <AccordionItem label="Accordion Item 2" isLocked />
                <AccordionItem label="Accordion Item 3" isLocked />
            </Accordion>
        );

        wrapper.find('AccordionItem li').forEach(item => {
            expect(item.find('.gds-accordion__item-icon').length).toBe(0);
        });
    });
});
