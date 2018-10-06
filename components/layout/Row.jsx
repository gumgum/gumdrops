import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Row = ({ className, children, ...props }) => (
    <div className={cx('gds-layout__row', className)} {...props}>
        {children}
    </div>
);

Row.displayName = 'Row';

Row.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Row;
