import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({
    context,
    type,
    size,
    isGroup,
    group,
    isBlock,
    onClick,
    className,
    style,
    children,
    disabled,
    ...otherProps
}) => {
    const baseClass = 'gds-button';

    const rootClass = cx(baseClass, className, {
        ['-disabled']: disabled,
        [`${baseClass}--${context}`]: context,
        [`${baseClass}--${size}`]: size,
        [`${baseClass}-group__button`]: isGroup || group,
        [`${baseClass}--block`]: isBlock
    });

    return (
        <button
            className={rootClass}
            type={type}
            style={style}
            onClick={onClick}
            disabled={disabled}
            {...otherProps}>
            {children}
        </button>
    );
};

Button.displayName = 'Button';

Button.defaultProps = {
    context: 'default',
    type: 'button',
    isGroup: false,
    disabled: false,
    group: false,
    isBlock: false,
    onClick: null,
    style: {}
};

Button.propTypes = {
    /** One of: `default`, `outline`, `primary`, `secondary`, `success`, `warning`, `info`, `danger` */
    context: PropTypes.string,
    /** Type of button, for example "button" or "submit" */
    type: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    isGroup: PropTypes.bool,
    /** Is this button part of a button group? */
    group: PropTypes.bool,
    /** Is this is a block element button? */
    isBlock: PropTypes.bool,
    /** Adds the disabled attribute and styles (opacity, gray scale filter, no pointer events) */
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default Button;
