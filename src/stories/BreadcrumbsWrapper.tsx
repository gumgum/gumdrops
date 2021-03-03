import React from 'react';

export type BreadcrumbsWrapperProps = React.HTMLAttributes<Element>;

export const BreadcrumbsWrapper: React.FC<BreadcrumbsWrapperProps> = ({
    children,
    ...otherProps
}) => (
    <nav className="gds-page-header__breadcrumb-nav" aria-label="Breadcrumbs" {...otherProps}>
        <ol className="gds-page-header__breadcrumbs">{children}</ol>
    </nav>
);
