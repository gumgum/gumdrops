import React from 'react';
import cx from 'classnames';

interface AccordionCommonProps {
    color?: 'dark' | 'white';
    size?: 'sm' | '';
}

type OmitColor<T> = Omit<T, 'color'>;

export interface AccordionItemProps
    extends AccordionCommonProps,
        OmitColor<React.LiHTMLAttributes<HTMLLIElement>> {
    isOpen?: boolean;
    isLocked?: boolean;
    label: React.ReactChild;
}

export interface AccordionProps
    extends AccordionCommonProps,
        OmitColor<React.HTMLAttributes<Element>> {
    initialAllOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
    children,
    color,
    size = '',
    className,
    initialAllOpen,
    ...otherProps
}) => {
    const rootClass = cx('gds-accordion', className, {
        [`gds-accordion--${color}`]: color
    });

    const newChildren = React.Children.map(children, child => {
        if (!React.isValidElement<AccordionItemProps>(child)) {
            return child;
        }

        return React.cloneElement<AccordionItemProps>(child, {
            color,
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
