import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CardBlock = ({ option, className, style, children }) => {
    const baseClass = 'gds-card__block';
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${option}`]: option
    });

    return (
        <div className={rootClass} style={style}>
            {children}
        </div>
    );
};

CardBlock.displayName = 'CardBlock';

CardBlock.propTypes = {
    option: PropTypes.oneOf(['divide-top', 'divide-bottom']),
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default CardBlock;
