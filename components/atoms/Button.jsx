import React, { PropTypes } from 'react';

const Button = ({ context, type, size, group, onClick, className, style, children }) => {

    const baseClass = 'gds-button',
        contextClass = (context) ? `${baseClass}--${context}` : '',
        sizeClass = (size) ? `${baseClass}--${size}` : '',
        groupClass = (group) ? `${baseClass}-group__button` : '';

    const classNames = `${baseClass} ${contextClass} ${sizeClass} ${groupClass} ${className}`;

    return (
        <button className={ classNames } type={ type } style={ style } onClick={ onClick }>{ children }</button>
    );

};

Button.defaultProps = {
    context: 'default',
    type: 'button',
    size: null,
    group: false,
    onClick: null,
    className: '',
    style: {}
};

Button.propTypes = {
    context: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    group: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default Button;
