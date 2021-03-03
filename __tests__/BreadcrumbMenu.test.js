import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { BreadcrumbMenu } from 'stories/BreadcrumbMenu';

describe('BreadcrumbMenu', () => {
    it('renders without option button', () => {
        const menu = [{ title: 'Bar', path: 'bar' }, { path: 'baz' }];
        const TestComponent = props => <div {...props}></div>;
        const { container } = render(
            <BreadcrumbMenu path="/foo" menu={menu} linkComponent={TestComponent} />
        );
        expect(screen.queryAllByRole('listitem').length).toBe(0);
        user.click(screen.getByRole('button', { name: 'Open section menu' }));
        expect(screen.queryAllByRole('listitem').length).toBe(2);
        expect(screen.getByText('Bar')).toHaveAttribute('to', '/foo/bar');
        expect(screen.getByText('baz')).toHaveAttribute('to', '/foo/baz');
        expect(container.firstChild).toMatchSnapshot();
        user.click(screen.getByRole('button', { name: 'Close section menu' }));
        expect(screen.queryAllByRole('listitem').length).toBe(0);
    });
});
