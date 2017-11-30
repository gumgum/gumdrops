import React from 'react';
import PropTypes from 'prop-types';

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

TextInput.displayName = 'TextInput';

TextInput.defaultProps = {
    type: 'text',
    size: 'md',
    className: ''
};

TextInput.propTypes = {
    // This prevents people forcing this component out of its intended use
    /** text, password */
    type: PropTypes.oneOf(['text', 'password']),
    /** sm, md, lg */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string
};

export default TextInput;
