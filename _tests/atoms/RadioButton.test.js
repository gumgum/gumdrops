import renderer from 'react-test-renderer';
import React from 'react';
import RadioButton from '../../components/atoms/RadioButton';

const defaultProps = {
    label: 'Cool',
    value: 'cool',
    className: 'custom-class',
    context: 'success',
    name: 'radio-buttons',
    onBlur: jest.fn(),
    onChange: jest.fn()
};

test('Expect <RadioButton> to render properly', () => {
    const tree = renderer.create(<RadioButton {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});
