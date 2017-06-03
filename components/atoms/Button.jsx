import React, { PropTypes } from 'react';

const Button = ({ context = 'default', size, group, callback, className, style, children }) => {

    const baseClass = 'gds-button',
        contextClass = (context) ? `${baseClass}--${context}` : '',
        sizeClass = (size) ? `${baseClass}--${size}` : '',
        groupClass = (group) ? `${baseClass}--group__button` : '';

    const classNames = `${baseClass} ${contextClass} ${sizeClass} ${groupClass} ${className}`;

    return (
        <button className={ classNames } style={ style } onClick={ callback }>{ children }</button>
    );

};

Button.defaultProps = {
    context: 'default',
    size: null,
    group: false,
    callback: null,
    className: '',
    style: {}
};

Button.propTypes = {
    context: PropTypes.string,
    size: PropTypes.string,
    group: PropTypes.bool,
    callback: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default Button;
