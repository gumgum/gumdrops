import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Button } from 'stories/Button';

describe('Button', () => {
    it('calls the given callback on click', () => {
        const mockOnClick = jest.fn();
        const { container } = render(<Button onClick={mockOnClick}>Test</Button>);
        user.click(screen.getByRole('button', { name: 'Test' }));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('clicking a disabled button does nothing', () => {
        const mockOnClick = jest.fn();
        render(
            <Button onClick={mockOnClick} disabled>
                Test
            </Button>
        );
        user.click(screen.getByRole('button', { name: 'Test' }));
        expect(mockOnClick).not.toHaveBeenCalled();
    });
});
