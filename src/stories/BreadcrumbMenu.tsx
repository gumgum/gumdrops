import React, { useState } from 'react';
import cx from 'classnames';
import { BreadCrumb, LinkComponent } from './Breadcrumb';

export interface BreadcrumbMenuProps extends React.HTMLAttributes<Element> {
    path: string;
    sectionTitle?: string;
    menu: BreadCrumb[];
    linkComponent: LinkComponent;
}

const buttonStyle = { border: 'none', outline: 'none', padding: 0 };

export const BreadcrumbMenu: React.FC<BreadcrumbMenuProps> = ({
    path: parentPath,
    linkComponent: LinkComponent,
    sectionTitle = 'section',
    menu,
    ...otherProps
}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = (): void => setShowMenu(currentValue => !currentValue);

    const menuClass = cx('gds-bubble__menu', 'gds-bubble__menu--left', 'gds-bubble__menu--sm', {
        'gds-bubble__menu--menu-open': showMenu
    });

    return (
        <div
            onClick={toggleMenu}
            className="gds-page-header__breadcrumbs-menu"
            aria-haspopup="listbox"
            aria-expanded={showMenu}
            {...otherProps}>
            <button
                type="button"
                className="gds-page-header__breadcrumbs-menu-dots"
                style={buttonStyle}
                aria-label={`${showMenu ? 'Close' : 'Open'} ${sectionTitle} menu`}
            />
            {showMenu && (
                <div className={menuClass}>
                    <ul className="gds-bubble__menu-list" aria-label="Section Menu">
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
                </div>
            )}
        </div>
    );
};
