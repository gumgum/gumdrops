import React, { PropTypes } from 'react';

const Button = ({ text, option, size, block, callback }) => {

    let classes = 'gds-button gds-button--default';
    option && (classes = `gds-button gds-button--${option}`);
    size && (classes = `${classes} gds-button--${size}`);
    block && (classes = `${classes} gds-button--block`);

    return (
        <button className={ classes } onClick={ callback }>{ text }</button>
    );

};

Button.defaultProps = {
    text: null,
    option: 'default',
    size: null,
    block: false,
    callback: null
};

Button.propTypes = {
    text: PropTypes.string,
    option: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    callback: PropTypes.func
};

export default Button;
