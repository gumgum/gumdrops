import React, { PropTypes } from 'react';

const Button = ({ option = 'default', size, callback, className, style, children }) => {

    const baseClass = 'gds-button',
        optionClass = (option) ? `${baseClass}--${option}` : '',
        sizeClass = (size) ? `${baseClass}--${size}` : '';

    const classNames = `${baseClass} ${optionClass} ${sizeClass} ${className}`;

    return (
        <button className={ classNames } style={ style } onClick={ callback }>{ children }</button>
    );

};

Button.defaultProps = {
    option: 'default',
    size: null,
    callback: null,
    className: '',
    style: null
};

Button.propTypes = {
    option: PropTypes.string,
    size: PropTypes.string,
    callback: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default Button;
