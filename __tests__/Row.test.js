import React from 'react';
import { render } from '@testing-library/react';
import { Row } from '../src/stories/Row';

describe('Row', () => {
    it('renders', () => {
        const { container } = render(<Row>Foo</Row>);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-layout__row"
            >
              Foo
            </div>
        `);
    });
});
