import renderer from 'react-test-renderer';
import React from 'react';
import LoadingDots from '../../components/atoms/LoadingDots';

const defaultProps = {
    className: 'cool-class',
    size: 'lg',
    style: { width: '100px' }
};

test('Expect <LoadingDots> to render properly', () => {
    const tree = renderer.create(<LoadingDots {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <LoadingDots> to render properly with empty', () => {
    const props = {
        ...defaultProps,
        isWhite: true
    };

    const tree = renderer.create(<LoadingDots {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
