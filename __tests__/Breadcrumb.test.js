import React from 'react';
import { render, screen } from '@testing-library/react';
import { Breadcrumb } from 'stories/Breadcrumb';

describe('Breadcrumb', () => {
    it('renders without option button', () => {
        const menu = {
            title: 'Root',
            path: '/',
            subpaths: [
                { title: 'Bar', path: 'bar' },
                { path: 'baz', title: 'Baz' }
            ]
        };
        const TestComponent = props => <div {...props}></div>;
        const { container, rerender } = render(
            <Breadcrumb path="/foo/baz" title="Baz" menu={menu} linkComponent={TestComponent} />
        );
        expect(screen.getByText('Baz')).toHaveAttribute('to', '/foo/baz');
        rerender(
            <Breadcrumb
                path="/foo/baz"
                title="Baz"
                menu={menu}
                linkComponent={TestComponent}
                isLast
            />
        );
        expect(screen.getByText('Baz')).not.toHaveAttribute('to', '/foo/baz');
        expect(container.firstChild).toMatchInlineSnapshot(`
            <li
              aria-label="Baz"
              class="gds-page-header__breadcrumbs-list-item"
              menu="[object Object]"
            >
              Baz
            </li>
        `);
    });
});
