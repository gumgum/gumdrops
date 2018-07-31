/* globals mount */
import React from 'react';
import Card from '../../components/molecules/Card';

const defaultProps = {
    option: 'underlined-secondary',
    size: 'sm',
    className: 'custom',
    style: { width: 120 }
};

describe('Expect <Card>', () => {
    it('to render', () => {
        const wrapper = mount(
            <Card {...defaultProps}>
                <div>Foo</div>
            </Card>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
