/* globals mount */
import React from 'react';
import LayoutContainer from '../../components/layout/LayoutContainer';

describe('Expect <LayoutContainer>', () => {
    it('to render', () => {
        const props = {
            className: 'cool-stuff'
        };
        const wrapper = mount(
            <LayoutContainer {...props}>
                <div>Content</div>
            </LayoutContainer>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('to render as full width', () => {
        const props = {
            className: 'cool-stuff',
            fullWidth: true
        };
        const wrapper = mount(
            <LayoutContainer {...props}>
                <div>Content</div>
            </LayoutContainer>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
