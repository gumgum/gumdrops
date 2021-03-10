import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Divider } from '../src/stories/Divider';

describe('Divider', () => {
    it('renders', () => {
        const mock = jest.fn();
        const { container } = render(
            <Divider
                label="Love Letters - Metronomy"
                centered
                collapsible
                open
                onClick={mock}
                data-testid="divider"
            />
        );
        user.click(screen.getByTestId('divider'));
        expect(mock).toHaveBeenCalledTimes(1);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-divider gds-divider--true gds-divider--true -cursor--pointer"
              data-testid="divider"
            >
              <span
                class="gds-divider__line"
              />
              <span
                class="gds-divider__label gds-form-group__label"
              >
                Love Letters - Metronomy
              </span>
              <span
                class="gds-divider__line"
              />
              <span
                class="gds-divider__arrow"
              />
            </div>
        `);
    });
});
