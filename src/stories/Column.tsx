import React, { ReactChild, ReactChildren } from 'react';

export interface ColumnProps {
    children: ReactChildren | ReactChild;
    className?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
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
