import React from 'react';
import cx from 'classnames';
import { AccordionItemProps } from './Accordion';

export const AccordionItemContent: React.FC<Omit<AccordionItemProps, 'label'>> = ({
    className,
    color,
    size,
    children,
    ...otherProps
}) => {
    const stopClick: React.MouseEventHandler = e => {
        e.stopPropagation();
    };

    const rootClass = cx('gds-accordion__child-item', className, {
        [`gds-accordion__child-item--${color}`]: color
    });

    const titleClass = cx('gds-accordion__child-item-title', {
        [`gds-accordion__child-item-title--${size}`]: size
    });

    return (
        <li className={rootClass} onClick={stopClick} {...otherProps}>
            <h4 className={titleClass}>{children}</h4>
        </li>
    );
};
