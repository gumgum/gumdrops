import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { BreadcrumbsWrapper } from 'stories/BreadcrumbsWrapper';

describe('BreadcrumbsWrapper', () => {
    it('renders without option button', () => {
        const { container } = render(
            <BreadcrumbsWrapper>
                <li>
                    <p>A</p>
                </li>
                <li>
                    <p>B</p>
                </li>
                <li>
                    <p>C</p>
                </li>
            </BreadcrumbsWrapper>
        );
        const list = screen.getByRole('list');
        within(list).getByText('A');
        within(list).getByText('B');
        within(list).getByText('C');
        expect(container.firstChild).toMatchInlineSnapshot(`
            <nav
              aria-label="Breadcrumbs"
              class="gds-page-header__breadcrumb-nav"
            >
              <ol
                class="gds-page-header__breadcrumbs"
              >
                <li>
                  <p>
                    A
                  </p>
                </li>
                <li>
                  <p>
                    B
                  </p>
                </li>
                <li>
                  <p>
                    C
                  </p>
                </li>
              </ol>
            </nav>
        `);
    });
});
