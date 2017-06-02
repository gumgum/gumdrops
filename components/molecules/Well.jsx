import React, { PropTypes } from 'react';

const Well = ({ text, context, button = false, callback, className, style }) => {

    const baseClasses = `gds-well gds-well--${context}`,
        buttonClasses = `gds-well__button gds-well__button--${context}`;

    const classNames = `${baseClasses} ${className}`;

    return (
        <div className={ classNames } style={ style }>
            <p className= "gds-well__text">{ text }</p>
            { button && callback && <button className={ buttonClasses } onClick={ callback } /> }
        </div>
    );

};

Well.defaultProps = {
    text: null,
    context: null,
    button: false,
    callback: null,
    className: '',
    style: {}
};

Well.propTypes = {
    text: PropTypes.string,
    context: PropTypes.string,
    button: PropTypes.bool,
    callback: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Well;
