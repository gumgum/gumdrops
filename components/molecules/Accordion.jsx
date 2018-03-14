import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Accordion = ({ children, context, size, className, ...otherProps }) => {
    const rootClass = cx('gds-accordion', className, {
        [`gds-accordion--${context}`]: context
    });

    const newChildren = React.Children.map(children, child => {
        return React.cloneElement(child, {
            context,
            size
        });
    });

    return (
        <div className={rootClass} {...otherProps}>
            <ul className="gds-accordion-list">{newChildren}</ul>
        </div>
    );
};

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
    /** dark, white */
    context: PropTypes.string,
    /** sm */
    size: PropTypes.oneOf(['sm']),
    className: PropTypes.string
};

export default Accordion;
