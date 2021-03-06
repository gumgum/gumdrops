import React, { LiHTMLAttributes, ReactChild } from 'react';
import cx from 'classnames';

import { BreadcrumbMenu } from './BreadcrumbMenu';

const baseClass = 'gds-page-header__breadcrumbs-list-item';

const filterMenu = (pathname: string) => ({ path }): boolean =>
    path.charAt(0) !== ':' && !pathname.includes(path);

export interface BreadCrumb {
    title?: ReactChild;
    label?: string;
    path: string;
    subpaths?: BreadCrumb[];
}

export type LinkComponent = React.FunctionComponent<{ to: string; className: string }>;

export interface BreadcrumbProps extends BreadCrumb, Omit<LiHTMLAttributes<Element>, 'title'> {
    linkComponent?: LinkComponent;
    pathname: string;
    isLast?: boolean;
    hideMenus: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    linkComponent: LinkComponent,
    title,
    label,
    path,
    subpaths,
    pathname,
    hideMenus,
    isLast,
    className,
    ...otherProps
}) => {
    const hasSubpaths = !hideMenus && subpaths && subpaths.length;
    const menu = hasSubpaths && subpaths.filter(filterMenu(pathname));
    const hasMenu = !!(menu && menu.length);
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--has-menu`]: hasMenu
    });
    const displayTitle = title || label || path;
    const fallbackLabel = typeof title === 'string' ? (title as string) : path;
    const displayLabel = label || fallbackLabel;

    return (
        <li className={rootClass} {...otherProps} aria-label={displayLabel}>
            {hasMenu && (
                <BreadcrumbMenu
                    linkComponent={LinkComponent}
                    menu={menu}
                    path={path}
                    sectionTitle={displayLabel}
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
