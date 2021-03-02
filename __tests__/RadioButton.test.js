import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { RadioButton } from 'src/stories/RadioButton';

describe('RadioButton', () => {
    it('calls the given callback on click', () => {
        const mockOnChange = jest.fn();
        const { container } = render(<RadioButton onChange={mockOnChange} label="My Checkbox" />);
        const check = screen.getByRole('radio', { name: 'My Checkbox' });
        expect(check).not.toBeChecked();
        user.click(check);
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders a value', () => {
        const mockOnChange = jest.fn();
        const { container } = render(
            <RadioButton onChange={mockOnChange} label="My Checkbox" checked={true} />
        );
        expect(screen.getByRole('radio', { name: 'My Checkbox' })).toBeChecked();
        expect(container.firstChild).toMatchSnapshot();
    });
});
