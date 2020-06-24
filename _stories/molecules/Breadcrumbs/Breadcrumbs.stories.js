import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import mdx from './Breadcrumbs.mdx';
import Breadcrumbs from '../../../components/molecules/Breadcrumbs';

const optionsA = {
    '/': '/',
    '/home': '/home',
    '/home/static-page': '/home/static-page',
    '/home/category': '/home/category',
    '/home/category/subcategory-1': '/home/category/subcategory-1',
    '/home/category/subcategory-2': '/home/category/subcategory-2',
    '/home/category/subcategory-3': '/home/category/subcategory-3',
    '/home/products/42': '/home/products/42',
    '/home/products/42/edit': '/home/products/42/edit',
    '/home/products/stringId': '/home/products/stringId',
    '/home/products/stringId/edit': '/home/products/stringId/edit'
};

const optionsB = {
    '/publishers': '/publishers',
    '/publishers/42': '/publishers/42',
    '/publishers/42/settings': '/publishers/42/settings',
    '/publishers/42/financials': '/publishers/42/financials',
    '/publishers/42/zones': '/publishers/42/zones',
    '/publishers/42/performance': '/publishers/42/performance',
    '/publishers/42/users': '/publishers/42/users',
    '/publishers/42/activity-log': '/publishers/42/activity-log',
    '/zones': '/zones',
    '/zones/woop': '/zones/woop',
    '/zones/woop/overview': '/zones/woop/overview',
    '/zones/woop/overview/settings': '/zones/woop/overview/settings'
};

const optionsC = {
    '/home': '/home',
    '/about-me': '/about-me',
    '/contact': '/contact'
};

const configA = {
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
        }
    ]
};

const configB = {
    title: 'Start',
    path: '/',
    subpaths: [
        {
            path: 'publishers',
            subpaths: [
                {
                    path: ':id',
                    subpaths: [
                        {
                            path: 'settings'
                        },
                        {
                            path: 'financials'
                        },
                        {
                            path: 'zones'
                        },
                        {
                            path: 'performance'
                        },
                        {
                            path: 'users'
                        },
                        {
                            path: 'activity-log',
                            title: 'Activity Log'
                        }
                    ]
                }
            ]
        },
        {
            path: 'zones',
            subpaths: [
                {
                    path: ':id'
                }
            ]
        }
    ]
};

const printCode = code => (code ? '\n' + JSON.stringify(code, null, 4) + '\n\n' : '');

export default {
    component: Breadcrumbs,
    title: 'Molecules/Breadcrumbs',
    decorators: [withKnobs],
    parameters: {
        component: Breadcrumbs,
        docs: { page: mdx }
    }
};

export const ConfigA = () => (
    <div>
        <header className="gds-page-header -color-bg-white">
            <div className="gds-page-header__nav-bar">
                <Breadcrumbs
                    config={configA}
                    pathname={select('Pathname', optionsA, '/')}
                    hideMenus={boolean('Hide submenus', false)}
                    hideRoot={boolean('Hide root breadcrumb', false)}
                />
            </div>
        </header>
        <pre className="-m-t-6">
            Config:
            {printCode(configA)}
        </pre>
    </div>
);

export const ConfigB = () => (
    <div>
        <header className="gds-page-header -color-bg-white">
            <div className="gds-page-header__nav-bar">
                <Breadcrumbs
                    config={configB}
                    pathname={select('Pathname', optionsB, '/publishers')}
                    hideMenus={boolean('Hide submenus', false)}
                    hideRoot={boolean('Hide root breadcrumb', false)}
                />
            </div>
        </header>
        <pre className="-m-t-6">
            Config:
            {printCode(configB)}
        </pre>
    </div>
);

export const ConfigC = () => (
    <div>
        <header className="gds-page-header -color-bg-white">
            <div className="gds-page-header__nav-bar">
                <Breadcrumbs
                    pathname={select('Pathname', optionsC, '/home')}
                    hideMenus={boolean('Hide submenus', false)}
                    hideRoot={boolean('Hide root breadcrumb', false)}
                />
            </div>
        </header>
        <pre className="-m-t-6">No Config</pre>
    </div>
);

ConfigA.story = {
    parameters: {
        info: { source: false }
    }
};

ConfigB.story = {
    parameters: {
        info: { source: false }
    }
};

ConfigC.story = {
    parameters: {
        info: { source: false }
    }
};
