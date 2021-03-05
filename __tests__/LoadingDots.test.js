import React from 'react';
import { render } from '@testing-library/react';
import { LoadingDots } from '../src/stories/LoadingDots';

describe('LoadingDots', () => {
    it('renders', () => {
        const { container } = render(<LoadingDots />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div>
              <div
                class="gds-loading"
              >
                <div
                  class="gds-loading__dot"
                />
              </div>
            </div>
        `);
    });

    it('renders white dots', () => {
        const { container } = render(<LoadingDots whiteDots size="sm" />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div>
              <div
                class="gds-loading"
              >
                <div
                  class="gds-loading__dot gds-loading__dot--sm gds-loading__dot--white"
                />
              </div>
            </div>
        `);
    });
});
