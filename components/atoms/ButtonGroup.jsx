import React, { PropTypes } from 'react';

const ButtonGroup = ({ size, responsive, className, style, children }) => {

    const baseClass = 'gds-button-group',
        sizeClass = (size) ? `${baseClass}--${size}` : '',
        responsiveClass = (responsive) ? 'gds-button-group--responsive' : '';

    const classNames = `${baseClass} ${responsiveClass} ${sizeClass} ${className}`;

    return (
        <div className={ classNames } style={ style }>{ children }</div>
    );

};

ButtonGroup.defaultProps = {
    size: null,
    responsive: false,
    className: '',
    style: {}
};

ButtonGroup.propTypes = {
    size: PropTypes.string,
    responsive: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default ButtonGroup;
