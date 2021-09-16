import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const baseClass = 'gds-breadcrumb__item';

const PageBreadcrumb = props => {
    const {
        title,
        path,
        linkComponent: LinkComponent,
        isLast,
        className
    } = props;

    const rootClass = cx(baseClass, className);
    const displayTitle = title || path;

    return (
        <li className={rootClass}>
            {isLast ? (
                <div className="gds-breadcrumb__link">{displayTitle}</div>
            ) : (
                <LinkComponent className="gds-breadcrumb__link" to={path}>
                    {displayTitle}
                </LinkComponent>
            )}
        </li>
    );
};

PageBreadcrumb.displayName = 'PageBreadcrumb';

PageBreadcrumb.propTypes = {
    linkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    title: PropTypes.string,
    path: PropTypes.string.isRequired,
    isLast: PropTypes.bool.isRequired,
    className: PropTypes.string
};

export default PageBreadcrumb;
