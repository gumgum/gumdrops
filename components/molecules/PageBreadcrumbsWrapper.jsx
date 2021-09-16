import React from 'react';
import PropTypes from 'prop-types';

const PageBreadcrumbsWrapper = ({ children, ...props }) => (
    <div className="gds-breadcrumb" {...props}>
        <ul className="gds-breadcrumb__list">{children}</ul>
    </div>
);
PageBreadcrumbsWrapper.displayName = 'PageBreadcrumbsWrapper';

PageBreadcrumbsWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired
};

export default PageBreadcrumbsWrapper;
