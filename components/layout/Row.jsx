import React, { PropTypes } from 'react';

const Row = ({ className, ...props }, children) => (
    <div className={ `gds-layout__row ${className}` } { ...props }>
        { [...children] }
    </div>
);

Row.defaultProps = {
    className: ''
};

Row.propTypes = {
    className: PropTypes.string
};

export default Row;
