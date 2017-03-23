import React, { PropTypes } from 'react';

const Toggle = ({ type = 'checkbox', label }) => {

    return (
        <div className="gds-form-group__toggleswitch">
            <label className="gds-form-group__toggleswitch-label">
                <input className="gds-form-group__toggleswitch-input" type={ type } value="" />
                <span className="gds-form-group__toggleswitch-indicator" />{ label }
            </label>
        </div>
    );

};

Toggle.defaultProps = {
    type: 'checkbox',
    label: null
};

Toggle.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string
};

export default Toggle;
