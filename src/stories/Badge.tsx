import React, { ReactChild, ReactChildren } from 'react';
import cx from 'classnames';
import { Colors } from 'types';

export interface BadgeProps extends React.HTMLAttributes<Element> {
    text?: JSX.Element[] | ReactChildren | ReactChild;
    color?: Colors;
    empty?: boolean;
}

const baseClass = 'gds-badge';

export const Badge: React.FC<BadgeProps> = ({
    color = 'default',
    text,
    empty,
    className,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${color}`]: color,
        [`${baseClass}--empty`]: empty
    });

    return (
        <span className={rootClass} {...otherProps}>
            {!empty && text}
        </span>
    );
};
