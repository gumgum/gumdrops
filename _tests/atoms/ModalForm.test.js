/* globals mount */
import React from 'react';
import ModalForm from '../../components/atoms/ModalForm';

const defaultProps = {
    className: 'modal-class',
    style: { width: '100px' }
};

describe('Expect <ModalForm>', () => {
    it('to render', () => {
        const wrapper = mount(
            <ModalForm {...defaultProps}>
                <div>My form content</div>
            </ModalForm>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
