import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import BreadcrumbMenu from './BreadcrumbMenu';

const baseClass = 'gds-page-header__breadcrumbs-list-item';
const filterMenu = pathname => ({ path }) => path.charAt(0) !== ':' && !pathname.includes(path);

const Breadcrumb = props => {
    const {
        title,
        path,
        subpaths,
        linkComponent: LinkComponent,
        pathname,
        hideMenus,
        isLast,
        className
    } = props;
    const hasSubpaths = !hideMenus && subpaths && subpaths.length;
    const menu = hasSubpaths && subpaths.filter(filterMenu(pathname));
    const hasMenu = !!(menu && menu.length);
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--has-menu`]: hasMenu
    });
    const displayTitle = title || path;

    return (
        <li className={rootClass}>
            {hasMenu && <BreadcrumbMenu linkComponent={LinkComponent} menu={menu} path={path} />}
            {isLast ? (
                displayTitle
            ) : (
                <LinkComponent className="gds-page-header__breadcrumbs-link" to={path}>
                    {displayTitle}
                </LinkComponent>
            )}
        </li>
    );
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {
    linkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    title: PropTypes.string,
    path: PropTypes.string.isRequired,
    subpaths: PropTypes.array,
    pathname: PropTypes.string,
    isLast: PropTypes.bool.isRequired,
    hideMenus: PropTypes.bool,
    className: PropTypes.string
};

export default Breadcrumb;
