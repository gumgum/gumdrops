import React from 'react';
import PropTypes from 'prop-types';

const CardBlock = ({ option, className, style, children }) => {
    const baseClass = 'gds-card__block',
        optionClass = option ? `${baseClass}--${option}` : '';

    const classNames = `${baseClass} ${optionClass} ${className}`;

    return (
        <div className={classNames} style={style}>
            {children}
        </div>
    );
};

CardBlock.displayName = 'CardBlock';

CardBlock.propTypes = {
    /** divide-top, divide-bottom */
    option: PropTypes.oneOf(['divide-top', 'divide-bottom']),
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default CardBlock;
