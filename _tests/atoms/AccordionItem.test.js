/* globals mount */
import React from 'react';
import AccordionItem from '../../components/atoms/AccordionItem';

describe('Expect <AccordionItem>', () => {
    it('to render', () => {
        const props = {
            className: 'foo',
            label: 'Foo!',
            size: 'xs',
            context: 'danger'
        };
        const wrapper = mount(
            <AccordionItem {...props}>
                <div>foo</div>
            </AccordionItem>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
