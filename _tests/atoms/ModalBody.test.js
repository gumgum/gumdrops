import renderer from 'react-test-renderer';
import React from 'react';
import ModalBody from '../../components/atoms/ModalBody';

const defaultProps = {
    className: 'modal-class',
    style: { width: '100px' }
};

test('Expect <ModalBody> to render properly', () => {
    const tree = renderer
        .create(
            <ModalBody {...defaultProps}>
                <div>My modal content</div>
            </ModalBody>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
