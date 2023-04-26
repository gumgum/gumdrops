import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Tabs = ({ options, location, className, onClick, isTabActive }) => (
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
                    <div onClick={() => onClick(path)} className="gds-nav-tabs__link">
                        {name}
                    </div>
                </li>
            ))}
        </ul>
    </nav>
);

Tabs.defaultProps = {
    className: 'gds-nav-tabs--justified gds-nav-tabs--sm',
    topPath: '',
};

Tabs.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
    isTabActive: PropTypes.func,
    onClick: PropTypes.func.isRequired,
};

export default Tabs;
