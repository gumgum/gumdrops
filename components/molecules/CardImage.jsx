import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const CardImage = ({ url, option, size, className, style }) => {
    const baseClass = 'gds-card__img-container',
        optionClass = option ? `${baseClass}--${option}` : '',
        sizeClass = size ? `${baseClass}--${size}` : '';

    const classNames = trimString(`${baseClass} ${optionClass} ${sizeClass} ${className}`);

    return (
        <div className={classNames} style={style}>
            <img className="gds-card__img" src={url} />
            <div className="gds-card__img-helper" />
        </div>
    );
};

CardImage.displayName = 'CardImage';

CardImage.defaultProps = {
    option: 'top',
    size: '',
    url: '',
    className: '',
    style: {}
};

CardImage.propTypes = {
    url: PropTypes.string.isRequired,
    /** top, bottom */
    option: PropTypes.oneOf(['top', 'bottom']),
    /** xs, sm, md, lg, xl */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string,
    style: PropTypes.object
};

export default CardImage;
