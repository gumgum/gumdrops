import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Button = ({ context, type, size, group, onClick, className, style, children }) => {

    const baseClass = 'gds-button',
        contextClass = (context) ? `${baseClass}--${context}` : '',
        sizeClass = (size) ? `${baseClass}--${size}` : '',
        groupClass = (group) ? `${baseClass}-group__button` : '';

    const classNames = trimString(`${baseClass} ${contextClass} ${sizeClass} ${groupClass} ${className}`);

    return (
        <button
            className={ classNames }
            type={ type }
            style={ style }
            onClick={ onClick }
        >
            { children }
        </button>
    );

};

Button.displayName = 'Button';

Button.defaultProps = {
    context: 'default',
    type: 'button',
    size: '',
    group: false,
    onClick: null,
    className: '',
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
