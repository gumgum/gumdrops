import React, { PropTypes } from 'react';

const TextInput = ({
    className,
    type,
    size,
    ...otherProps
}) => {
    const sizeClass = (size) ? `gds-form-group__text-input--${size}` : '';
    return (
        <input
            className={ `gds-form-group__text-input ${sizeClass} ${className}` }
            type={ type }
            { ...otherProps }
        />
    );
};

TextInput.propTypes = {
    className: PropTypes.string,
    // This prevents people forcing this component out of its intended use
    type: PropTypes.oneOf(['text', 'password']),
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

TextInput.defaultProps = {
    className: '',
    type: 'text',
    size: 'md'
};

export default TextInput;
