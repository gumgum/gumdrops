import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CircularThumbnail = ({ context, size, className, ...otherProps }) => {
    const baseClass = 'gds-circular-thumbnail';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${context}`]: context,
        [`${baseClass}--${size}`]: size
    });

    return <img className={rootClass} {...otherProps} />;
};

CircularThumbnail.displayName = 'CircularThumbnail';

CircularThumbnail.propTypes = {
    /** One of: `secondary`, `success`, `warning`, `info`, `danger`, `white` */
    context: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
    className: PropTypes.string
};

export default CircularThumbnail;
