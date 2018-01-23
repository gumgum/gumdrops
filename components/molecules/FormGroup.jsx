import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const FormGroup = ({ isInline, isDisabled, context, className, children, ...otherProps }) => {
    const baseClass = 'gds-form-group';
    const inlineClass = isInline ? `${baseClass}--inline` : '';
    const disabledClass = isDisabled ? `${baseClass}--disabled` : '';
    const contextClass = context ? `${baseClass}--${context}` : '';

    const classNames = trimString(
        `${baseClass} ${inlineClass} ${contextClass} ${disabledClass} ${className}`
    );

    return (
        <div className={classNames} {...otherProps}>
            {children}
        </div>
    );
};

FormGroup.displayName = 'FormGroup';

FormGroup.defaultProps = {
    isInline: false,
    isDisabled: false,
    context: '',
    className: ''
};

FormGroup.propTypes = {
    isInline: PropTypes.bool,
    isDisabled: PropTypes.bool,
    /** danger, warning, success */
    context: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.element.isRequired
};

export default FormGroup;
