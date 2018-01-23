import React from 'react';
import PropTypes from 'prop-types';

const FormGroupTextHelp = ({ text, className, ...otherProps }) => (
    <small className={`gds-form-group__text-help ${className}`} {...otherProps}>
        {text}
    </small>
);

FormGroupTextHelp.displayName = 'FormGroupTextHelp';

FormGroupTextHelp.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

FormGroupTextHelp.defaultProps = {
    className: ''
};

export default FormGroupTextHelp;
