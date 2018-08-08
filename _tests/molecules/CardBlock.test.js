/* globals mount */
import React from 'react';
import CardBlock from '../../components/molecules/CardBlock';

const defaultProps = {
    option: 'divide-top',
    className: 'custom',
    style: { width: 120 }
};

describe('Expect <CardBlock>', () => {
    it('to render', () => {
        const wrapper = mount(
            <CardBlock {...defaultProps}>
                <div>Foo</div>
            </CardBlock>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
