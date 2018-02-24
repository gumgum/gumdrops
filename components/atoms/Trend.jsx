import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Trend = ({ context, className, style, value, unit }) => {
    const classNames = trimString(`gds-card__trend gds-card__trend--${context} ${className}`);

    return (
        <div className={classNames} style={style}>
            {value}
            {unit}
        </div>
    );
};

Trend.displayName = 'Trend';

Trend.defaultProps = {
    context: 'up',
    className: '',
    style: {},
    unit: '%'
};

Trend.propTypes = {
    /** up, same, down */
    context: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    unit: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Trend;
