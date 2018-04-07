import React, { Component } from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import readme from './README.md';
import Breadcrumbs from '../../../components/molecules/Breadcrumbs';

const config = {
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
        },
        {
            title: 'Products',
            path: 'products',
            subpaths: [
                {
                    path: ':id',
                    subpaths: [
                        {
                            path: 'edit'
                        }
                    ]
                }
            ]
        },
        {
            path: ':pageId'
        },
        {
            path: 'publishers',
            subpaths: [
                {
                    path: ':id'
                }
            ]
        },
        {
            path: 'zone',
            subpaths: [
                {
                    path: ':id'
                }
            ]
        }
    ]
};

class BreadcrumbsStory extends Component {
    static displayName = 'Breadcrumbs';

    state = {
        hideSubmenus: false
    };

    render() {
        return (
            <header className="gds-page-header">
                <div className="gds-page-header__nav-bar">
                    <Breadcrumbs
                        config={config}
                        pathname={select('pathname', routeOptions, routeOptions[0])}
                        hideMenus={boolean('Hide Submenus', false)}
                        hideRoot={boolean('Hide root breadcrumb', false)}
                    />
                </div>
            </header>
        );
    }
}

const routeOptions = [
    '/',
    '/home',
    '/home/static-page',
    '/home/category',
    '/home/category/subcategory-1',
    '/home/category/subcategory-2',
    '/home/category/subcategory-3',
    '/home/products/42',
    '/home/products/42/edit',
    '/home/products/stringId',
    '/home/products/stringId/edit'
];

const component = () => <BreadcrumbsStory />;

export default [readme, component];
