import React from 'react';
import cx from 'classnames';
import { Colors } from 'types';

export interface BadgeProps {
    text?: string;
    color?: Colors;
    empty?: boolean;
    className?: string;
}

const baseClass = 'gds-badge';

export const Badge: React.FC<BadgeProps> = ({ text, color, empty, className, ...otherProps }) => {
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
