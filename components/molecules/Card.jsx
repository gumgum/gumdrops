import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Card = ({ option, size, className, style, children }) => {
    const baseClass = 'gds-card',
        optionClass = option ? `${baseClass}--${option}` : '',
        sizeClass = size ? `${baseClass}--${size}` : '';

    const classNames = trimString(`${baseClass} ${optionClass} ${sizeClass} ${className}`);

    return (
        <div className={classNames} style={style}>
            {children}
        </div>
    );
};

Card.displayName = 'Card';

Card.propTypes = {
    /** white, underlined, underlined-secondary */
    option: PropTypes.string,
    /** xs, sm, md, lg, xl */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default Card;
