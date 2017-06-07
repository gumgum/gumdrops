import React, { PropTypes } from 'react';

const NumberCircle = ({ text, context, size, className, style }) => {

    const baseClass = 'gds-number-circle',
        contextClass = context ? `${baseClass}--${context}` : '',
        sizeClass = size ? `${baseClass}--${size}` : '';

    const classNames = `${baseClass} ${contextClass} ${sizeClass} ${className}`;

    return (
        <span className={ classNames } style={ style }>{ text }</span>
    );

};

NumberCircle.defaultProps = {
    text: '',
    context: null,
    size: '',
    className: '',
    style: {}
};

NumberCircle.propTypes = {
    text: PropTypes.string,
    context: PropTypes.oneOf(['secondary', 'success', 'warning', 'info', 'danger', 'white']),
    size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
    className: PropTypes.string,
    style: PropTypes.object
};

export default NumberCircle;
