import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from './Breadcrumb';
import BreadcrumbLink from './BreadcrumbLink';
import BreadcrumbsWrapper from './BreadcrumbsWrapper';

class Breadcrumbs extends Component {
    static displayName = 'Breadcrumbs';

    static propTypes = {
        /** Optional component to display as the breadcrumbs. Receives prop "to" as its href  */
        linkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
        /** Object that defines the app routes */
        config: PropTypes.shape({
            title: PropTypes.string,
            path: PropTypes.string,
            subpaths: PropTypes.array
        }).isRequired,
        /** Current pathname either from react-router or window.location.pathname */
        pathname: PropTypes.string.isRequired,
        /** Optional function for transforming titles when defaulting to the path. By default will Capitalize first letter and replace dashes and underscores for spaces */
        titleDecorator: PropTypes.func,
        /** Prevent displaying subpath submenus? */
        hideMenus: PropTypes.bool,
        /** Prevent displaying the Root element (only if other breadcrumbs are available)? */
        hideRoot: PropTypes.bool
    };

    static defaultProps = {
        config: { path: '/' },
        linkComponent: BreadcrumbLink,
        titleDecorator: title =>
            title.replace(/^\w/, chr => chr.toUpperCase()).replace(/-|_/g, ' '),
        hideMenus: false,
        hideRoot: false
    };

    // Create the full path for the current slug based on the previous entry
    _buildHref = (arr, slug) => {
        const previous = arr && arr[arr.length - 1];
        const newPath = previous ? `${previous.path}/${slug}` : slug;
        return newPath.replace('//', '/');
    };

    // Create a title for parameters, either the capitalized param or a number
    _getParamTitle = param =>
        Number.isInteger(parseInt(param)) ? param : this.props.titleDecorator(param);

    // Creates a flat Array only with the nodes that correspond to the current pathname
    // It includes replaces the path with the full path to each link
    _findTrail = (pathname, config) => {
        const initialBreadcrumb = {
            title: config.title || '/',
            path: config.path.charAt(0) === '/' ? config.path : `/${config.path || ''}`
        };

        const breadcrumbConfig = {
            title: config.title || '/',
            path: config.path
        };

        // Set initial data if necessary
        const initialData = config.path === '/' ? [initialBreadcrumb] : [breadcrumbConfig];

        const searchBreakpoints = (pathSections, subpaths, accumulator = []) =>
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
                    const breadcrumbTitle =
                        breadcrumbData.title || this._getParamTitle(pathSection);
                    // Build full path for link
                    const currentPath = this._buildHref(trail, breadcrumbPath);
                    trail.push({
                        ...breadcrumbData,
                        path: currentPath,
                        title: breadcrumbTitle
                    });
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

    render() {
        const { config, linkComponent, hideRoot, hideMenus, pathname } = this.props;
        const breadcrumbs = this._findTrail(pathname, config);
        const displayBreadcrumbs =
            hideRoot && breadcrumbs.length > 1 ? breadcrumbs.slice(1) : breadcrumbs;
        return (
            <BreadcrumbsWrapper>
                {displayBreadcrumbs.map(({ title, path, subpaths }, index, arr) => (
                    <Breadcrumb
                        key={path}
                        hideMenus={hideMenus}
                        linkComponent={linkComponent}
                        title={title}
                        path={path}
                        subpaths={subpaths}
                        pathname={pathname}
                        isLast={arr.length - 1 === index}
                    />
                ))}
            </BreadcrumbsWrapper>
        );
    }
}

export default Breadcrumbs;
