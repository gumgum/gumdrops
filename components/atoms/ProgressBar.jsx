import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ProgressBar = ({
    className,
    isSecondary,
    isStriped,
    size,
    useProgressColors,
    value,
    ...rest
}) => {
    const baseClass = 'gds-progress-bar';
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: !!size,
        [`${baseClass}--striped-primary`]: isStriped && !isSecondary,
        [`${baseClass}--striped-secondary`]: isStriped && isSecondary,
        [`${baseClass}--secondary`]: isSecondary && !isStriped,
        'gds-progress-bar--value-colors': useProgressColors
    });

    return <div className={rootClass} data-value={value} {...rest} />;
};

ProgressBar.propTypes = {
    className: PropTypes.string,
    isSecondary: PropTypes.bool,
    isStriped: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    /** Indicate if the bar should change from color when progressing (from red to green) */
    useProgressColors: PropTypes.bool,
    /** A number (`0` to `100`) representing progress percent */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default ProgressBar;
