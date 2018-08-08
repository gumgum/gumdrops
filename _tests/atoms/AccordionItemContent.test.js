/* globals mount */
import React from 'react';
import AccordionItemContent from '../../components/atoms/AccordionItemContent';

describe('Expect <AccordionItemContent>', () => {
    it('to render', () => {
        const props = {
            className: 'foo',
            size: 'xs',
            context: 'danger'
        };
        const wrapper = mount(
            <AccordionItemContent {...props}>
                <div>foo</div>
            </AccordionItemContent>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
