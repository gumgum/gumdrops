import React, { MouseEvent, KeyboardEvent, useState } from 'react';
import cx from 'classnames';
import { AccordionItemProps } from './Accordion';
import { keyCodes } from 'types';

type ToggleEvent = MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>;

export const AccordionItem: React.FC<AccordionItemProps> = ({
    isOpen: initialIsOpen,
    isLocked,
    label,
    size,
    color,
    className,
    children
}) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);

    const toggleOpen = (event: ToggleEvent): void => {
        event.stopPropagation(); // don't want nested accordions to propagate events
        event.preventDefault(); // prevents page scroll from space key
        const { type } = event;
        const { key } = event as KeyboardEvent;

        if (isLocked) return;
        const allowToggle =
            (type === 'keypress' && [keyCodes.space, keyCodes.enter].includes(key as keyCodes)) ||
            type === 'click';

        if (!allowToggle) return;

        setIsOpen(isOpen => !isOpen);
    };

    const rootClass = cx('gds-accordion__item', className, {
        [`gds-accordion__item--${color}`]: color,
        'gds-accordion__item--active': isOpen
    });

    const titleClass = cx('gds-accordion__item-title', {
        [`gds-accordion__item-title--${size}`]: size
    });

    const iconClass = cx('gds-accordion__item-icon', {
        [`gds-accordion__item-icon--${size}`]: size
    });

    const childClass = cx('gds-accordion__child-items', {
        [`gds-accordion__child-items--${size}`]: size
    });

    const newChildren = React.Children.map(children, child => {
        if (!React.isValidElement<AccordionItemProps>(child)) {
            return child;
        }

        return React.cloneElement<AccordionItemProps>(child, {
            color,
            size
        });
    });

    const regionId = `AccordionItem-region-${label}`;
    const labelId = `AccordionItem-label-${label}`;

    return (
        <li
            aria-pressed={isOpen}
            aria-controls={regionId}
            aria-expanded={isOpen}
            className={rootClass}
            onClick={toggleOpen}
            onKeyPress={toggleOpen}
            role="button"
            tabIndex={isLocked ? -1 : 0}>
            <h4 id={labelId} className={titleClass}>
                {label}
            </h4>
            {!isLocked && <span className={iconClass} />}
            <ul
                aria-labelledby={labelId}
                aria-hidden={!isOpen}
                className={childClass}
                id={regionId}
                role="region">
                {newChildren}
            </ul>
        </li>
    );
};
