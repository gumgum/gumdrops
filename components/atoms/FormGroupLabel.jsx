import React from 'react';
import PropTypes from 'prop-types';

const FormGroupLabel = ({ text, className, ...otherProps }) => (
    <label className={`gds-form-group__label ${className}`} {...otherProps}>
        {text}
    </label>
);

FormGroupLabel.displayName = 'FormGroupLabel';

FormGroupLabel.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

FormGroupLabel.defaultProps = {
    className: ''
};

export default FormGroupLabel;
