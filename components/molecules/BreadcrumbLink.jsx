import React from 'react';
import PropTypes from 'prop-types';

const BreadcrumbLink = ({ children, to, className }) => (
    <a className={className} href={to}>
        {children}
    </a>
);

BreadcrumbLink.displayName = 'BreadcrumbLink';

BreadcrumbLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    to: PropTypes.string.isRequired
};

export default BreadcrumbLink;
