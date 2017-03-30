import React, { PropTypes } from 'react';

const LayoutContainer = ({ className, fullWidth, ...props }, children) => (
    <div
        className={ `gds-layout__container ${fullWidth ? 'gds-layout__container–full-width' : ''} ${className}` }
        { ...props }>
        { [...children] }
    </div>
);

LayoutContainer.defaultProps = {
    className: '',
    fullWidth: false
};

LayoutContainer.propTypes = {
    className: PropTypes.string,
    fullWidth: PropTypes.bool
};

export default LayoutContainer;
