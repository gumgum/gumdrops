import renderer from 'react-test-renderer';
import React from 'react';
import ModalFooter from '../../components/atoms/ModalFooter';

const defaultProps = {
    className: 'modal-class',
    style: { width: '100px' }
};

test('Expect <ModalFooter> to render properly', () => {
    const tree = renderer
        .create(
            <ModalFooter {...defaultProps}>
                <div>My modal content</div>
            </ModalFooter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
