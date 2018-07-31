/* globals mount */
import React from 'react';
import Row from '../../components/layout/Row';

describe('Expect <Row>', () => {
    it('to render', () => {
        const props = {
            className: 'cool-stuff'
        };
        const wrapper = mount(
            <Row {...props}>
                <div>Content</div>
            </Row>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
