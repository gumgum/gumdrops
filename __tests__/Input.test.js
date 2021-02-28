import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Input } from 'stories/Input';

describe('Input', () => {
    it('renders', () => {
        const mockOnChange = jest.fn();
        const str = 'hello TS';
        const { container } = render(<Input onChange={mockOnChange} />);
        user.type(screen.getByRole('textbox'), str);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <input
              class="gds-form-group__text-input gds-form-group__text-input--md"
              type="text"
            />
        `);
        expect(mockOnChange).toHaveBeenCalledTimes(str.length);
    });

    it('does nothing when disabled', () => {
        const mockOnChange = jest.fn();
        const str = 'hello TS';
        const { container } = render(<Input onChange={mockOnChange} disabled />);
        user.type(screen.getByRole('textbox'), str);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <input
              class="gds-form-group__text-input gds-form-group__text-input--md gds-form-group__text-input--disabled"
              disabled=""
              type="text"
            />
        `);
        expect(mockOnChange).not.toHaveBeenCalled();
    });
});
