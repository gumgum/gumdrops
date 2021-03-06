import React from 'react';

import { BreadCrumb, Breadcrumb, LinkComponent } from './Breadcrumb';
import { BreadcrumbLink } from './BreadcrumbLink';
import { BreadcrumbsWrapper } from './BreadcrumbsWrapper';

export interface BreadcrumbsProps extends React.HTMLAttributes<Element> {
    linkComponent?: LinkComponent;
    config?: BreadCrumb | BreadCrumb[];
    pathname: string;
    titleDecorator?: (title: string) => string;
    hideMenus?: boolean;
    hideRoot?: boolean;
}

const defaultTitleDecorator = (title: string): string =>
    title.replace(/^\w/, chr => chr.toUpperCase()).replace(/-|_/g, ' ');

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    linkComponent = BreadcrumbLink,
    pathname,
    config = { title: null, path: '/' },
    titleDecorator = defaultTitleDecorator,
    hideMenus = false,
    hideRoot = false,
    ...otherProps
}) => {
    // Create the full path for the current slug based on the previous entry
    const _buildHref = (arr: BreadCrumb[], slug: string): string => {
        const previous = arr && arr[arr.length - 1];
        const newPath = previous ? `${previous.path}/${slug}` : slug;
        return newPath.replace('//', '/');
    };

    // Create a title for parameters, either the capitalized param or a number
    const _getParamTitle = (param: string): string =>
        Number.isInteger(parseInt(param)) ? `${param}` : titleDecorator(param as string);

    // Creates a flat Array only with the nodes that correspond to the current pathname
    // It includes replaces the path with the full path to each link
    const _findTrail = (pathname: string, config: BreadCrumb): BreadCrumb[] => {
        const initialBreadcrumb: BreadCrumb = {
            title: config.title || '/',
            path: config.path?.charAt(0) === '/' ? config.path : `/${config.path || ''}`,
            label: config.label
        };

        const breadcrumbConfig: BreadCrumb = {
            title: config.title || '/',
            path: config.path || '/',
            label: config.label
        };

        // Set initial data if necessary
        const initialData: BreadCrumb[] =
            config.path === '/' ? [initialBreadcrumb] : [breadcrumbConfig];

        const searchBreakpoints = (
            pathSections: string[],
            subpaths: BreadCrumb[],
            accumulator: BreadCrumb[] = []
        ): BreadCrumb[] =>
            pathSections.reduce((trail, pathSection, index) => {
                // Find current path subpathData
                const subpathData = subpaths && subpaths.find(({ path }) => path === pathSection);
                // Find section param subpathData if no exact path was found
                const paramData =
                    !subpathData && subpaths && subpaths.find(({ path }) => path.charAt(0) === ':');
                const breadcrumbData = subpathData || paramData || { path: pathSection };
                const acceptBreadcrumb = trail.length < maxLength;
                // Push section subpathData  to accumulator
                if (acceptBreadcrumb && breadcrumbData) {
                    // Set defaults depending on type of path (param or regular path)
                    const breadcrumbPath = paramData ? pathSection : breadcrumbData.path;
                    const breadcrumbTitle = breadcrumbData.title || _getParamTitle(pathSection);
                    // Build full path for link
                    const currentPath = _buildHref(trail, breadcrumbPath);

                    const fallbackLabel =
                        typeof breadcrumbTitle === 'string'
                            ? (breadcrumbData.title as string)
                            : currentPath;
                    const label = breadcrumbData.label;

                    const bc = {
                        ...breadcrumbData,
                        path: currentPath,
                        title: breadcrumbTitle,
                        label: label || fallbackLabel
                    };
                    trail.push(bc);
                }
                const trailContinues = trail.length < maxLength;
                // Go deeper if there are subpaths
                if (breadcrumbData && breadcrumbData.subpaths && trailContinues) {
                    const nextIndex = index + 1;
                    const remainingParts = pathSections.slice(nextIndex);
                    // Search for the remaining pathname parts on the current path's subpaths,
                    return searchBreakpoints(remainingParts, breadcrumbData.subpaths, trail);
                }
                return trail;
            }, accumulator);

        // Divide pathname into sections
        const parts = pathname.split('/').filter(Boolean);
        const duplicateRoot = parts[0] === config.path;
        const initialSections = duplicateRoot ? parts.slice(1) : parts;
        const maxLength = initialSections.length + 1;
        // Compare pathname parts against user provided configuration
        const breadcrumbs = searchBreakpoints(initialSections, config.subpaths, initialData);
        return breadcrumbs;
    };

    const breadcrumbs = Array.isArray(config) ? config : _findTrail(pathname, config);
    const displayBreadcrumbs =
        hideRoot && breadcrumbs.length > 1 ? breadcrumbs.slice(1) : breadcrumbs;
    return (
        <BreadcrumbsWrapper {...otherProps}>
            {displayBreadcrumbs.map(({ title, label, path, subpaths }, index, arr) => (
                <Breadcrumb
                    key={path}
                    hideMenus={hideMenus}
                    linkComponent={linkComponent}
                    title={title}
                    label={label}
                    path={path}
                    subpaths={subpaths}
                    pathname={pathname}
                    isLast={arr.length - 1 === index}
                />
            ))}
        </BreadcrumbsWrapper>
    );
};
