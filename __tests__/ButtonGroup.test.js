import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../src/stories/Button';
import { ButtonGroup } from '../src/stories/ButtonGroup';
import { Colors } from '../src/types';

describe('ButtonGroup', () => {
    it('renders', () => {
        const { container } = render(
            <ButtonGroup>
                <Button color="primary" isGroup>
                    First Button
                </Button>
                <Button color="secondary" isGroup>
                    Second Button
                </Button>
            </ButtonGroup>
        );
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-button-group gds-button-group--md"
            >
              <button
                class="gds-button gds-button--primary gds-button--md gds-button-group__button"
                type="button"
              >
                First Button
              </button>
              <button
                class="gds-button gds-button--secondary gds-button--md gds-button-group__button"
                type="button"
              >
                Second Button
              </button>
            </div>
        `);
    });
});
