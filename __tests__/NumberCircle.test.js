import React from 'react';
import { render } from '@testing-library/react';
import { NumberCircle } from '../src/stories/NumberCircle';

describe('NumberCircle', () => {
    it('renders', () => {
        const { container } = render(<NumberCircle text={42} />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <span
              class="gds-number-circle"
            >
              42
            </span>
        `);
    });
});
