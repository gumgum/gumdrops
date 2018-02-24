import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const LayoutContainer = ({ className, fullWidth, children, ...props }) => {
    const baseClass = fullWidth ? 'gds-layout__container--full-width' : 'gds-layout__container';
    const classNames = trimString(`${baseClass} ${className}`);
    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
};

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
