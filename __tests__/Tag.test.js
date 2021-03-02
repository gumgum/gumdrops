import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Tag } from '../src/stories/Tag';

describe('Tag', () => {
    it('renders without option button', () => {
        const mockOnClick = jest.fn();
        const { container } = render(<Tag text="My tag" onClick={mockOnClick} />);
        user.click(screen.getByText('My tag'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-tag"
            >
              My tag
            </div>
        `);
    });

    it('renders with option', () => {
        const mockOnClick = jest.fn();
        const mockOptionOnClick = jest.fn();
        const { container } = render(
            <Tag text="My tag" onClick={mockOnClick} onOptionClick={mockOptionOnClick} hasOption />
        );
        user.click(screen.getByText('My tag'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        user.click(screen.getByRole('button', { name: 'Remove tag' }));
        expect(mockOptionOnClick).toHaveBeenCalledTimes(1);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-tag gds-tag--with-button"
            >
              My tag
              <button
                aria-label="Remove tag"
                class="gds-tag__option"
              >
                <i
                  class="btl bt-fw bt-times"
                />
              </button>
            </div>
        `);
    });

    it('renders with custom options', () => {
        const mockOnClick = jest.fn();
        const mockOptionOnClick = jest.fn();
        const { container } = render(
            <Tag
                color="info"
                size="xs"
                text="My tag"
                onClick={mockOnClick}
                onOptionClick={mockOptionOnClick}
                optionLabel="Custom Option"
                hasOption
            />
        );
        user.click(screen.getByText('My tag'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        user.click(screen.getByRole('button', { name: 'Custom Option' }));
        expect(mockOptionOnClick).toHaveBeenCalledTimes(1);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-tag gds-tag--info gds-tag--with-button gds-tag--with-button--xs gds-tag--xs"
            >
              My tag
              <button
                aria-label="Custom Option"
                class="gds-tag__option gds-tag__option--info gds-tag__option--xs"
              >
                <i
                  class="btl bt-fw bt-times"
                />
              </button>
            </div>
        `);
    });
});
