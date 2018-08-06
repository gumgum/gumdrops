/* globals mount */
import React from 'react';
import SearchMultiSelect from '../../components/molecules/SearchMultiSelect';

const defaultProps = {
    options: [
        {
            name: 'Name',
            key: 10,
            isSelected: true
        }
    ],
    onChange: () => {},
    update: () => {},
    placeholder: 'placeholder',
    size: 'sm',
    className: 'custom-class',
    context: 'primary',
    searchKeys: false,
    multiTerm: false
};

describe('Expect <SearchMultiSelect>', () => {
    it('to render', () => {
        const wrapper = mount(<SearchMultiSelect {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
