/* globals mount */
import React from 'react';
import NumberCircle from '../../components/atoms/NumberCircle';

const defaultProps = {
    className: 'modal-class',
    context: 'success',
    size: 'lg',
    text: '100',
    style: { width: '100px' }
};

describe('Expect <NumberCircle>', () => {
    it('to render', () => {
        const wrapper = mount(<NumberCircle {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
