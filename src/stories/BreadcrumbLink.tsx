import React from 'react';

export interface BreadcrumbLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    to: string;
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({ children, to, className }) => (
    <a className={className} href={to}>
        {children}
    </a>
);
