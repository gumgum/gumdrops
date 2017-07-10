import React from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ url, option, size, className, style }) => {

    const baseClass = 'gds-card__img-container',
        optionClass = (option) ? `${baseClass}--${option}` : '',
        sizeClass = (size) ? `${baseClass}--${size}` : '';

    const classNames = `${baseClass} ${optionClass} ${sizeClass} ${className}`;

    return (
        <div className={ classNames } style={ style }>
            <img className="gds-card__img" src={ url } />
            <div className="gds-card__img-helper" />
        </div>
    );

};

CardImage.defaultProps = {
    option: 'top',
    className: '',
    style: {}
};

CardImage.propTypes = {
    url: PropTypes.string.isRequired,
    option: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default CardImage;
