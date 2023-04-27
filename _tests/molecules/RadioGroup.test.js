import renderer from 'react-test-renderer';
import React from 'react';
import RadioGroup from '../../components/molecules/RadioGroup';

const defaultProps = {
    options: [
        {
            label: 'Cool',
            value: 'cool'
        }
    ],
    className: 'custom-class',
    context: 'success',
    name: 'radio-buttons',
    onBlur: jest.fn(),
    onChange: jest.fn(),
    size: 'sm'
};

test('Expect <RadioGroup> to render properly', () => {
    const tree = renderer.create(<RadioGroup {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});
