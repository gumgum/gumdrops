import renderer from 'react-test-renderer';
import React from 'react';
import Button from '../../components/atoms/Button';

const defaultProps = {
    isGroup: false,
    isBlock: false,
    size: 'sm',
    onClick: jest.fn(),
    text: 'This is text',
    context: 'danger',
    className: 'foo-class',
    style: {
        width: '1000px'
    },
    onBlur: jest.fn()
};

test('Expect <Button> to render properly', () => {
    const tree = renderer.create(<Button {...defaultProps}>My Cool Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Button> to render properly as blocked', () => {
    const props = {
        ...defaultProps,
        isBlock: true
    };
    const tree = renderer.create(<Button {...props}>My Cool Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
});
