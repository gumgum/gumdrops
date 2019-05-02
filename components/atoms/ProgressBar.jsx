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
    useProgressColors: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default ProgressBar;
