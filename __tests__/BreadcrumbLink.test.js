import React from 'react';
import { render, screen } from '@testing-library/react';
import { BreadcrumbLink } from 'stories/BreadcrumbLink';

describe('BreadcrumbLink', () => {
    it('renders without option button', () => {
        const str = 'A place in my heart';
        const { container } = render(<BreadcrumbLink to="/taylor-mcferrin">{str}</BreadcrumbLink>);
        screen.getByRole('link', { name: str });
        expect(container.firstChild).toMatchInlineSnapshot(`
            <a
              href="/taylor-mcferrin"
            >
              A place in my heart
            </a>
        `);
    });
});
