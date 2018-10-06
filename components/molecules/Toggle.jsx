import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Toggle = ({ type, size, label, style, className, ...otherProps }) => {
    const baseClass = 'gds-form-group__toggleswitch';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: size
    });

    return (
        <div className={rootClass} style={style}>
            <label className="gds-form-group__toggleswitch-label">
                <input className="gds-form-group__toggleswitch-input" type={type} {...otherProps} />
                <span className="gds-form-group__toggleswitch-indicator" />
                {label}
            </label>
        </div>
    );
};

Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
    type: 'checkbox',
    label: ''
};

Toggle.propTypes = {
    /** radio, checkbox */
    type: PropTypes.oneOf(['radio', 'checkbox']),
    label: PropTypes.string,
    /** xs, sm */
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
};

export default Toggle;
