import renderer from 'react-test-renderer';
import React from 'react';
import Checkbox from '../../components/molecules/Checkbox';

const defaultProps = {
    label: 'Check Me',
    size: 'xs',
    className: 'custom-class',
    style: { width: 140 }
};

test('Expect <CardImage> to render properly', () => {
    const tree = renderer.create(<Checkbox {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <CardImage> to render with other props', () => {
    const props = {
        ...defaultProps,
        onChange: jest.fn(),
        value: 'foo'
    };
    const tree = renderer.create(<Checkbox {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
