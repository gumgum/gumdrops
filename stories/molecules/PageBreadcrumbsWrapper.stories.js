import PageBreadcrumbsWrapper from '../../components/molecules/PageBreadcrumbsWrapper';
import PageBreadcrumb from '../../components/molecules/PageBreadcrumb';
import PageBreadcrumbLink from '../../components/molecules/PageBreadcrumbLink';

import mdx from './PageBreadcrumbsWrapper.mdx';

const breadcrumbs = [
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
];

export default {
    title: 'Molecules/PageBreadcrumbsWrapper',
    component: PageBreadcrumbsWrapper,
    subcomponents: { PageBreadcrumb, PageBreadcrumbLink },
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        children: { control: 'object' }
    }
};

const Template = args => {
    return (
        <div>
            <PageBreadcrumbsWrapper>
                {args.children.map(({ title, to }, index) => (
                    <PageBreadcrumb
                        key={to}
                        linkComponent={PageBreadcrumbLink}
                        title={title}
                        path={to}
                        isLast={index === breadcrumbs.length - 1}
                    />
                ))}
            </PageBreadcrumbsWrapper>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    children: breadcrumbs
};
