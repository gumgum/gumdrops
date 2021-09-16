import React from 'react';
import PropTypes from 'prop-types';

const PageBreadcrumbLink = ({ children, to, className }) => (
    <a className={className} href={to}>
        {children}
    </a>
);

PageBreadcrumbLink.displayName = 'PageBreadcrumbLink';

PageBreadcrumbLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    to: PropTypes.string.isRequired
};

export default PageBreadcrumbLink;
