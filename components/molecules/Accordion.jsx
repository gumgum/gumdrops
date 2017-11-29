//vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ children, context, size, className, ...otherProps }) => {
    const baseClass = 'gds-accordion',
        contextClass = (context) ? `${baseClass}--${context}` : '';
    const classNames = `${baseClass} ${contextClass} ${className}`;

    const newChildren = React.Children.map(children, child => {
        return React.cloneElement(child, {
            context,
            size
        });
    });

    return (
        <div className={ classNames } { ...otherProps }>
            <ul className="gds-accordion-list">
                { newChildren }
            </ul>
        </div>
    );
};

Accordion.defaultProps = {
    className: '',
    context: '',
    size: ''
};

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    context: PropTypes.string,
    size: PropTypes.string
};

export default Accordion;
