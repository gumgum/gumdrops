/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';

import SearchMultiSelect from '../../components/molecules/SearchMultiSelect';

const defaultProps = {
    options: [
        {
            name: 'Name 1',
            key: 0,
            isSelected: true
        },
        {
            name: 'Name 2',
            key: 1,
            isSelected: false
        }
    ],
    onChange: jest.fn(),
    update: jest.fn(),
    placeholder: 'placeholder',
    size: 'sm',
    className: 'custom-class',
    context: 'primary',
    searchKeys: false,
    multiTerm: false
};

// Note - We cannot write a snapshot test since SearchMultiSelect uses refs which need a DOM
test('Expect <SearchMultiSelect> to show correct options and checked values', () => {
    const { getAllByRole } = render(<SearchMultiSelect {...defaultProps} />);
    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes[0].checked).toEqual(true);
    expect(checkboxes[1].checked).toEqual(false);
});
