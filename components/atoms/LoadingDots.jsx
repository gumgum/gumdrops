import React, { PropTypes } from 'react';

const LoadingDots = ({ whiteDots, size, style }) => {

    let loadingDotClasses = 'gds-loading__dot';
    whiteDots && (loadingDotClasses = `${loadingDotClasses} gds-loading__dot--white`);
    size && (loadingDotClasses = `${loadingDotClasses} gds-loading__dot--${size}`);

    return (
        <div style={ style }>
            <div className="gds-loading">
                <div className={ loadingDotClasses }/>
            </div>
        </div>
    );
};

LoadingDots.defaultProps = {
    whiteDots: false,
    size: null,
    style: null
};

LoadingDots.propTypes = {
    whiteDots: PropTypes.bool,
    size: PropTypes.string,
    style: PropTypes.object
};

export default LoadingDots;
