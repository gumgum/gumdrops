import React from 'react';
import PropTypes from 'prop-types';

const CircularThumbnail = ({ context, size, className, ...otherProps }) => {

    const baseClass = 'gds-circular-thumbnail',
        contextClass = context ? `${baseClass}--${context}` : '',
        sizeClass = size ? `${baseClass}--${size}` : '';

    const classNames = `${baseClass} ${contextClass} ${sizeClass} ${className}`;

    return (
        <img className={ classNames } { ...otherProps } />
    );

};

CircularThumbnail.defaultProps = {
    context: 'default',
    size: 'default',
    className: ''
};

CircularThumbnail.propTypes = {
    context: PropTypes.oneOf(['secondary', 'success', 'warning', 'info', 'danger', 'white']),
    size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
    className: PropTypes.string
};

export default CircularThumbnail;
