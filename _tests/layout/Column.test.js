/* globals mount */
import React from 'react';
import Column from '../../components/layout/Column';

describe('Expect <Column>', () => {
    it('to render', () => {
        const props = {
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2
        };

        const wrapper = mount(
            <Column {...props}>
                <div>Content</div>
            </Column>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
