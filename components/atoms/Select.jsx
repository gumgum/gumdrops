import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Select = ({ context, size, customValue, customName, options, className, ...otherProps }) => {
    const baseClass = 'gds-form-group__select-input';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${context}`]: context,
        [`${baseClass}--${size}`]: size
    });

    return (
        <select className={rootClass} {...otherProps}>
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
    options: [],
    customValue: 'value',
    customName: 'name'
};

Select.propTypes = {
    /** One of: `primary`, `no-border`, `dark` */
    context: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    /** If your options have values at a different key than "value", you can set the customValue="myValue" */
    customValue: PropTypes.string,
    /** If your options have names at a different key than "name", you can set the customName="myName" */
    customName: PropTypes.string,
    /** Array of objects with key/value pairs */
    options: PropTypes.array,
    className: PropTypes.string
};

export default Select;
