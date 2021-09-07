import React, { Component } from 'react';

import mdx from './PageBreadcrumbsWrapper.mdx';
import PageBreadcrumbsWrapper from '../../../components/molecules/PageBreadcrumbsWrapper';
import PageBreadcrumb from '../../../components/molecules/PageBreadcrumb';
import Link from '../../../components/molecules/PageBreadcrumbLink';

export default {
    component: PageBreadcrumbsWrapper,
    title: 'Molecules/PageBreadcrumbsWrapper',
    parameters: {
        component: PageBreadcrumbsWrapper,
        docs: { page: mdx }
    }
};

class PageBreadcrumbsWrapperStory extends Component {
    static displayName = 'PageBreadcrumbsWrapper';

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
                <PageBreadcrumbsWrapper>
                    {breadcrumbs.map(({ title, to }, index) => (
                        <PageBreadcrumb
                            key={to}
                            linkComponent={Link}
                            title={title}
                            path={to}
                            isLast={index === breadcrumbs.length - 1}
                        />
                    ))}
                </PageBreadcrumbsWrapper>
            </div>
        );
    }
}

export const Default = () => {
    return <PageBreadcrumbsWrapperStory />;
};

Default.story = {
    parameters: {
        info: { source: false }
    }
};
