import React, { Component } from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import readme from './README.md';
import Breadcrumbs from '../../../components/molecules/Breadcrumbs';
import Button from '../../../components/atoms/Button';

const optionsA = [
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

const optionsB = [
    '/publishers',
    '/publishers/42',
    '/publishers/42/settings',
    '/publishers/42/financials',
    '/publishers/42/zones',
    '/publishers/42/performance',
    '/publishers/42/users',
    '/publishers/42/activity-log',
    '/zones',
    '/zones/woop',
    '/zones/woop/overview',
    '/zones/woop/overview/settings'
];

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

const configSelect = {
    A: 'A',
    B: 'B'
};

const configs = {
    A: configA,
    B: configB
};

const options = {
    A: optionsA,
    B: optionsB
};

class BreadcrumbsStory extends Component {
    static displayName = 'Breadcrumbs';

    printCode = code => '\n' + JSON.stringify(code, null, 4) + '\n\n';

    render() {
        const selectedConfig = select('Configuration', configSelect, configSelect['A']);

        const configTitle = `// Configuration ${selectedConfig}:`;

        return (
            <div>
                <header className="gds-page-header -color-bg-white">
                    <div className="gds-page-header__nav-bar">
                        <Breadcrumbs
                            config={configs[selectedConfig]}
                            pathname={select(
                                'Pathname',
                                options[selectedConfig],
                                options[selectedConfig][1]
                            )}
                            hideMenus={boolean('Hide submenus', false)}
                            hideRoot={boolean('Hide root breadcrumb', false)}
                        />
                    </div>
                </header>
                <pre className="-m-t-6">
                    {configTitle}
                    {this.printCode(configs[selectedConfig])}
                </pre>
            </div>
        );
    }
}

const component = () => <BreadcrumbsStory />;

export default [readme, component];
