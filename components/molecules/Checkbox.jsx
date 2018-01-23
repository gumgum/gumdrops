import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Checkbox = ({ label, size, style, className, ...otherProps }) => {
    const baseClass = 'gds-form-group__checkbox';
    const sizeClass = size ? `${baseClass}--${size}` : '';
    const classNames = trimString(`${baseClass} ${sizeClass} ${className}`);

    return (
        <div className={classNames} style={style}>
            <label className="gds-form-group__checkbox-label">
                <input className="gds-form-group__checkbox-input" type="checkbox" {...otherProps} />
                <span className="gds-form-group__checkbox-indicator" />
                {label}
            </label>
        </div>
    );
};

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
    label: '',
    size: '',
    className: '',
    style: {}
};

Checkbox.propTypes = {
    label: PropTypes.string,
    /** xs, sm */
    size: PropTypes.oneOf(['xs', 'sm']),
    className: PropTypes.string,
    style: PropTypes.object
};

export default Checkbox;
