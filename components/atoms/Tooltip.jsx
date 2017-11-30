import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Tooltip = ({ text, position, context, size, variations, className, children, ...otherProps }) => {

    const baseClass = 'gds-tooltip',
        positionClass = position ? `${baseClass}--${position}` : '',
        contextClass = context ? `${baseClass}--${context}` : '',
        sizeClass = size ? `${baseClass}--${size}` : '',
        variationsClass = variations ? `${baseClass}--${variations}` : '';

    const classNames = trimString(`${positionClass} ${contextClass} ${sizeClass} ${variationsClass} ${className}`);

    return (
        <div className={ classNames } data-tooltip={ text } { ...otherProps }>{ children }</div>
    );

};

Tooltip.displayName = 'Tooltip';

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
    /** top, top-right, right, bottom-right, bottom, bottom-left, left, top-left */
    position: PropTypes.oneOf(['top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left']),
    /** success, warning, info, danger */
    context: PropTypes.string,
    /** lg */
    size: PropTypes.oneOf(['lg']),
    /** always, no-animate, bounce */
    variations: PropTypes.oneOf(['always', 'no-animate', 'bounce']),
    className: PropTypes.string,
    children: PropTypes.node
};

export default Tooltip;
