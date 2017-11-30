import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const LoadingDots = ({ whiteDots = false, size, className, style }) => {

    const baseClass = 'gds-loading__dot',
        whiteDotsClass = (whiteDots) ? `${baseClass}--white` : '',
        sizeClass = (size) ? `${baseClass}--${size}` : '';

    const classNames = trimString(`${baseClass} ${whiteDotsClass} ${sizeClass}`);

    return (
        <div style={ style } className={ className }>
            <div className="gds-loading">
                <div className={ classNames }/>
            </div>
        </div>
    );
};

LoadingDots.displayName = 'LoadingDots';

LoadingDots.defaultProps = {
    whiteDots: false,
    size: null,
    className: '',
    style: {}
};

LoadingDots.propTypes = {
    whiteDots: PropTypes.bool,
    /** sm, lg */
    size: PropTypes.oneOf(['sm', 'lg']),
    className: PropTypes.string,
    style: PropTypes.object
};

export default LoadingDots;
