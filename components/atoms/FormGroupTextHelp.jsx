import React, { PropTypes } from 'react';

const FormGroupTextHelp = ({
    text,
    className,
    ...otherProps
}) => (
    <small
        className={ `gds-form-group__text-help ${className}` }
        { ...otherProps }
    >
        { text }
    </small>
);

FormGroupTextHelp.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

FormGroupTextHelp.defaultProps = {
    className: ''
};

export default FormGroupTextHelp;
