import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ text, position, context, size, variations, className, children, ...otherProps }) => {

    const baseClass = 'gds-tooltip',
        positionClass = position ? `${baseClass}--${position}` : '',
        contextClass = context ? `${baseClass}--${context}` : '',
        sizeClass = size ? `${baseClass}--${size}` : '',
        variationsClass = variations ? `${baseClass}--${variations}` : '';

    const classNames = `${positionClass} ${contextClass} ${sizeClass} ${variationsClass} ${className}`;

    return (
        <div className={ classNames } data-tooltip={ text } { ...otherProps }>{ children }</div>
    );

};

Tooltip.defaultProps = {
    text: 'default',
    position: 'top',
    context: 'default',
    size: 'default',
    variations: 'default',
    className: ''
};

Tooltip.propTypes = {
    text: PropTypes.string,
    position: PropTypes.oneOf(['top','top-right','right','bottom-right','bottom','bottom-left','left','top-left']),
    context: PropTypes.oneOf(['success', 'warning', 'info', 'danger']),
    size: PropTypes.oneOf(['lg']),
    variations: PropTypes.oneOf(['always','no-animate','bounce']),
    className: PropTypes.string,
    children: PropTypes.node
};

export default Tooltip;
