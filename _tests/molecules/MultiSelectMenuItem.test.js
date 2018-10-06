/* globals mount */
import React from 'react';
import MultiSelectMenuItem from '../../components/molecules/MultiSelectMenuItem';

const subOptions = [
    { name: 'Lassie', value: 1, selected: false },
    { name: 'Snoopy', value: 2, selected: false },
    { name: 'Toto', value: 3, selected: false },
    { name: 'Brian Griffin', value: 3, selected: false }
];

const defaultProps = {
    callback: () => {},
    index: 1,
    isActive: false,
    name: 'Foo',
    onChange: () => {},
    onClick: () => {},
    selected: false,
    size: 'xs',
    value: 0
};

describe('Expect <MultiSelectMenuItem>', () => {
    it('to render', () => {
        const wrapper = mount(<MultiSelectMenuItem {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to call the onChange prop handler when options change', () => {
        const props = {
            ...defaultProps,
            onChange: jest.fn(),
            callback: jest.fn()
        };
        const wrapper = mount(<MultiSelectMenuItem {...props} />);
        wrapper
            .find('Checkbox input[type="checkbox"]')
            .first()
            .simulate('change');

        expect(props.onChange).toBeCalledWith({
            index: props.index,
            selected: !props.selected,
            value: props.value
        });

        expect(props.callback).toBeCalledWith(props.index, props.value, !props.selected); // deprecated
    });

    it('to call the onChange prop handler with sub options', () => {
        const props = {
            ...defaultProps,
            subOptions,
            onChange: jest.fn(),
            callback: jest.fn()
        };
        const wrapper = mount(<MultiSelectMenuItem {...props} />);
        wrapper
            .find('Checkbox input[type="checkbox"]')
            .first()
            .simulate('change');

        expect(props.onChange).toBeCalledWith({
            index: props.index,
            selected: !props.selected,
            value: props.value,
            options: subOptions
        });

        expect(props.callback).toBeCalledWith(props.index, props.value, !props.selected); // deprecated
    });
});
