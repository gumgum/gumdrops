import React from 'react';
import { render } from '@testing-library/react';
import { CircularThumbnail } from '../src/stories/CircularThumbnail';

describe('CircularThumbnail', () => {
    it('renders', () => {
        const { container } = render(<CircularThumbnail />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <img
              class="gds-circular-thumbnail gds-circular-thumbnail--default gds-circular-thumbnail--md"
            />
        `);
    });
});
