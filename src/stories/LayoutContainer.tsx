import React, { ReactChild, ReactChildren } from 'react';
import cx from 'classnames';

const baseClass = 'gds-layout__container';

export interface LayoutContainerProps extends React.HTMLAttributes<Element> {
    fullWidth?: boolean;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
    className,
    fullWidth,
    children,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--full-width`]: fullWidth
    });

    return (
        <div className={rootClass} {...otherProps}>
            {children}
        </div>
    );
};
