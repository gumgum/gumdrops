/* globals mount */
import React from 'react';
import MultiSelect from '../../components/molecules/MultiSelect';

const defaultProps = {
    options: [
        {
            name: 'Name',
            value: 10,
            selected: true
        }
    ],
    callback: () => {},
    placeholder: 'placeholder',
    size: 'xs',
    className: 'custom-class'
};

describe('Expect <MultiSelect>', () => {
    it('to render', () => {
        const wrapper = mount(<MultiSelect {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
