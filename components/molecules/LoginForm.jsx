import React from 'react';
import PropTypes from 'prop-types';

const wrapperStyle = { position: 'relative' };

const LoginForm = ({ capText, children, logoText, onSubmit, recoveryFn, recoveryText }) => (
    <div className="gds-account-modal gds-account-modal--logo" style={wrapperStyle}>
        <div className="gds-account-modal__form gds-card -p-t-3-sm -p-t-0">
            {logoText && <div className="gds-account-modal__logo-product">{logoText}</div>}
            {capText && (
                <div className="gds-account-modal__form-cap -m-t-3-sm -m-t-0">{capText}</div>
            )}
            <form className="gds-form -pointer-events--auto -p-a-3" onSubmit={onSubmit}>
                {children}
            </form>
        </div>
        {recoveryFn && (
            <p className="gds-account-modal__extra-links">
                <a onClick={recoveryFn} className="gds-text--link">
                    {recoveryText}
                </a>
            </p>
        )}
    </div>
);

LoginForm.displayName = 'LoginForm';

LoginForm.defaultProps = {
    capText: '',
    logoText: '',
    recoveryText: 'Forgot your password?'
};

LoginForm.propTypes = {
    capText: PropTypes.string,
    children: PropTypes.element.isRequired,
    logoText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    recoveryFn: PropTypes.func,
    recoveryText: PropTypes.string
};

export default LoginForm;
