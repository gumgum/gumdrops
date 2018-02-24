import React, { Component } from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Accordion = ({ children, context, size, className, ...otherProps }) => {
    const baseClass = 'gds-accordion',
        contextClass = context ? `${baseClass}--${context}` : '';
    const classNames = trimString(`${baseClass} ${contextClass} ${className}`);

    const newChildren = React.Children.map(children, child => {
        return React.cloneElement(child, {
            context,
            size
        });
    });

    return (
        <div className={classNames} {...otherProps}>
            <ul className="gds-accordion-list">{newChildren}</ul>
        </div>
    );
};

Accordion.displayName = 'Accordion';

Accordion.defaultProps = {
    context: '',
    size: '',
    className: ''
};

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
    /** dark, white */
    context: PropTypes.string,
    /** sm */
    size: PropTypes.oneOf(['sm']),
    className: PropTypes.string
};

export default Accordion;
