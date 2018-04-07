import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import BreadcrumbMenu from './BreadcrumbMenu';

const baseClass = 'gds-page-header__breadcrumbs-list-item';
const filterMenu = pathname => ({ path }) => path.charAt(0) !== ':' && !pathname.includes(path);

const Breadcrumb = props => {
    const {
        config: { title, path, subpaths },
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

    return (
        <li className={rootClass}>
            {hasMenu && <BreadcrumbMenu linkComponent={LinkComponent} menu={menu} path={path} />}
            {isLast ? (
                title
            ) : (
                <LinkComponent className="gds-page-header__breadcrumbs-link" to={path}>
                    {title}
                </LinkComponent>
            )}
        </li>
    );
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {
    linkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    config: PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        subpaths: PropTypes.array
    }).isRequired,
    pathname: PropTypes.string.isRequired,
    isLast: PropTypes.bool.isRequired,
    hideMenus: PropTypes.bool,
    className: PropTypes.string
};

export default Breadcrumb;
