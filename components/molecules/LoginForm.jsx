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
    capText: PropTypes.string,
    children: PropTypes.node.isRequired,
    logoText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    recoveryFn: PropTypes.func,
    recoveryText: PropTypes.string,
    hideLogo: PropTypes.bool
};

export default LoginForm;
