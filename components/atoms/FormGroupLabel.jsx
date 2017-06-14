import React, { PropTypes } from 'react';

const FormGroupLabel = ({
    text,
    className,
    ...otherProps
}) => (
    <label
        className={ `gds-form-group__label ${className}` }
        { ...otherProps }
    >
        { text }
    </label>
);

FormGroupLabel.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

FormGroupLabel.defaultProps = {
    className: ''
};

export default FormGroupLabel;
