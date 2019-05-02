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
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    context: PropTypes.string,
    className: PropTypes.string,
    /** xs, sm */
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

export default RadioButton;
