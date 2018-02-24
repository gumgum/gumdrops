import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Badge = ({ text, context, empty, className, style }) => {
    const baseClass = 'gds-badge',
        contextClass = context ? `${baseClass}--${context}` : '',
        emptyClass = empty ? `${baseClass}--empty` : '';

    const classNames = trimString(`${baseClass} ${contextClass} ${emptyClass} ${className}`);

    return <span className={classNames}>{!empty && text}</span>;
};

Badge.displayName = 'Badge';

Badge.defaultProps = {
    text: '',
    context: '',
    empty: false,
    className: '',
    style: {}
};

Badge.propTypes = {
    text: PropTypes.string,
    /** inverse, success, success-inverse, info, info-inverse, warning, warning-inverse, danger, danger-inverse */
    context: PropTypes.string,
    empty: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Badge;
