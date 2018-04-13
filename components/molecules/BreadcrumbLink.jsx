import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BreadcrumbLink = ({ children, to, className }) => (
    <a className={className} href={to}>
        {children}
    </a>
);

BreadcrumbLink.displayName = 'BreadcrumbLink';

BreadcrumbLink.propTypes = {
    to: PropTypes.string.isRequired
};

export default BreadcrumbLink;
