import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ type = 'checkbox', label, style, className }) => {
    const classNames = (className) ? `gds-form-group__toggleswitch ${className}` : 'gds-form-group__toggleswitch';

    return (
        <div className={ classNames } style={ style }>
            <label className="gds-form-group__toggleswitch-label">
                <input className="gds-form-group__toggleswitch-input" type={ type } value="" />
                <span className="gds-form-group__toggleswitch-indicator" />{ label }
            </label>
        </div>
    );

};

Toggle.defaultProps = {
    type: 'checkbox',
    label: null,
    className: '',
    style: {}
};

Toggle.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Toggle;
