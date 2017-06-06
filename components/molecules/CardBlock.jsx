import React, { PropTypes } from 'react';

const CardBlock = ({ option, className, style, children }) => {

    const baseClass = 'gds-card__block',
        optionClass = (option) ? `${baseClass}--${option}` : '';

    const classNames = `${baseClass} ${optionClass} ${className}`;

    return (
        <div className={ classNames } style={ style }>
            { children }
        </div>
    );

};

CardBlock.propTypes = {
    option: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default CardBlock;
