import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Select } from '../src/stories/Select';

describe('Select', () => {
    it('changes the count select', () => {
        const mockOnChange = jest.fn();
        const options = [
            { name: 'first', value: 1, foo: 'foo1' },
            { name: 'second', value: 'Second', foo: 'foo2' },
            3
        ];
        const { container } = render(
            <Select options={options} onChange={mockOnChange} value={'Second'} />
        );
        screen.getByDisplayValue('second');
        user.selectOptions(screen.getByRole('combobox'), '3');
        expect(mockOnChange).toHaveBeenCalledWith('3');
        user.selectOptions(screen.getByRole('combobox'), 'first');
        expect(mockOnChange).toHaveBeenCalledWith('1');
        expect(container.firstChild).toMatchSnapshot();
    });

    it('does nothing when disabled', () => {
        const mockOnChange = jest.fn();
        const options = [
            { name: 'first', value: 1, foo: 'foo1' },
            { name: 'second', value: 'Second', foo: 'foo2' },
            3
        ];
        render(<Select options={options} onChange={mockOnChange} value={'Second'} disabled />);
        user.selectOptions(screen.getByRole('combobox'), '3');
        expect(mockOnChange).not.toHaveBeenCalled();
    });
});
