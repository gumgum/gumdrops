import React, { PropTypes } from 'react';

const Select = ({
    context,
    customValue,
    customName,
    options,
    className,
    ...otherProps
}) => {

    const baseClass = 'gds-form-group__select-input',
        contextClass = context ? `${baseClass}--${context}` : '';

    const classNames = `${baseClass} ${contextClass} ${className}`;

    return (
        <select
            className={ classNames }
            { ...otherProps }
        >
            {
                options.map((o) => (
                    <option
                        key={ o[customValue] }
                        value={ o[customValue] }
                    >
                        { o[customName] }
                    </option>
                ))
            }
        </select>
    );
};

Select.defaultProps = {
    className: '',
    options: [],
    customValue: 'value',
    customName: 'name',
    context: 'primary'
};

Select.propTypes = {
    className: PropTypes.string,
    context: PropTypes.oneOf(['primary']),
    customValue: PropTypes.string,
    customName: PropTypes.string,
    options: PropTypes.array
};

export default Select;
