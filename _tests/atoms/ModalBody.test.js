/* globals mount */
import React from 'react';
import ModalBody from '../../components/atoms/ModalBody';

const defaultProps = {
    className: 'modal-class',
    style: { width: '100px' }
};

describe('Expect <ModalBody>', () => {
    it('to render', () => {
        const wrapper = mount(
            <ModalBody {...defaultProps}>
                <div>My modal content</div>
            </ModalBody>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
