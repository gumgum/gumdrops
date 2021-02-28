import React from 'react';
import { render } from '@testing-library/react';
import { FormGroupLabel } from '../src/stories/FormGroupLabel';

describe('FormGroupLabel', () => {
    it('renders', () => {
        const { container } = render(<FormGroupLabel text="Actions" className="foo" />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <label
              class="gds-form-group__label foo"
            >
              Actions
            </label>
        `);
    });
});
