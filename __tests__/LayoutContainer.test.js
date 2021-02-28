import React from 'react';
import { render } from '@testing-library/react';
import { LayoutContainer } from '../src/stories/LayoutContainer';

describe('LayoutContainer', () => {
    it('renders', () => {
        const { container } = render(<LayoutContainer>Foo</LayoutContainer>);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-layout__container"
            >
              Foo
            </div>
        `);
    });

    it('renders at full width', () => {
        const { container } = render(<LayoutContainer fullWidth>Foo</LayoutContainer>);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-layout__container gds-layout__container--full-width"
            >
              Foo
            </div>
        `);
    });
});
