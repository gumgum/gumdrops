import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
    label,
    ...otherProps
}) => {
    return (
        <div className="gds-form-group__checkbox">
            <label className="gds-form-group__checkbox-label">
                <input className="gds-form-group__checkbox-input"
                    type="checkbox"
                    { ...otherProps }
                />
                <span className="gds-form-group__checkbox-indicator" />{ label }
            </label>
        </div>
    );
};

Checkbox.defaultProps = {
    label: ''
};

Checkbox.propTypes = {
    label: PropTypes.string
};

export default Checkbox;
