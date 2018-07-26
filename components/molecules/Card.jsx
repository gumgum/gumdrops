import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Card = ({ option, size, className, style, children }) => {
    const baseClass = 'gds-card';
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${option}`]: option,
        [`${baseClass}--${size}`]: size
    });

    return (
        <div className={rootClass} style={style}>
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
