import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class BreadcrumbMenu extends Component {
    static displayName = 'BreadcrumbMenu';

    static propTypes = {
        path: PropTypes.string.isRequired,
        menu: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                path: PropTypes.string.isRequired
            })
        ).isRequired,
        linkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
    };

    state = {
        showMenu: false
    };

    _toggleMenu = () => this.setState(({ showMenu }) => ({ showMenu: !showMenu }));

    render() {
        const { showMenu } = this.state;
        const { path: parentPath, linkComponent: LinkComponent, menu } = this.props;
        const menuClass = cx('gds-bubble__menu', 'gds-bubble__menu--left', 'gds-bubble__menu--sm', {
            'gds-bubble__menu--menu-open': showMenu
        });

        return (
            <div onClick={this._toggleMenu} className="gds-page-header__breadcrumbs-menu">
                <div className="gds-page-header__breadcrumbs-menu-dots" />
                <div className={menuClass}>
                    <ul className="gds-bubble__menu-list">
                        {menu.map(({ title, path }) => (
                            <li key={path} className="gds-bubble__menu-list-item -ellipsis">
                                <LinkComponent
                                    className="gds-bubble__menu-list-link -text-tr-cap"
                                    to={`${parentPath}/${path}`}>
                                    {title || path}
                                </LinkComponent>
                            </li>
                        ))}
                    </ul>
                </div>{' '}
            </div>
        );
    }
}

export default BreadcrumbMenu;
