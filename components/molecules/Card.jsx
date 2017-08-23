import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ option, size, className, style, children }) => {

    const baseClass = 'gds-card',
        optionClass = (option) ? `${baseClass}--${option}` : '',
        sizeClass = (size) ? `${baseClass}--${size}` : '';

    const classNames = `${baseClass} ${optionClass} ${sizeClass} ${className}`;

    return (
        <div className={ classNames } style={ style }>
            { children }
        </div>
    );

};

Card.propTypes = {
    option: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default Card;
