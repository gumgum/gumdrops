import React from 'react';
import PropTypes from 'prop-types';

const LoadingDots = ({ whiteDots = false, size, className, style }) => {

    const baseClass = 'gds-loading__dot',
        whiteDotsClass = (whiteDots) ? `${baseClass}--white` : '',
        sizeClass = (size) ? `${baseClass}--${size}` : '';

    const classNames = `${baseClass} ${whiteDotsClass} ${sizeClass}`;

    return (
        <div style={ style } className={ className }>
            <div className="gds-loading">
                <div className={ classNames }/>
            </div>
        </div>
    );
};

LoadingDots.defaultProps = {
    whiteDots: false,
    size: null,
    className: '',
    style: {}
};

LoadingDots.propTypes = {
    whiteDots: PropTypes.bool,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default LoadingDots;
