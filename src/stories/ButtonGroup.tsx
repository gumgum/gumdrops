import React, { ReactChild, ReactChildren } from 'react';
import cx from 'classnames';
import { Sizes } from 'types';

export interface ButtonGroupProps extends React.HTMLAttributes<Element> {
    size?: Sizes;
    responsive?: boolean;
}

const baseClass = 'gds-button-group';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    size = 'md',
    responsive,
    className,
    children,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: size,
        [`${baseClass}--responsive`]: responsive
    });

    return (
        <div className={rootClass} {...otherProps}>
            {children}
        </div>
    );
};
