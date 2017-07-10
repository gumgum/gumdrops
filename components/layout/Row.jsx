import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ className, children, ...props }) => (
    <div className={ `gds-layout__row ${className}` } { ...props }>
        { children }
    </div>
);

Row.defaultProps = {
    className: ''
};

Row.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Row;
