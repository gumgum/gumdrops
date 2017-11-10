import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Toggle = ({
    type,
    size,
    label,
    style,
    className,
    ...otherProps
}) => {
    const baseClass = 'gds-form-group__toggleswitch';
    const sizeClass = (size) ? `${baseClass}--${size}` : '';
    const classNames = trimString(`${baseClass} ${sizeClass} ${className}`);

    return (
        <div className={ classNames } style={ style }>
            <label className="gds-form-group__toggleswitch-label">
                <input
                    className="gds-form-group__toggleswitch-input"
                    type={ type }
                    { ...otherProps }
                />
                <span className="gds-form-group__toggleswitch-indicator" />{ label }
            </label>
        </div>
    );

};

Toggle.defaultProps = {
    type: 'checkbox',
    size: '',
    label: '',
    className: '',
    style: {}
};

Toggle.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.string
};

export default Toggle;
