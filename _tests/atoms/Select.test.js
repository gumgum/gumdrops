/* globals mount */
import React from 'react';
import Select from '../../components/atoms/Select';

const defaultProps = {
    className: 'modal-class',
    context: 'success',
    size: 'lg',
    text: '100',
    options: [
        {
            value: 'foo',
            name: 'Foot'
        },
        {
            value: 'woo',
            name: 'Woot'
        }
    ]
};

describe('Expect <Select>', () => {
    it('to render', () => {
        const wrapper = mount(<Select {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
