import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const ButtonGroup = ({ size, responsive, className, style, children }) => {
    const baseClass = 'gds-button-group',
        sizeClass = size ? `${baseClass}--${size}` : '',
        responsiveClass = responsive ? 'gds-button-group--responsive' : '';

    const classNames = trimString(`${baseClass} ${responsiveClass} ${sizeClass} ${className}`);

    return (
        <div className={classNames} style={style}>
            {children}
        </div>
    );
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.defaultProps = {
    responsive: false,
    style: {}
};

ButtonGroup.propTypes = {
    /** xs, sm, lg */
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    responsive: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default ButtonGroup;
