import React from 'react';
import { render } from '@testing-library/react';
import { FormGroup } from 'stories/FormGroup';

describe('FormGroup', () => {
    it('renders', () => {
        const { container } = render(
            <FormGroup>
                <span>A Form</span>
            </FormGroup>
        );
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-form-group gds-form-group--default"
            >
              <span>
                A Form
              </span>
            </div>
        `);
    });

    it('is disabled', () => {
        const { container } = render(
            <FormGroup disabled inline color="warning">
                <span>A Form</span>
            </FormGroup>
        );
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-form-group gds-form-group--warning gds-form-group--disabled gds-form-group--inline"
            >
              <span>
                A Form
              </span>
            </div>
        `);
    });
});
