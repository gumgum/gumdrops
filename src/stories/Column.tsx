import React, { ReactChild, ReactChildren } from 'react';

type ColumnValue = string | number;

export interface ColumnProps extends React.HTMLAttributes<Element> {
    xs?: ColumnValue;
    sm?: ColumnValue;
    md?: ColumnValue;
    lg?: ColumnValue;
    xl?: ColumnValue;
}

export const Column: React.FC<ColumnProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    className,
    children,
    ...otherProps
}) => {
    const sizes = { xs, sm, md, lg, xl };

    const classList = Object.keys(sizes)
        .reduce((list, breakpoint) => {
            const size = sizes[breakpoint];
            return list.concat(size ? `gds-layout__column--${breakpoint}-${size}` : []);
        }, [])
        .concat(className || [])
        .join(' ');

    return (
        <div className={classList} {...otherProps}>
            {children}
        </div>
    );
};
