import React, { PropTypes } from 'react';

const Well = ({ text, option, button, callback }) => {

    const wellClasses = `gds-well gds-well--${option}`,
        buttonClasses = `gds-well__button gds-well__button--${option}`;

    return (
        <div className={ wellClasses }>
            <p className= "gds-well__text">{ text }</p>
            { button && callback && <button className={ buttonClasses } onClick={ callback } /> }
        </div>
    );

};

Well.defaultProps = {
    text: null,
    option: null,
    button: false,
    callback: null
};

Well.propTypes = {
    text: PropTypes.string,
    option: PropTypes.string,
    button: PropTypes.bool,
    callback: PropTypes.func
};

export default Well;
