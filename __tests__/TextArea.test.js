import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { TextArea } from 'stories/TextArea';

describe('TextArea', () => {
    it('renders without option button', () => {
        const mockOnChange = jest.fn();
        const { container } = render(<TextArea placeholder="Type here" onChange={mockOnChange} />);
        const str = 'typing here';
        user.type(screen.getByRole('textbox'), str);
        expect(mockOnChange).toHaveBeenCalledTimes(str.length);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <textarea
              class="gds-form-group__text-area-input gds-form-group__text-area-input--md"
              placeholder="Type here"
            />
        `);
    });
});
