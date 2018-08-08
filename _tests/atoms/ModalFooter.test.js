/* globals mount */
import React from 'react';
import ModalFooter from '../../components/atoms/ModalFooter';

const defaultProps = {
    className: 'modal-class',
    style: { width: '100px' }
};

describe('Expect <ModalFooter>', () => {
    it('to render', () => {
        const wrapper = mount(
            <ModalFooter {...defaultProps}>
                <div>My modal content</div>
            </ModalFooter>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
