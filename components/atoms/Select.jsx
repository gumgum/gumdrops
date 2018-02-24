import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Select = ({ context, size, customValue, customName, options, className, ...otherProps }) => {
    const baseClass = 'gds-form-group__select-input',
        contextClass = context ? `${baseClass}--${context}` : '',
        sizeClass = size ? `${baseClass}--${size}` : '';

    const classNames = trimString(`${baseClass} ${contextClass} ${sizeClass} ${className}`);

    return (
        <select className={classNames} {...otherProps}>
            {options.map(o => (
                <option key={o[customValue]} value={o[customValue]}>
                    {o[customName]}
                </option>
            ))}
        </select>
    );
};

Select.displayName = 'Select';

Select.defaultProps = {
    className: '',
    options: [],
    customValue: 'value',
    customName: 'name',
    context: '',
    size: ''
};

Select.propTypes = {
    /** primary, no-border, dark */
    context: PropTypes.string,
    /** xs, sm, lg */
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    customValue: PropTypes.string,
    customName: PropTypes.string,
    options: PropTypes.array,
    className: PropTypes.string
};

export default Select;
