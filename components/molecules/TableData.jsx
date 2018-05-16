import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableData = ({ className, children, context }) => (
    <td
        className={cx(className, {
            [`gds-table__cell--${context}`]: context
        })}>
        {children}
    </td>
);

TableData.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    context: PropTypes.oneOf(['positive', 'neutral', 'negative'])
};

export default TableData;
