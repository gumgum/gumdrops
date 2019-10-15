import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CardImage = ({ url, option, size, className, style }) => {
    const baseClass = 'gds-card__img-container';
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${option}`]: option,
        [`${baseClass}--${size}`]: size
    });

    return (
        <div className={rootClass} style={style}>
            <img className="gds-card__img" src={url} />
            <div className="gds-card__img-helper" />
        </div>
    );
};

CardImage.displayName = 'CardImage';

CardImage.defaultProps = {
    option: 'top'
};

CardImage.propTypes = {
    url: PropTypes.string.isRequired,
    option: PropTypes.oneOf(['top', 'bottom']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string,
    style: PropTypes.object
};

export default CardImage;
