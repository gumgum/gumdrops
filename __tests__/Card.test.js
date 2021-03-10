import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../src/stories/Card';
import { CardBlock } from '../src/stories/CardBlock';
import { CardImage } from '../src/stories/CardImage';

describe('Card', () => {
    it('renders', () => {
        const { container } = render(
            <Card>
                <CardImage url="https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png" />
                <CardBlock option="divide-top">
                    <p>Card with a CardImage and a CardBlock.</p>
                </CardBlock>
            </Card>
        );
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-card"
            >
              <div
                class="gds-card__img-container gds-card__img-container--top"
              >
                <img
                  class="gds-card__img"
                  src="https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png"
                />
                <div
                  class="gds-card__img-helper"
                />
              </div>
              <div
                class="gds-card__block gds-card__block--divide-top"
              >
                <p>
                  Card with a CardImage and a CardBlock.
                </p>
              </div>
            </div>
        `);
    });
});
