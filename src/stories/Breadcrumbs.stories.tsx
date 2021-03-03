import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { BreadCrumb } from './Breadcrumb';

export default {
    title: 'Breadcrumbs',
    component: Breadcrumbs
} as Meta;

const printCode = (code: BreadCrumb): string =>
    code ? '\n' + JSON.stringify(code, null, 4) + '\n\n' : '';

const Template: Story<BreadcrumbsProps> = args => (
    <div>
        <header className="gds-page-header -color-bg-white">
            <div className="gds-page-header__nav-bar">
                <Breadcrumbs {...args} />
            </div>
        </header>
        <pre className="-m-t-6">
            Config:
            {printCode(configA)}
        </pre>
    </div>
);

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

const pathOptionsA = {
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

export const ConfigA = Template.bind({});
ConfigA.argTypes = {
    pathname: { control: { type: 'select', options: pathOptionsA } }
};
ConfigA.args = {
    config: configA,
    pathname: '/home/category/subcategory-2'
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

const pathOptionsB = {
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

export const ConfigB = Template.bind({});
ConfigB.argTypes = {
    pathname: { control: { type: 'select', options: pathOptionsB } }
};
ConfigB.args = {
    config: configB,
    pathname: '/publishers/42/settings'
};

const pathOptionsC = {
    '/home': '/home',
    '/about-me': '/about-me',
    '/contact': '/contact'
};

export const NoConfig = Template.bind({});
NoConfig.argTypes = {
    pathname: { control: { type: 'select', options: pathOptionsC } }
};
NoConfig.args = {
    pathname: '/home'
};
