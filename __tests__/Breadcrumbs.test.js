import React from 'react';
import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Breadcrumbs } from 'stories/Breadcrumbs';

const defaultProps = {
    className: 'cool-crumbs',
    pathname: '/home/category/subcategory-2',
    config: {
        title: 'Start',
        path: '/',
        subpaths: [
            {
                title: 'Home',
                path: 'home',
                subpaths: [
                    {
                        title: 'Main Category',
                        path: 'category',
                        subpaths: [
                            {
                                title: 'Sub Category 1',
                                path: 'subcategory-1'
                            },
                            {
                                title: 'Sub Category 2',
                                path: 'subcategory-2'
                            },
                            {
                                title: 'Sub Category 3',
                                path: 'subcategory-3'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    hideMenus: false,
    hideRoot: false
};

const arrayConfig = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Folder',
        path: '/folder'
    },
    {
        title: 'File',
        path: '/folder/file'
    }
];

describe('Breadcrumbs', () => {
    it('renders', () => {
        const { container } = render(<Breadcrumbs {...defaultProps} />);
        screen.getByRole('navigation', { name: 'Breadcrumbs' });
        const items = screen.getAllByRole('listitem');
        expect(within(items[0]).getByText('Start')).toHaveAttribute('href', '/');
        expect(within(items[1]).getByText('Home')).toHaveAttribute('href', '/home');
        expect(within(items[2]).getByText('Main Category')).toHaveAttribute(
            'href',
            '/home/category'
        );
        expect(within(items[3]).getByText('Sub Category 2')).not.toHaveAttribute('href');
        expect(screen.queryByText('Sub Category 1')).toBe(null);
        expect(screen.queryByText('Sub Category 3')).toBe(null);
        user.click(screen.getByRole('button', { name: 'Open Main Category menu' }));
        expect(container.firstChild).toMatchSnapshot();
        screen.getByText('Sub Category 1');
        screen.getByText('Sub Category 3');
        user.click(screen.getByRole('button', { name: 'Close Main Category menu' }));
        expect(screen.queryByText('Sub Category 1')).toBe(null);
        expect(screen.queryByText('Sub Category 3')).toBe(null);
    });

    it('renders an array config explicitly', () => {
        render(<Breadcrumbs config={arrayConfig} pathname="/folder/file" />);
        const items = screen.getAllByRole('listitem');
        expect(within(items[0]).getByText('Home')).toHaveAttribute('href', '/');
        expect(within(items[1]).getByText('Folder')).toHaveAttribute('href', '/folder');
        expect(within(items[2]).getByText('File')).not.toHaveAttribute('href');
    });
});
