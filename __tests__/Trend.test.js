import React from 'react';
import { render, screen } from '@testing-library/react';
import { Trend } from 'stories/Trend';

describe('Trend', () => {
    it('renders defaults', () => {
        const { container } = render(<Trend value="Something" />);
        screen.getByText('Something %');
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-card__trend gds-card__trend--up"
            >
              Something
               
              %
            </div>
        `);
    });

    it('renders custom options', () => {
        const { container } = render(<Trend value={42} unit="JPG" />);
        screen.getByText('42 JPG');
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-card__trend gds-card__trend--up"
            >
              42
               
              JPG
            </div>
        `);
    });
});
