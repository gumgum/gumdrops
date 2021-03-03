import React from 'react';
import cx from 'classnames';

import { BreadcrumbMenu } from './BreadcrumbMenu';

const baseClass = 'gds-page-header__breadcrumbs-list-item';

const filterMenu = (pathname: string) => ({ path }): boolean =>
    path.charAt(0) !== ':' && !pathname.includes(path);

export interface BreadCrumb {
    title?: string;
    path: string;
    subpaths?: BreadCrumb[];
}

export type LinkComponent = React.FunctionComponent<{ to: string; className: string }>;

export interface BreadcrumbProps extends BreadCrumb, React.HTMLAttributes<HTMLOListElement> {
    linkComponent?: LinkComponent;
    pathname: string;
    isLast?: boolean;
    hideMenus: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    linkComponent: LinkComponent,
    title,
    path,
    subpaths,
    pathname,
    hideMenus,
    isLast,
    className
}) => {
    const hasSubpaths = !hideMenus && subpaths && subpaths.length;
    const menu = hasSubpaths && subpaths.filter(filterMenu(pathname));
    const hasMenu = !!(menu && menu.length);
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--has-menu`]: hasMenu
    });
    const displayTitle = title || path;

    return (
        <li className={rootClass} aria-label={displayTitle}>
            {hasMenu && (
                <BreadcrumbMenu
                    linkComponent={LinkComponent}
                    menu={menu}
                    path={path}
                    sectionTitle={displayTitle}
                />
            )}
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
