import React, { PropTypes } from 'react';

const Badge = ({ text, context, empty = false, className, style }) => {

    const baseClass = 'gds-badge',
        contextClass = (context) ? `${baseClass}--${context}` : '',
        emptyClass = (empty) ? `${baseClass}--empty` : '';

    const classNames = `${baseClass} ${contextClass} ${emptyClass} ${className}`;

    return (
        <span className={ classNames }>{ !empty && text }</span>
    );

};

Badge.defaultProps = {
    text: null,
    context: null,
    empty: false,
    className: '',
    style: {}
};

Badge.propTypes = {
    text: PropTypes.string,
    context: PropTypes.string,
    empty: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Badge;
