import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({
    context,
    type,
    size,
    group,
    onClick,
    className,
    style,
    children,
    ...otherProps
}) => {
    const baseClass = 'gds-button';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${context}`]: context,
        [`${baseClass}--${size}`]: size,
        [`${baseClass}-group__button`]: group
    });

    return (
        <button className={rootClass} type={type} style={style} onClick={onClick} {...otherProps}>
            {children}
        </button>
    );
};

Button.displayName = 'Button';

Button.defaultProps = {
    context: 'default',
    type: 'button',
    group: false,
    onClick: null,
    style: {}
};

Button.propTypes = {
    /** outline, primary, secondary, success, warning, info, danger */
    context: PropTypes.string,
    type: PropTypes.string,
    /** xs, sm, lg */
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    group: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default Button;
