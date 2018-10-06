import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableHeader = ({ className, children }) => (
    <thead className={cx(className)}>{children}</thead>
);

TableHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default TableHeader;
