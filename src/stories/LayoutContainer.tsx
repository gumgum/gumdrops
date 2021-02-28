import React, { ReactChild, ReactChildren } from 'react';
import cx from 'classnames';

const baseClass = 'gds-layout__container';

export interface LayoutContainerProps {
    children: ReactChildren | ReactChild;
    className?: string;
    fullWidth?: boolean;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
    className,
    fullWidth,
    children,
    ...props
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--full-width`]: fullWidth
    });

    return (
        <div className={rootClass} {...props}>
            {children}
        </div>
    );
};
