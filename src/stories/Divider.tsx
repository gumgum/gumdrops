import React from 'react';
import cx from 'classnames';

export interface DividerProps extends React.HTMLAttributes<Element> {
    label?: string;
    centered?: boolean;
    collapsible?: boolean;
    open?: boolean;
}

const baseClass = 'gds-divider';

export const Divider: React.FC<DividerProps> = ({
    label,
    centered,
    collapsible,
    open,
    className,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${centered}`]: centered,
        [`${baseClass}--${collapsible} -cursor--pointer`]: collapsible
    });

    const arrowClasses = cx(`${baseClass}__arrow`, {
        [`${baseClass}__arrow--collapse`]: !open
    });

    return (
        <div className={rootClass} {...otherProps}>
            {centered && <span className="gds-divider__line" />}
            <span className="gds-divider__label gds-form-group__label">{label}</span>
            <span className="gds-divider__line" />
            {collapsible && <span className={arrowClasses} />}
        </div>
    );
};
