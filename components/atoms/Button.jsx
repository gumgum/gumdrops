import React, { PropTypes } from 'react';

const Button = ({ context = 'default', size, callback, className, style, children }) => {

    const baseClass = 'gds-button',
        contextClass = (context) ? `${baseClass}--${context}` : '',
        sizeClass = (size) ? `${baseClass}--${size}` : '';

    const classNames = `${baseClass} ${contextClass} ${sizeClass} ${className}`;

    return (
        <button className={ classNames } style={ style } onClick={ callback }>{ children }</button>
    );

};

Button.defaultProps = {
    context: 'default',
    size: null,
    callback: null,
    className: '',
    style: {}
};

Button.propTypes = {
    context: PropTypes.string,
    size: PropTypes.string,
    callback: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default Button;
