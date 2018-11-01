import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableRow = ({ className, children, isInverse, isStriped, onClick }) => (
    <tr
        onClick={onClick}
        className={cx('gds-table__row', className, {
            'gds-table__row--inverse': isInverse,
            'gds-table__row--striped': isStriped && !isInverse,
            'gds-table__row--striped-inverse': isStriped && isInverse
        })}>
        {children}
    </tr>
);

TableRow.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isInverse: PropTypes.bool,
    isStriped: PropTypes.bool,
    onClick: PropTypes.func
};

export default TableRow;
