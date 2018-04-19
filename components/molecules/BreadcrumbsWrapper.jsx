import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BreadcrumbsWrapper = ({ children, ...props }) => (
    <div className="gds-page-header__breadcrumb-nav" {...props}>
        <ul className="gds-page-header__breadcrumbs">{children}</ul>
    </div>
);
BreadcrumbsWrapper.displayName = 'BreadcrumbsWrapper';

BreadcrumbsWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired
};

export default BreadcrumbsWrapper;
