/* globals mount */
import React from 'react';
import SearchMultiSelectExtended from '../../components/molecules/SearchMultiSelectExtended';

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

describe('Expect <SearchMultiSelectExtended>', () => {
    it('to render', () => {
        const wrapper = mount(<SearchMultiSelectExtended {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
