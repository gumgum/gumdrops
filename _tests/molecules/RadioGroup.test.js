/* globals shallow */
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
    onBlur: () => {},
    onChange: () => {},
    size: 'sm'
};

describe('Expect <RadioGroup>', () => {
    it('to render', () => {
        const wrapper = shallow(<RadioGroup {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
