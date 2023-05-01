import renderer from 'react-test-renderer';
import React from 'react';
import ModalForm from '../../components/atoms/ModalForm';

const defaultProps = {
    className: 'modal-class',
    style: { width: '100px' }
};

test('Expect <ModalForm> to render properly', () => {
    const tree = renderer
        .create(
            <ModalForm {...defaultProps}>
                <div>My modal content</div>
            </ModalForm>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
