import React from 'react';
import RadioButton from '../atoms/RadioButton';
import cx from 'classnames';
import PropTypes from 'prop-types';

const RadioGroup = ({ context, size, options, onChange, onBlur, name, className, defaultValue, ...rest }) => {
    const baseClass = 'gds-form-group__radio';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: size
    });

    return (
        <div className={rootClass}>
            {options.map(({ label, value }, i) => (
                <RadioButton
                    className="-m-r-4"
                    key={`option-${i}`}
                    label={label}
                    name={name}
                    onBlur={onBlur}
                    context={context}
                    onChange={onChange}
                    value={value}
                    defaultChecked={defaultValue === value}
                    {...rest}
                />
            ))}
        </div>
    );
};

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    /** xs, sm */
    size: PropTypes.oneOf(['xs', 'sm']),
    context: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
                .isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};

export default RadioGroup;
