import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const wrapperStyle = { position: 'relative' };

const LoginForm = ({
    capText,
    children,
    hideLogo,
    logoText,
    onSubmit,
    recoveryFn,
    recoveryText
}) => (
    <div
        className={cx('gds-account-modal', { 'gds-account-modal--logo': !hideLogo })}
        style={wrapperStyle}>
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
                <a onClick={recoveryFn} className="gds-text--link -cursor--pointer">
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
    recoveryText: 'Forgot your password?',
    hideLogo: false
};

LoginForm.propTypes = {
    /** Text to display in the cap between the logo and form. */
    capText: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** Product name, shown right below GumGum's logo */
    logoText: PropTypes.string,
    /** Function called on form submission */
    onSubmit: PropTypes.func.isRequired,
    /** Callback used to redirect to a password recovery page */
    recoveryFn: PropTypes.func,
    /** Text to show for password recovery */
    recoveryText: PropTypes.string,
    /** Do you want the GumGum logo hidden? */
    hideLogo: PropTypes.bool
};

export default LoginForm;
