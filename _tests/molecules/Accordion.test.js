/* globals mount */
import React from 'react';
import Accordion from '../../components/molecules/Accordion';

describe('Expect <Accordion>', () => {
    it('to render', () => {
        const props = {
            context: 'primary',
            size: 'sm',
            className: 'cool-stuff'
        };
        const wrapper = mount(
            <Accordion {...props}>
                <li>Accordion Item 1</li>
                <li>Accordion Item 2</li>
                <li>Accordion Item 3</li>
            </Accordion>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
