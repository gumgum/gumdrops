import React from 'react';
import PropTypes from 'prop-types';

const Trend = ({ context, className, style, value, unit }) => {

    const classNames = `gds-card__trend gds-card__trend--${context} ${className}`;

    return (
        <div
            className={ classNames }
            style={ style }
        >
            { value }{ unit }
        </div>
    );

};

Trend.defaultProps = {
    context: 'up',
    className: '',
    style: {},
    unit: '%'
};

Trend.propTypes = {
    context: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    unit: PropTypes.string
};

export default Trend;
