import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const CircularThumbnail = ({ context, size, className, ...otherProps }) => {

    const baseClass = 'gds-circular-thumbnail',
        contextClass = context ? `${baseClass}--${context}` : '',
        sizeClass = size ? `${baseClass}--${size}` : '';

    const classNames = trimString(`${baseClass} ${contextClass} ${sizeClass} ${className}`);

    return (
        <img className={ classNames } { ...otherProps } />
    );

};

CircularThumbnail.displayName = 'CircularThumbnail';

CircularThumbnail.defaultProps = {
    context: '',
    size: '',
    className: ''
};

CircularThumbnail.propTypes = {
    /** secondary, success, warning, info, danger, white */
    context: PropTypes.string,
    /** xs, sm, lg, xl */
    size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
    className: PropTypes.string
};

export default CircularThumbnail;
