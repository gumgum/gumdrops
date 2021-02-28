import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from '../src/stories/Badge';

describe('Badge', () => {
    it('renders', () => {
        const { container } = render(<Badge text="My Badge" color="warning" />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <span
              class="gds-badge gds-badge--warning"
            >
              My Badge
            </span>
        `);
    });

    it('renders an empty badge', () => {
        const { container } = render(<Badge text="My Badge" color="info" empty />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <span
              class="gds-badge gds-badge--info gds-badge--empty"
            />
        `);
    });
});
