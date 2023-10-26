/* globals mount */
import React from 'react';
import SearchMultiSelectGroups from '../../components/molecules/SearchMultiSelectGroups';

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

describe('Expect <SearchMultiSelectGroups>', () => {
    it('to render', () => {
        const wrapper = mount(<SearchMultiSelectGroups {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
