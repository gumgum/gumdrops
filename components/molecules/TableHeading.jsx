import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableHeading = ({ className, children, onClick, sortDirection, isSecondary, ...rest }) => (
    <th
        className={cx('gds-table__header -text-left', className, {
            [`gds-table__header--sort-${sortDirection}`]: sortDirection,
            ['gds-table__header--secondary']: isSecondary,
            ['-cursor--default']: !onClick
        })}
        onClick={onClick}
        {...rest}>
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
