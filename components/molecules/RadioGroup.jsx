import React from 'react';
import RadioButton from '../atoms/RadioButton';
import cx from 'classnames';
import PropTypes from 'prop-types';

const RadioGroup = ({
    context,
    size,
    options,
    onChange,
    onBlur,
    name,
    className,
    defaultValue,
    ...rest
}) => {
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
    /** Identifier that will be set on individual radio inputs. */
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xs', 'sm']),
    /** One of: `success`, `warning`, `danger` */
    context: PropTypes.string,
    className: PropTypes.string,
    /** Change handler that will be called when a change event happens on a `<RadioButton>`. */
    onChange: PropTypes.func,
    /** Blur handler that will be called when a blur event happens on a `<RadioButton>`. */
    onBlur: PropTypes.func,
    /** Radio button options list. An array of objects with `label` and `value` properties. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
                .isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    /** Select a value by default from the options */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};

export default RadioGroup;
