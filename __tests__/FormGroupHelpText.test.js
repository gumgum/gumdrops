import React from 'react';
import { render } from '@testing-library/react';
import { FormGroupHelpText } from 'stories/FormGroupHelpText';

describe('FormGroupHelpText', () => {
    it('renders', () => {
        const { container } = render(<FormGroupHelpText text="this is helpful" />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <small
              class="gds-form-group__text-help"
            >
              this is helpful
            </small>
        `);
    });
});
