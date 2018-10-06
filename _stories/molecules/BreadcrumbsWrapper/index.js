import React, { Component } from 'react';

import readme from './README.md';
import BreadcrumbsWrapper from '../../../components/molecules/BreadcrumbsWrapper';
import Breadcrumb from '../../../components/molecules/Breadcrumb';
import Link from '../../../components/molecules/BreadcrumbLink';

class BreadcrumbsWrapperStory extends Component {
    static displayName = 'BreadcrumbsWrapper';

    state = {
        breadcrumbs: [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: 'Publishers',
                to: '/publishers'
            },
            {
                title: 'Johnny Pub',
                to: '/publishers/123'
            },
            {
                title: 'Random Page',
                to: '/random-route/123'
            },
            {
                title: 'Settings',
                to: '/publishers/123/settings'
            }
        ]
    };

    render() {
        const { breadcrumbs } = this.state;

        return (
            <div>
                <header className="gds-page-header -color-bg-white">
                    <div className="gds-page-header__nav-bar">
                        <BreadcrumbsWrapper>
                            {breadcrumbs.map(({ title, to }, index) => (
                                <Breadcrumb
                                    key={to}
                                    linkComponent={Link}
                                    title={title}
                                    path={to}
                                    isLast={index === breadcrumbs.length - 1}
                                />
                            ))}
                        </BreadcrumbsWrapper>
                    </div>
                </header>
            </div>
        );
    }
}

const component = () => <BreadcrumbsWrapperStory />;

export default [readme, component];
