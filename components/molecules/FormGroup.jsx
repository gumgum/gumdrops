import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({
    isInline,
    isDisabled,
    context,
    className,
    children,
    ...otherProps
}) => {
    const inlineClass = (isInline) ? 'gds-form-group--inline' : '';
    const disabledClass = (isDisabled) ? 'gds-form-group--disabled' : '';
    const contextClass = (context) ? `gds-form-group--${context}` : '';

    return (
        <div
            className={ `gds-form-group ${inlineClass} ${contextClass} ${disabledClass} ${className}` }
            { ...otherProps }
        >
            { children }
        </div>
    );
};

FormGroup.propTypes = {
    isInline: PropTypes.bool,
    isDisabled: PropTypes.bool,
    context: PropTypes.oneOf(['danger', 'warning', 'success']),
    className: PropTypes.string,
    children: PropTypes.element.isRequired
};

FormGroup.defaultProps = {
    isInline: false,
    isDisabled: false,
    context: '',
    className: ''
};

export default FormGroup;
