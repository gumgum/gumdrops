import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const LoadingDots = ({ whiteDots = false, size, className, style }) => {
    const baseClass = 'gds-loading__dot',
        whiteDotsClass = whiteDots ? `${baseClass}--white` : '',
        sizeClass = size ? `${baseClass}--${size}` : '';

    const classNames = trimString(`${baseClass} ${whiteDotsClass} ${sizeClass}`);

    return (
        <div style={style} className={className}>
            <div className="gds-loading">
                <div className={classNames} />
            </div>
        </div>
    );
};

LoadingDots.displayName = 'LoadingDots';

LoadingDots.defaultProps = {
    whiteDots: false
};

LoadingDots.propTypes = {
    whiteDots: PropTypes.bool,
    /** sm, lg */
    style: PropTypes.object,
    size: PropTypes.oneOf(['sm', 'lg']),
    className: PropTypes.string
};

export default LoadingDots;
