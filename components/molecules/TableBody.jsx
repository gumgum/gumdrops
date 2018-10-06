import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableBody = ({ className, children }) => <tbody className={cx(className)}>{children}</tbody>;

TableBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default TableBody;
