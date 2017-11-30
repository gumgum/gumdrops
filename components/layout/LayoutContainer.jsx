import React from 'react';
import PropTypes from 'prop-types';

const LayoutContainer = ({ className, fullWidth, children, ...props }) => (
    <div
        className={ `gds-layout__container ${fullWidth ? 'gds-layout__container–full-width' : ''} ${className}` }
        { ...props }>
        { children }
    </div>
);

LayoutContainer.displayName = 'LayoutContainer';

LayoutContainer.defaultProps = {
    className: '',
    fullWidth: false
};

LayoutContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool
};

export default LayoutContainer;
