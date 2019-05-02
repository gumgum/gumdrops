/* globals shallow */
import React from 'react';
import RadioButton from '../../components/atoms/RadioButton';

const defaultProps = {
    label: 'Cool',
    value: 'cool',
    className: 'custom-class',
    context: 'success',
    name: 'radio-buttons',
    onBlur: () => {},
    onChange: () => {}
};

describe('Expect <RadioButton>', () => {
    it('to render', () => {
        const wrapper = shallow(<RadioButton {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
