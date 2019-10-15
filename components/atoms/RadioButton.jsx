import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const RadioButton = ({ value, label, onChange, onBlur, name, context, className, ...rest }) => {
    const baseClass = 'gds-form-group';

    const rootClass = cx(baseClass, `${baseClass}__radio-label`, className, {
        [`${baseClass}--${context}`]: context
    });

    return (
        <label className={rootClass}>
            <input
                className="gds-form-group__radio-input"
                type="radio"
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                {...rest}
            />
            <span className="gds-form-group__radio-indicator" />
            {label}
        </label>
    );
};

RadioButton.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    /** Identifier that will be set on individual radio inputs */
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    /** One of: `success`, `warning`, `danger` */
    context: PropTypes.string,
    className: PropTypes.string,
    /** Change handler that will be called when a change event happens on a `<RadioButton>` */
    onChange: PropTypes.func,
    /** Blur handler that will be called when a blur event happens on a `<RadioButton>` */
    onBlur: PropTypes.func
};

export default RadioButton;
