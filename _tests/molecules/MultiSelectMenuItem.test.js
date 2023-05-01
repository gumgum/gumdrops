/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import MultiSelectMenuItem from '../../components/molecules/MultiSelectMenuItem';

const subOptions = [
    { name: 'Lassie', value: 1, selected: false },
    { name: 'Snoopy', value: 2, selected: false },
    { name: 'Toto', value: 3, selected: false },
    { name: 'Brian Griffin', value: 3, selected: false }
];

const defaultProps = {
    callback: jest.fn(),
    index: 1,
    isActive: false,
    name: 'Foo',
    onChange: jest.fn(),
    onClick: jest.fn(),
    selected: false,
    size: 'xs',
    value: 0
};

test('Expect <MultiSelectMenuItem> to render properly', () => {
    const tree = renderer.create(<MultiSelectMenuItem {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <MultiSelectMenuItem> to render properly', () => {
    const tree = renderer.create(<MultiSelectMenuItem {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <MultiSelectMenuItem> to call the onChange prop handler when options change', () => {
    const { getByLabelText } = render(<MultiSelectMenuItem {...defaultProps} />);
    fireEvent.click(getByLabelText(defaultProps.name));
    expect(defaultProps.onChange).toHaveBeenCalledWith({
        index: defaultProps.index,
        value: defaultProps.value,
        selected: !defaultProps.selected,
        options: defaultProps.options
    });
});

test('Expect <MultiSelectMenuItem> to call the onChange prop handler with sub options', () => {
    const props = {
        ...defaultProps,
        subOptions,
        onChange: jest.fn(),
        callback: jest.fn()
    };
    const { getByLabelText } = render(<MultiSelectMenuItem {...props} />);
    fireEvent.click(getByLabelText(defaultProps.name));
    expect(props.onChange).toHaveBeenCalledWith({
        index: props.index,
        value: props.value,
        selected: true,
        options: props.subOptions
    });
});
