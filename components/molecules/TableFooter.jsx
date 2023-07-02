import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableFooter = ({ className, children, ...rest }) => <tfoot className={cx(className)} {...rest}>{children}</tfoot>;

TableFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default TableFooter;
