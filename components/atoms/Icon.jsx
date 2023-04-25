import React from 'react';
import PropTypes from 'prop-types';

const contextToClassName = {
    primary: '-color-tx-pri-lt-4',
    secondary: '-color-tx-war-lt-4',
    danger: '-color-tx-dan-lt-4'
};

const Icon = ({ className, icon, prefix, fontSize, context, size, ...rest }) => {
    const contextClassName = context ? contextToClassName[context] : '';
    const faSize = size ? `fa-${size}` : '';
    return (
        <i
            className={`${className} ${prefix} fa-${icon} ${faSize} ${contextClassName}`}
            style={{ fontSize }}
            {...rest}
        />
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    prefix: PropTypes.oneOf(['fas', 'far', 'fal', 'fab']),
    context: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    fontSize: PropTypes.number,
    size: PropTypes.string
};

Icon.defaultProps = {
    className: '',
    icon: 'plus',
    prefix: 'fas',
    fontSize: 14
};

export default Icon;
