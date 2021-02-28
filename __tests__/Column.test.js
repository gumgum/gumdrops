import React from 'react';
import { render } from '@testing-library/react';
import { Column } from '../src/stories/Column';

describe('Column', () => {
    it('renders', () => {
        const { container } = render(<Column md={9} xs="4" />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-layout__column--xs-4 gds-layout__column--md-9"
            />
        `);
    });
});
