import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

const Tabs = ({ options, topPath, location, className, onClick, isTabActive }) => (
    <nav>
        <ul className={cx('gds-nav-tabs', className)}>
            {options.map(({ name, path }) => (
                <li
                    key={path}
                    className={cx('gds-nav-tabs__list-item', {
                        'gds-nav-tabs__list-item--active': isTabActive
                            ? isTabActive(path)
                            : location.endsWith(path),
                    })}>
                    {onClick ? (
                        <div onClick={() => onClick(path)} className="gds-nav-tabs__link">
                            {name}
                        </div>
                    ) : (
                        <Link to={topPath + path} className="gds-nav-tabs__link">
                            {name}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    </nav>
);

Tabs.defaultProps = {
    className: 'gds-nav-tabs--justified gds-nav-tabs--sm',
    topPath: ''
};

Tabs.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array.isRequired,
    topPath: PropTypes.string,
    location: PropTypes.string.isRequired,
    isTabActive: PropTypes.func,
    onClick: PropTypes.func,
};

export default Tabs;
