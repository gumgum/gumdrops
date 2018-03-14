import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const NumberCircle = ({ text, context, size, className, style }) => {
    const baseClass = 'gds-number-circle',
        contextClass = context ? `${baseClass}--${context}` : '',
        sizeClass = size ? `${baseClass}--${size}` : '';

    const classNames = trimString(`${baseClass} ${contextClass} ${sizeClass} ${className}`);

    return (
        <span className={classNames} style={style}>
            {text}
        </span>
    );
};

NumberCircle.displayName = 'NumberCircle';

NumberCircle.defaultProps = {
    context: null,
    style: {}
};

NumberCircle.propTypes = {
    text: PropTypes.string,
    /** secondary, success, warning, info, danger, white */
    context: PropTypes.string,
    /** xs, sm, lg, xl */
    size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
    className: PropTypes.string,
    style: PropTypes.object
};

export default NumberCircle;
