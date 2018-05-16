import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableHeading = ({ className, children, onClick, sortDirection, isSecondary }) => (
    <th
        className={cx('gds-table__header -text-left', className, {
            [`gds-table__header--sort-${sortDirection}`]: sortDirection,
            [`gds-table__header--secondary`]: isSecondary
        })}
        onClick={onClick}>
        {children}
    </th>
);

TableHeading.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    isSecondary: PropTypes.bool,
    sortDirection: PropTypes.oneOf(['asc', 'desc'])
};

export default TableHeading;
