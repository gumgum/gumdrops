/* globals mount */
import React from 'react';
import Well from '../../components/molecules/Well';

const defaultProps = {
    text: 'Foo',
    context: 'primary',
    className: '',
    style: { width: 100 }
};

describe('Expect <Well>', () => {
    it('to render', () => {
        const wrapper = mount(<Well {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render with a button', () => {
        const props = {
            ...defaultProps,
            button: false,
            callback: () => {}
        };
        const wrapper = mount(<Well {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
