import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Accordion = ({ children, context, size, className, initialAllOpen, ...otherProps }) => {
    const rootClass = cx('gds-accordion', className, {
        [`gds-accordion--${context}`]: context
    });

    const newChildren = React.Children.map(children, child => {
        return React.cloneElement(child, {
            context,
            size,
            isOpen: child.props.isOpen ? child.props.isOpen : initialAllOpen
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
    /** Children should be `<AccordionItem>` */
    children: PropTypes.node.isRequired,
    /** One of: `dark`, `white` */
    context: PropTypes.string,
    /** Should all `<AccordionItem>` children be open on initial mount? */
    initialAllOpen: PropTypes.bool,
    size: PropTypes.oneOf(['sm']),
    className: PropTypes.string
};

export default Accordion;
