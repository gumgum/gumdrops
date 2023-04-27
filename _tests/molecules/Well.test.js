import renderer from 'react-test-renderer';
import React from 'react';
import Well from '../../components/molecules/Well';

const defaultProps = {
    text: 'Foo',
    context: 'primary',
    className: '',
    style: { width: 100 }
};

test('Expect <Well> to render properly', () => {
    const tree = renderer.create(<Well {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Well> to render with a button', () => {
    const props = {
        ...defaultProps,
        button: false,
        callback: jest.fn()
    };
    const tree = renderer.create(<Well {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
